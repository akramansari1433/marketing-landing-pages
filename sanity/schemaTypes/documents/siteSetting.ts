// sanity/schema/documents/siteSettings.ts
import { defineType } from "sanity";

export const siteSettings = defineType({
    name: "siteSettings",
    type: "document",
    title: "Site Settings",

    fields: [
        {
            name: "logo",
            type: "image",
            title: "Logo",
        },
        {
            name: "legalName",
            type: "string",
            title: "Legal Name",
        },
        {
            name: "contact",
            type: "object",
            title: "Contact",
            fields: [
                {
                    name: "phone",
                    type: "string",
                    title: "Phone",
                },
                {
                    name: "email",
                    type: "string",
                    title: "Email",
                },
            ],
        },
        {
            name: "address",
            type: "object",
            title: "Address",
            fields: [
                {
                    name: "street",
                    type: "string",
                    title: "Street",
                },
                {
                    name: "city",
                    type: "string",
                    title: "City",
                },
                {
                    name: "state",
                    type: "string",
                    title: "State",
                },
                {
                    name: "zipCode",
                    type: "string",
                    title: "Zip Code",
                },
            ],
        },
        {
            name: "themeColor",
            type: "object",
            title: "Theme Color",
            fields: [
                {
                    name: "background",
                    title: "Background Color",
                    type: "color",
                    description: "Background color for the site",
                },
                {
                    name: "foreground",
                    title: "Foreground Color",
                    type: "color",
                    description: "Foreground color(text color) for the site",
                },
                {
                    name: "primary",
                    title: "Primary Color",
                    type: "color",
                    description: "Primary color for the site",
                },
                {
                    name: "primaryForeground",
                    title: "Primary Foreground Color",
                    type: "color",
                    description:
                        "Primary foreground color(text color) for the site. Used for text on primary color background",
                },
                {
                    name: "secondary",
                    title: "Secondary Color",
                    type: "color",
                    description: "Secondary color for the site",
                },
                {
                    name: "secondaryForeground",
                    title: "Secondary Foreground Color",
                    type: "color",
                    description:
                        "Secondary foreground color(text color) for the site. Used for text on secondary color background",
                },
                {
                    name: "accent",
                    title: "Accent Color",
                    type: "color",
                    description: "Accent color for the site",
                },
                {
                    name: "accentForeground",
                    title: "Accent Foreground Color",
                    type: "color",
                    description:
                        "Accent foreground color(text color) for the site. Used for text on accent color background",
                },
            ],
        },
        {
            name: "social",
            type: "object",
            title: "Social",
            fields: [
                {
                    name: "facebook",
                    type: "url",
                    title: "Facebook",
                },
                {
                    name: "twitter",
                    type: "url",
                    title: "Twitter",
                },
                {
                    name: "instagram",
                    type: "url",
                    title: "Instagram",
                },
                {
                    name: "linkedin",
                    type: "url",
                    title: "LinkedIn",
                },
                {
                    name: "youtube",
                    type: "url",
                    title: "YouTube",
                },
            ],
        },
    ],
    initialValue: {
        _id: "siteSettings",
    },
});
