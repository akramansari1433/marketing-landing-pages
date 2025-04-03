import { defineType } from "sanity";

export const featuresSection = defineType({
    name: "featuresSection",
    title: "Features Section",
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
            name: "features",
            title: "Features",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "feature",
                    title: "Feature",
                    fields: [
                        {
                            name: "icon",
                            title: "Icon",
                            type: "image",
                            options: {
                                accept: "image/svg+xml", // Restricts file uploads to SVG files
                            },
                            validation: (Rule) => Rule.required(),
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
                            type: "text",
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                },
            ],
        },
    ],
});
