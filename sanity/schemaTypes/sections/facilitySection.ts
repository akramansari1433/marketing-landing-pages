import { defineField, defineType } from "sanity";

export const facilitiesSection = defineType({
    name: "facilitiesSection",
    title: "Facilities & Amenities Section",
    type: "object",
    fields: [
        defineField({
            name: "sectionTitle",
            title: "Section Title",
            type: "string",
            initialValue: "Facilities & Amenities",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "facilities",
            title: "Facilities & Amenities",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "facility" }],
                },
            ],
        }),
        defineField({
            name: "packagesTitle",
            title: "Packages Title",
            type: "string",
            initialValue: "What’s included in our venues?",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "packages",
            title: "Packages",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "name", type: "string" },
                        {
                            name: "facilities",
                            type: "array",
                            of: [{ type: "reference", to: [{ type: "facility" }] }],
                        },
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: "sectionTitle",
        },
    },
});
