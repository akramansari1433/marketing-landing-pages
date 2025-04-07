import { defineType } from "sanity";

export const formField = defineType({
    name: "formField",
    title: "Form Field",
    type: "object",
    fields: [
        {
            name: "label",
            title: "Label",
            type: "string",
        },
        {
            name: "placeholder",
            title: "Placeholder",
            type: "string",
        },
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "type",
            title: "Type",
            type: "string",
            options: {
                list: [
                    { title: "Text", value: "text" },
                    { title: "Email", value: "email" },
                    { title: "Phone", value: "phone" },
                    { title: "Number", value: "number" },
                    { title: "Date", value: "date" },
                    { title: "Time", value: "time" },
                    { title: "Textarea", value: "textarea" },
                    { title: "Select", value: "select" },
                    { title: "Radio", value: "radio" },
                    { title: "Checkbox", value: "checkbox" },
                    { title: "Term and Conditions", value: "termAndConditions" },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "termsAndConditionsUrl",
            title: "Terms and Conditions URL",
            type: "url",
            hidden: ({ parent }: { parent: { type?: string } }) => parent?.type !== "termAndConditions",
        },
        {
            name: "options",
            title: "Options",
            type: "array",
            of: [{ type: "string" }],
            hidden: ({ parent }: { parent: { type?: string } }) =>
                parent?.type !== "select" && parent?.type !== "radio",
        },
        {
            name: "required",
            title: "Required",
            type: "boolean",
        },
    ],
});
