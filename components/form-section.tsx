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
import type { FormSection } from "@/sanity.types";
import { toast } from "sonner";

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
                return acc;
            },
            {} as Record<string, string>
        ),
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
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
        <section className="py-16 px-4 md:px-6 lg:px-8" style={{ backgroundColor: data.backgroundColor?.hex }}>
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{data.title}</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">{data.description}</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
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
                                                            <Input placeholder={formfield.label} {...field} />
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
                                                            <FormControl>
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
                                    default:
                                        return null;
                                }
                            })}
                            <div className="pt-2">
                                <Button type="submit" className="w-full md:w-auto">
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
