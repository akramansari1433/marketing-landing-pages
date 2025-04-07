import { defineType } from "sanity";

export const header = defineType({
    name: "header",
    title: "Header",
    type: "object",
    fields: [
        {
            name: "logo",
            title: "Logo",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                },
            ],
        },
        {
            name: "navigationItems",
            title: "Navigation Items",
            type: "array",
            of: [{ type: "navigationItem" }],
        },
        {
            name: "ctaButton",
            title: "CTA Button",
            type: "object",
            fields: [
                {
                    name: "label",
                    title: "Label",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: "link",
                    title: "Link",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                },
            ],
        },
    ],
    preview: {
        select: {
            title: "logo.alt",
            media: "logo",
        },
        prepare({ title, media }) {
            return {
                title: "Header",
                subtitle: title,
                media,
            };
        },
    },
});
