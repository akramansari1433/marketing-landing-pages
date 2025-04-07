import { defineField, defineType } from "sanity";

export const venueCategory = defineType({
    name: "venueCategory",
    title: "Venue Category",
    type: "document",
    fields: [
        defineField({
            name: "icon",
            title: "Icon",
            type: "image",
            options: {
                accept: "image/svg+xml",
            },
            description: "Upload an SVG icon or select one from the library",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
        }),
        defineField({
            name: "capacity",
            title: "Capacity Range",
            type: "string",
            description: 'e.g., "5-50 people"',
        }),
        defineField({
            name: "facilities",
            title: "Facilities",
            type: "array",
            of: [{ type: "reference", to: [{ type: "facility" }] }],
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
            name: "buttonText",
            title: "Button Text",
            type: "string",
            description: "Text for the button in the category section",
            initialValue: "View Venues",
        }),
        defineField({
            name: "buttonLink",
            title: "Button Link",
            type: "url",
            description: "URL to link the button to",
            initialValue: "/venues",
        }),
    ],
});
