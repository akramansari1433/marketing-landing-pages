import { defineField, defineType } from "sanity";

export const floatingButton = defineType({
    name: "floatingButton",
    title: "Floating Button",
    type: "object",
    fields: [
        defineField({
            name: "buttons",
            title: "Buttons",
            type: "array",
            of: [
                {
                    type: "ctaButton",
                },
            ],
        }),
        defineField({
            name: "position",
            title: "Button Position",
            type: "string",
            options: {
                list: [
                    { title: "Bottom Right", value: "bottom-right" },
                    { title: "Bottom Left", value: "bottom-left" },
                ],
            },
            initialValue: "bottom-right",
        }),
    ],
});
