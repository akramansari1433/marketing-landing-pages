import { defineType } from "sanity";

export const page = defineType({
    name: "page",
    type: "document",
    title: "Page",
    fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "slug", type: "slug", title: "Slug", options: { source: "title" } },
        {
            name: "content",
            type: "array",
            title: "Content",
            of: [
                { type: "heroSection" },
                { type: "howItWorksSection" },
                { type: "testimonialsSection" },
                { type: "formSection" },
                { type: "heroWithFormSection" },
            ],
        },
    ],
    preview: {
        select: { title: "title" },
    },
});
