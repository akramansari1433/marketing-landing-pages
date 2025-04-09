import { defineField, defineType } from "sanity";

export const venueSection = defineType({
    name: "venueSection",
    title: "Venue Section",
    type: "object",
    fields: [
        defineField({
            name: "backgroundColor",
            title: "Background Color",
            type: "color",
        }),
        defineField({
            name: "sectionTitle",
            title: "Section Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
            description: "Description of the venue section",
        }),
        defineField({
            name: "venues",
            title: "Venues",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "venue",
                    fields: [
                        {
                            name: "image",
                            type: "image",
                            title: "Venue Image",
                        },
                        {
                            name: "name",
                            type: "string",
                            title: "Venue Name",
                        },
                        {
                            name: "location",
                            type: "string",
                            title: "Location",
                        },
                        {
                            name: "capacity",
                            type: "string",
                            title: "Capacity",
                        },
                        {
                            name: "rating",
                            type: "number",
                            title: "Rating",
                        },
                        {
                            name: "facilities",
                            type: "array",
                            title: "Facilities",
                            of: [{ type: "reference", to: [{ type: "facility" }] }],
                        },
                        {
                            name: "buttonText",
                            type: "string",
                            title: "Button Text",
                            description: "Text for the button in the category section",
                            initialValue: "Enquire Now",
                        },
                        {
                            name: "buttonAction",
                            title: "Button Action",
                            type: "buttonType",
                            description: "Configure what happens when the button is clicked",
                        },
                    ],
                },
            ],
        }),
    ],
});
