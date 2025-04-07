"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { FormSection } from "@/sanity.types";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { TimePicker } from "./time-picker";
import { Checkbox } from "@/components/ui/checkbox";

const generateSchema = (fields: FormSection["fields"] = []) => {
    const schemaObject: Record<string, any> = {};

    fields.forEach((field) => {
        const fieldLabel = field.label;
        switch (field.type) {
            case "text":
            case "phone":
            case "textarea": {
                let fieldSchema = z.string();
                if (field.required) {
                    fieldSchema = fieldSchema.min(1, {
                        message: `${fieldLabel} is required`,
                    });
                }
                schemaObject[field.name!] = fieldSchema;
                break;
            }
            case "number": {
                let fieldSchema = z.number();
                if (field.required) {
                    fieldSchema = fieldSchema.min(-Infinity, {
                        message: `${fieldLabel} is required`,
                    });
                }
                schemaObject[field.name!] = fieldSchema;
                break;
            }
            case "date": {
                let fieldSchema = z.date();
                if (field.required) {
                    fieldSchema = fieldSchema.min(new Date("1900-01-01"), {
                        message: `${fieldLabel} is required`,
                    });
                }
                schemaObject[field.name!] = fieldSchema.nullable();
                break;
            }
            case "time": {
                let fieldSchema = z.string();
                if (field.required) {
                    fieldSchema = fieldSchema.min(1, {
                        message: `${fieldLabel} is required`,
                    });
                }
                schemaObject[field.name!] = fieldSchema;
                break;
            }
            case "email": {
                let fieldSchema = z.string();
                if (field.required) {
                    fieldSchema = fieldSchema.min(1, {
                        message: `${fieldLabel} is required`,
                    });
                }
                fieldSchema = fieldSchema.email({
                    message: `Invalid email address`,
                });
                schemaObject[field.name!] = fieldSchema;
                break;
            }
            case "radio":
            case "select": {
                const options = field.options?.map((option) => option) || [];
                const fieldSchema = z.enum(options as [string, ...string[]], {
                    required_error: `${fieldLabel} is required`,
                    invalid_type_error: `${fieldLabel} must be one of: ${options.join(", ")}`,
                });
                schemaObject[field.name!] = fieldSchema;
                break;
            }
            case "checkbox": {
                let fieldSchema;
                if (field.required) {
                    fieldSchema = z.literal(true).refine((val) => val === true, {
                        message: `${fieldLabel} must be accepted`,
                    });
                } else {
                    fieldSchema = z.boolean();
                }
                schemaObject[field.name!] = fieldSchema;
                break;
            }
            case "termAndConditions": {
                let fieldSchema = z.boolean().refine((val) => val === true, {
                    message: `You must accept the ${fieldLabel || "terms and conditions"}`,
                });
                schemaObject[field.name!] = fieldSchema;
                break;
            }
            default:
                break;
        }
    });

    return z.object(schemaObject);
};

