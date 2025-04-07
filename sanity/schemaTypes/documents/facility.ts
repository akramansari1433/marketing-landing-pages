import { defineType } from "sanity";

export const facility = defineType({
    name: "facility",
    title: "Facility",
    type: "document",
    fields: [
        {
            name: "icon",
            title: "Icon",
            type: "image",
            options: {
                accept: "image/svg+xml",
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: "name",
            media: "icon",
        },
    },
});
