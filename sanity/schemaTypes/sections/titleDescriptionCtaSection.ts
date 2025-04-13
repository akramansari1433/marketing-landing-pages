import { defineType } from "sanity";

export const titleDescriptionCtaSection = defineType({
    name: "titleDescriptionCtaSection",
    title: "Title, Description, and CTA Section",
    type: "object",
    fields: [
        {
            name: "backgroundColor",
            title: "Background Color",
            type: "color",
        },
        {
            name: "sectionTitle",
            title: "Section Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "sectionDescription",
            title: "Section Description",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "ctaButton",
            title: "Call to Action Button",
            type: "array",
            of: [
                {
                    type: "ctaButton",
                },
            ],
        },
    ],
});
