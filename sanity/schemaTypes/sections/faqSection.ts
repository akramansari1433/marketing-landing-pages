import { defineField, defineType } from "sanity";

export const faqSection = defineType({
    name: "faqSection",
    title: "FAQ Section",
    type: "document",
    fields: [
        defineField({
            name: "question",
            title: "Question",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "answer",
            title: "Answer",
            type: "text",
            rows: 4,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "Booking", value: "booking" },
                    { title: "Venues", value: "venues" },
                    { title: "Payments", value: "payments" },
                    { title: "Cancellation", value: "cancellation" },
                    { title: "Services", value: "services" },
                    { title: "Other", value: "other" },
                ],
            },
            initialValue: "booking",
        }),
        defineField({
            name: "featured",
            title: "Featured on Homepage",
            type: "boolean",
            description: "Show this FAQ on the homepage",
            initialValue: false,
        }),
        defineField({
            name: "order",
            title: "Display Order",
            type: "number",
            initialValue: 0,
        }),
    ],
    preview: {
        select: {
            title: "question",
            subtitle: "category",
        },
    },
});
