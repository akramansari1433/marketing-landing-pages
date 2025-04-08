"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    internalGroqTypeReferenceTo,
    type SanityImageCrop,
    type SanityImageHotspot,
    type HowItWorksSection,
} from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface Step {
    icon?: {
        asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
    };
    title?: string;
    description?: string;
    _type: "feature";
    _key: string;
}

export default function HowItWorksSection({
    _type,
    sectionTitle,
    sectionDescription,
    steps = [],
    backgroundColor,
}: HowItWorksSection) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            id={_type}
            className="w-full py-12 md:py-24 lg:py-32 bg-background"
            style={{ backgroundColor: backgroundColor?.hex }}
        >
            {/* Container */}
            <div className="px-4 md:px-6">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{sectionTitle}</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">{sectionDescription}</p>
                </div>

                {/* Mobile view - Scrollable layout with navigation buttons */}
                <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                    {/* Navigation buttons */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full bg-background/80 backdrop-blur-sm shadow-md border-gray-200 hover:bg-background"
                            onClick={scrollLeft}
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full bg-background/80 backdrop-blur-sm shadow-md border-gray-200 hover:bg-background"
                            onClick={scrollRight}
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Scrollable container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide px-8"
                    >
                        {steps.map((step, index) => (
                            <div key={index} className="flex-none w-[280px] snap-center">
                                <StepCard step={step} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepCard({ step }: { step: Step }) {
    return (
        <div className="max-w-md flex flex-col items-center space-y-4 rounded-lg border p-6 text-center shadow-sm transition-all hover:shadow-md">
            {/* Icon */}
            <div className="relative h-16 w-16 mb-2">
                {step.icon ? (
                    <Image src={urlFor(step.icon).url() || "/placeholder.svg"} alt="" fill className="object-contain" />
                ) : (
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">Icon</span>
                    </div>
                )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold">{step.title}</h3>

            {/* Description */}
            <p className="text-muted-foreground">{step.description}</p>
        </div>
    );
}