export default function FormSectionComponent(data: FormSection) {
    const formSchema = generateSchema(data.fields);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: data.fields?.reduce(
            (acc, field) => {
                if (
                    field.type === "text" ||
                    field.type === "email" ||
                    field.type === "phone" ||
                    field.type === "textarea"
                ) {
                    acc[field.name!] = "";
                }
                if (field.type === "number") {
                    acc[field.name!] = 0;
                }
                if (field.type === "date") {
                    acc[field.name!] = undefined;
                }
                if (field.type === "time") {
                    acc[field.name!] = "";
                }
                return acc;
            },
            {} as Record<string, any>
        ),
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("🚀 ~ onSubmit ~ values:", values);
        const response = await fetch(data.submissionEndpoint!, {
            method: "POST",
            body: JSON.stringify(values),
        });
        form.reset();
        toast.success("Form submitted successfully");
        console.log({ response });
    }

    const isLoading = form.formState.isSubmitting;

    return (
        <section
            className="py-8 px-4 rounded-xl md:px-4 lg:px-8"
            style={{ backgroundColor: data.backgroundColor?.hex }}
        >
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{data.title}</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">{data.description}</p>
                </div>

                <div className="p-6 md:p-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            {data.fields?.map((formfield) => {
                                switch (formfield.type) {
                                    case "text":
                                        return (
                                            <FormField
                                                key={formfield._key}
                                                control={form.control}
                                                name={formfield.name as never}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>{formfield.label}</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder={formfield.placeholder} {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        );
                                    case "number":
                                        return (
                                            <FormField
                                                key={formfield._key}
                                                control={form.control}
                                                name={formfield.name as never}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>{formfield.label}</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                type="number"
                                                                placeholder={formfield.placeholder}
                                                                {...field}
                                                                onChange={(e) => field.onChange(Number(e.target.value))}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        );
                                    case "email":
                                        return (
                                            <FormField
                                                key={formfield._key}
                                                control={form.control}
                                                name={formfield.name as never}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>{formfield.label}</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder={formfield.label} {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        );
                                    case "phone":
                                        return (
                                            <FormField
                                                key={formfield._key}
                                                control={form.control}
                                                name={formfield.name as never}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>{formfield.label}</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder={formfield.label} {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        );
                                    case "textarea":
                                        return (
                                            <FormField
                                                key={formfield._key}
                                                control={form.control}
                                                name={formfield.name as never}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>{formfield.label}</FormLabel>
                                                        <FormControl>
                                                            <Textarea placeholder={formfield.label} {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        );
                                    case "radio":
                                        return (
                                            <FormField
                                                key={formfield._key}
                                                control={form.control}
                                                name={formfield.name as never}
                                                render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel>{formfield.label}</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup
                                                                onValueChange={field.onChange}
                                                                defaultValue={field.value}
                                                                className="flex flex-col space-y-1"
                                                            >
                                                                {formfield.options?.map((option) => (
                                                                    <FormItem
                                                                        key={option.toLocaleLowerCase()}
                                                                        className="flex items-center space-x-3 space-y-0"
                                                                    >
                                                                        <FormControl>
                                                                            <RadioGroupItem value={option} />
                                                                        </FormControl>
                                                                        <FormLabel className="font-normal">
                                                                            {option}
                                                                        </FormLabel>
                                                                    </FormItem>
                                                                ))}
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        );
                                    case "select":
                                        return (
                                            <FormField
                                                key={formfield._key}
                                                control={form.control}
                                                name={formfield.name as never}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>{formfield.label}</FormLabel>
                                                        <Select
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                        >
                                                            <FormControl className="w-full">
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder={formfield.placeholder} />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {formfield.options?.map((option) => (
                                                                    <SelectItem
                                                                        key={option.toLocaleLowerCase()}
                                                                        value={option}
                                                                    >
                                                                        {option}
                                                                    </SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        );
                                    case "date":
                                        return (
                                            <FormField
                                                key={formfield._key}
                                                control={form.control}
                                                name={formfield.name as never}
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel>Date of birth</FormLabel>
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={cn(
                                                                            "w-full pl-3 text-left font-normal",
                                                                            !field.value && "text-muted-foreground"
                                                                        )}
                                                                    >
                                                                        {field.value ? (
                                                                            format(field.value, "PPP")
                                                                        ) : (
                                                                            <span>Pick a date</span>
                                                                        )}
                                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-full p-0" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={field.value}
                                                                    onSelect={field.onChange}
                                                                    disabled={(date) => date < new Date("1900-01-01")}
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>

                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        );
                                    case "time":
                                        return (
                                            <FormField
                                                key={formfield._key}
                                                control={form.control}
                                                name={formfield.name as never}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>{formfield.label}</FormLabel>
                                                        <FormControl>
                                                            <TimePicker
                                                                value={field.value}
                                                                onChange={field.onChange}
                                                                placeholder={formfield.placeholder}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        );
                                    case "termAndConditions":
                                        return (
                                            <FormField
                                                key={formfield._key}
                                                control={form.control}
                                                name={formfield.name as never}
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col space-y-2">
                                                        <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value}
                                                                    onCheckedChange={field.onChange}
                                                                />
                                                            </FormControl>
                                                            <div className="space-y-1 leading-none">
                                                                <FormLabel>
                                                                    {formfield.termsAndConditionsUrl ? (
                                                                        <span>
                                                                            I agree to the{" "}
                                                                            <a
                                                                                href={formfield.termsAndConditionsUrl}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                            >
                                                                                {formfield.label}
                                                                            </a>
                                                                        </span>
                                                                    ) : (
                                                                        formfield.label
                                                                    )}
                                                                </FormLabel>
                                                            </div>
                                                        </div>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        );
                                    default:
                                        return null;
                                }
                            })}
                            <div className="pt-2">
                                <Button type="submit" className="w-full py-6 text-lg">
                                    {isLoading ? "Submitting..." : data.submit}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
}
