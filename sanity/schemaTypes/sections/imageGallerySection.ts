import { defineType } from "sanity";

export const imageGallerySection = defineType({
    name: "imageGallerySection",
    title: "Image Gallery Section",
    type: "object",
    fields: [
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }],
        },
    ],
    preview: {
        select: {
            title: "images",
        },
        prepare({ title }) {
            return {
                title: `Image Gallery Section`,
                subtitle: `${title?.length} images`,
            };
        },
    },
});
