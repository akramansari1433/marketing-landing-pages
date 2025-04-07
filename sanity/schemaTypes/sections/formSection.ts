import { defineType } from "sanity";

export const formSection = defineType({
    name: "formSection",
    title: "Form Section",
    type: "object",
    fields: [
        {
            name: "backgroundColor",
            title: "Background Color",
            type: "color",
        },
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            name: "fields",
            title: "Fields",
            type: "array",
            of: [{ type: "formField" }],
            validation: (Rule) => Rule.required(),
        },
        {
            name: "submit",
            title: "Submit Button Text",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "submissionEndpoint",
            title: "Submission Endpoint",
            type: "url",
            validation: (Rule) => Rule.required(),
        },
    ],
});
