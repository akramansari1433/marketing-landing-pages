"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { VenueCategorySection } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Users } from "lucide-react";
import Image from "next/image";

export default function VenueCategoriesSection({ sectionTitle, venueCategories }: VenueCategorySection) {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{sectionTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6">
                {venueCategories?.map((category: any) => (
                    <Card key={category._id} className="overflow-hidden">
                        <div className="p-4 flex items-center gap-3 border-b">
                            <Image
                                src={urlFor(category.icon).url()}
                                alt={category.name}
                                width={40}
                                height={40}
                                className="h-10 w-10"
                            />
                            <h3 className="text-lg font-semibold">{category.name}</h3>
                        </div>

                        <div className="space-y-4 p-4">
                            <div className="relative h-48 w-full overflow-hidden rounded-md">
                                <Image
                                    src={urlFor(category.image).url() || ""}
                                    alt={category.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm text-gray-600">{category.description}</p>

                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-gray-500" />
                                    <span className="text-sm font-medium">Capacity: {category.capacity}</span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.facilities.map((facility: any, index: number) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                                        >
                                            {facility.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Button size="lg" className="">
                                {category.buttonText}
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
