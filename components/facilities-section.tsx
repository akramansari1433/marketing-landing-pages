"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { FacilitiesSection } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default function FacilitiesSection({ sectionTitle, facilities, packagesTitle, packages }: FacilitiesSection) {
    return (
        <section className="w-full px-4 md:px-8 py-8 md:py-16 lg:py-24 bg-background">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{sectionTitle}</h2>
            </div>
            <div className="space-y-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {facilities?.map((facility: any) => (
                        <Card key={facility._id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="flex flex-col items-center justify-center p-4 text-center h-full">
                                <Image
                                    src={urlFor(facility.icon).url()}
                                    alt={facility.name}
                                    width={50}
                                    height={50}
                                    className="mb-2"
                                />
                                <h3 className="text-sm font-medium">{facility.name}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
