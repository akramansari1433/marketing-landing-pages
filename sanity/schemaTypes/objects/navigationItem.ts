import { defineType } from "sanity";

export const navigationItem = defineType({
    name: "navigationItem",
    title: "Navigation Item",
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
        {
            name: "isExternal",
            title: "Open in new tab",
            type: "boolean",
            initialValue: false,
        },
    ],
    preview: {
        select: {
            title: "label",
            subtitle: "link",
        },
    },
});
