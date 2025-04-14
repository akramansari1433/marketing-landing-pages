import { defineType } from "sanity";

export const imageGallerySection = defineType({
    name: "imageGallerySection",
    title: "Image Gallery Section",
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
        },
        {
            name: "sectionDescription",
            title: "Section Description",
            type: "string",
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }],
        },
    ],
    preview: {
        select: {
            title: "sectionTitle",
            description: "sectionDescription",
        },
    },
});
