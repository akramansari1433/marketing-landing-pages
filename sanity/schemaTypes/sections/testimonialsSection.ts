import { defineType } from "sanity";

export const testimonialsSection = defineType({
    name: "testimonialsSection",
    title: "Testimonials Section",
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
            type: "text",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "rating",
            title: "Rating",
            type: "number",
            description: "Rating from 1 to 5",
            validation: (Rule) => Rule.min(1).max(5).precision(1),
        },
        {
            name: "testimonials",
            title: "Testimonials",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "testimonial",
                    title: "Testimonial",
                    fields: [
                        {
                            name: "quote",
                            title: "Quote",
                            type: "text",
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: "author",
                            title: "Author",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: "role",
                            title: "Role",
                            type: "string",
                        },
                        {
                            name: "company",
                            title: "Company",
                            type: "string",
                        },
                    ],
                },
            ],
        },
    ],
});
