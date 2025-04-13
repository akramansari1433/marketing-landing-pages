"use client";
import { Card, CardContent } from "@/components/ui/card";
import type { FacilitiesSection } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default function FacilitiesSection({
    _type,
    sectionTitle,
    facilities,
    packagesTitle,
    packages,
    backgroundColor,
}: FacilitiesSection) {
    return (
        <section
            id={_type}
            className="w-full px-4 md:px-6 py-8 md:py-12 lg:py-16 bg-background"
            style={{ backgroundColor: backgroundColor?.hex }}
        >
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{sectionTitle}</h2>
            </div>
            <div className="space-y-8">
                <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-7xl">
                    {facilities?.map((facility: any) => (
                        <Card
                            key={facility._id}
                            className="border-0 shadow-sm hover:shadow-md transition-shadow w-[200px]"
                        >
                            <CardContent className="flex flex-col items-center justify-center p-4 text-center h-[150px]">
                                <Image
                                    src={urlFor(facility.icon).url() || "/placeholder.svg"}
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
