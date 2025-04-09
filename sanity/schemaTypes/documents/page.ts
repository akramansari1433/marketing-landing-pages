import { defineType } from "sanity";

export const page = defineType({
    name: "page",
    type: "document",
    title: "Page",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "header",
            title: "Header",
            type: "header",
        },
        {
            name: "content",
            type: "array",
            title: "Content",
            of: [
                { type: "heroWithFormSection" },
                { type: "venueCategorySection" },
                { type: "howItWorksSection" },
                { type: "testimonialsSection" },
                { type: "facilitiesSection" },
                { type: "venueSection" },
                { type: "faqSection" },
            ],
        },
    ],
    preview: {
        select: { title: "title" },
    },
});
