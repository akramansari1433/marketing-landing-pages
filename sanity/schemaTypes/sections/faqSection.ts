import { defineField, defineType } from "sanity";

export const faqSection = defineType({
    name: "faqSection",
    title: "FAQ Section",
    type: "document",
    fields: [
        defineField({
            name: "backgroundColor",
            title: "Background Color",
            type: "color",
        }),
        defineField({
            name: "sectionTitle",
            title: "Section Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
            description: "Description of the venue section",
        }),
        defineField({
            name: "faqs",
            title: "FAQs",
            type: "array",
            of: [
                {
                    name: "faq",
                    title: "FAQ",
                    type: "object",
                    fields: [
                        {
                            name: "question",
                            title: "Question",
                            type: "string",
                            validation: (Rule) => Rule.required().max(200),
                        },
                        {
                            name: "answer",
                            title: "Answer",
                            type: "text",
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                    preview: {
                        select: {
                            title: "question",
                        },
                    },
                },
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
});
