"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { FaqSection } from "@/sanity.types";

export default function FAQSection({ _type, sectionTitle, description, faqs, backgroundColor }: FaqSection) {
    return (
        <section
            id={_type}
            className="w-full px-4 md:px-6 py-8 md:py-12 lg:py-16 bg-background"
            style={{ backgroundColor: backgroundColor?.hex }}
        >
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{sectionTitle}</h2>
                {description && <p className="text-muted-foreground md:text-xl max-w-[800px]">{description}</p>}
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqs?.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
