import { defineType } from "sanity";

export const titleDescriptionSection = defineType({
    name: "titleDescriptionSection",
    title: "Title and Description Section",
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
            type: "string",
            validation: (Rule) => Rule.required(),
        },
    ],
});
