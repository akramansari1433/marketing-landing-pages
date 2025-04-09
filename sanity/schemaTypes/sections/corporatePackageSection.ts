import { defineField, defineType } from "sanity";

export const corporatePackageSection = defineType({
    name: "corporatePackageSection",
    title: "Corporate Package Section",
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
            initialValue: "Corporate Packages",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "icon",
            title: "Icon",
            type: "image",
            options: {
                accept: "image/svg+xml", // Restricts file uploads to SVG files
                hotspot: true,
            },
            description: "Upload an SVG icon or select one from the library",
        }),
        defineField({
            name: "features",
            title: "Features",
            type: "array",
            of: [{ type: "string" }],
            description: "List of features included in this package",
        }),
        defineField({
            name: "buttonText",
            title: "Button Text",
            type: "string",
            initialValue: "Get Quote",
        }),
        defineField({
            name: "buttonLink",
            title: "Button Link",
            type: "url",
            description: "Link to the booking or inquiry page",
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "description",
        },
    },
});
