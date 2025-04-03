import { defineType } from "sanity";

export const heroSection = defineType({
    name: "heroSection",
    title: "Hero Section",
    type: "object",
    fields: [
        {
            name: "title",
            title: "Hero Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "subtitle",
            title: "Hero Subtitle",
            type: "string",
        },
        {
            name: "backgroundImage",
            title: "Background Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "ctaText",
            title: "CTA Button Text",
            type: "string",
        },
        {
            name: "ctaLink",
            title: "CTA Link",
            type: "url",
        },
        {
            name: "alignContent",
            title: "Content Alignment",
            type: "string",
            options: {
                list: [
                    { title: "Left", value: "left" },
                    { title: "Center", value: "center" },
                    { title: "Right", value: "right" },
                ],
                layout: "radio",
            },
            initialValue: "center",
        },
        {
            name: "overlay",
            title: "Enable Dark Overlay",
            type: "boolean",
            initialValue: true,
        },
    ],
});
