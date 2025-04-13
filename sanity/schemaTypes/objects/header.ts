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
    ],
});
