import { defineType } from "sanity";

export const heroWithFormSection = defineType({
    name: "heroWithFormSection",
    title: "Hero with Form Section",
    type: "object",
    fields: [
        {
            name: "backgroundType",
            title: "Background Type",
            type: "string",
            options: {
                list: [
                    { title: "Image", value: "image" },
                    { title: "Color", value: "color" },
                ],
                layout: "radio",
            },
            initialValue: "image",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "backgroundImage",
            title: "Background Image",
            type: "image",
            options: {
                hotspot: true,
            },
            hidden: ({ parent }) => parent?.backgroundType !== "image",
        },
        {
            name: "backgroundColor",
            title: "Background Color",
            type: "color",
            hidden: ({ parent }) => parent?.backgroundType !== "color",
        },
        {
            name: "overlay",
            title: "Enable Dark Overlay",
            type: "boolean",
            initialValue: true,
        },
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "subtitle",
            title: "Subtitle",
            type: "string",
        },
        {
            name: "form",
            title: "Form",
            type: "formSection",
        },
    ],
});
