import { defineField, defineType } from "sanity";

export const buttonType = defineType({
    name: "buttonType",
    title: "Button Type",
    type: "object",
    fields: [
        defineField({
            name: "type",
            title: "Type",
            type: "string",
            options: {
                list: [
                    { title: "Scroll to Section", value: "scroll" },
                    { title: "Link to URL", value: "link" },
                ],
                layout: "radio",
            },
            initialValue: "link",
        }),
        defineField({
            name: "scrollToSection",
            title: "Scroll to Section",
            type: "string",
            options: {
                list: [
                    { title: "Hero with Form", value: "heroWithFormSection" },
                    { title: "Venue Categories", value: "venueCategoriesSection" },
                    { title: "Features", value: "featuresSection" },
                    { title: "Testimonials", value: "testimonialsSection" },
                    { title: "FAQ", value: "faqSection" },
                    { title: "Contact", value: "contactSection" },
                ],
            },
            hidden: ({ parent }) => parent?.type !== "scroll",
        }),
        defineField({
            name: "url",
            title: "URL",
            type: "url",
            hidden: ({ parent }) => parent?.type !== "link",
        }),
    ],
});
