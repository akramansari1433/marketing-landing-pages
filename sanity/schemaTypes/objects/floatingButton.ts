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
                    type: "object",
                    fields: [
                        defineField({
                            name: "type",
                            title: "Button Type",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Phone Call", value: "phone" },
                                    { title: "WhatsApp", value: "whatsapp" },
                                ],
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "icon",
                            title: "Button Icon",
                            type: "image",
                            description: "Upload a custom icon for the button (optional)",
                            options: {
                                accept: "image/svg+xml", // Restricts file uploads to SVG files
                                hotspot: true,
                            },
                        }),
                        defineField({
                            name: "phoneNumber",
                            title: "Phone Number",
                            type: "string",
                            description: "Include country code (e.g., +1234567890)",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "whatsappMessage",
                            title: "WhatsApp Message",
                            type: "text",
                            description: "Pre-filled message for WhatsApp (optional)",
                            hidden: ({ parent }) => parent?.type !== "whatsapp",
                        }),
                        defineField({
                            name: "backgroundColor",
                            title: "Background Color",
                            type: "color",
                            description: "Background color for the button",
                        }),
                    ],
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
