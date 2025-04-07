import { defineField, defineType } from "sanity";

export const venueCategorySection = defineType({
    name: "venueCategorySection",
    title: "Venue Category Section",
    type: "object",
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
            name: "venueCategories",
            title: "Venue Categories",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "venueCategory" }],
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "sectionTitle",
        },
    },
});
