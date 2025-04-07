import { defineField, defineType } from "sanity";

export const venueSection = defineType({
    name: "venueSection",
    title: "Venue Section",
    type: "object",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "area",
            title: "Area",
            type: "string",
            description: 'Location area (e.g., "Downtown Dubai", "Dubai Marina")',
        }),
        defineField({
            name: "capacity",
            title: "Capacity",
            type: "string",
            description: 'e.g., "Up to 50 people"',
        }),
        defineField({
            name: "rating",
            title: "Rating",
            type: "number",
            description: "Rating from 1 to 5",
            validation: (Rule) => Rule.min(1).max(5).precision(1),
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            description: 'Quick info tags (e.g., "AV Equipped", "Downtown")',
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "venueCategory" }],
                },
            ],
        }),
        defineField({
            name: "facilities",
            title: "Facilities",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "facility" }],
                },
            ],
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "price",
            title: "Starting Price",
            type: "number",
            description: "Starting price in AED",
        }),
        defineField({
            name: "featured",
            title: "Featured Venue",
            type: "boolean",
            description: "Show this venue in the featured carousel",
            initialValue: false,
        }),
        defineField({
            name: "order",
            title: "Display Order",
            type: "number",
            initialValue: 0,
            description: "Order in featured carousel (lower numbers appear first)",
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "area",
            media: "image",
        },
    },
});
