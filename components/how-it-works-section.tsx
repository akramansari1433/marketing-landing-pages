"use client";

import { useEffect, useRef, useState } from "react";
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
    const [showControls, setShowControls] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Check if we need to show scroll controls based on content width
    useEffect(() => {
        const checkOverflow = () => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const hasOverflow = container.scrollWidth > container.clientWidth;
                setShowControls(hasOverflow);
            }
        };

        checkOverflow();
        window.addEventListener("resize", checkOverflow);
        return () => window.removeEventListener("resize", checkOverflow);
    }, [steps]);

    const scrollToCard = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.querySelector(".step-card")?.clientWidth || 280;
            const gap = 24; // 6 in tailwind's gap-6 equals 24px
            const scrollAmount = cardWidth + gap;

            if (direction === "left") {
                const newIndex = Math.max(0, currentIndex - 1);
                setCurrentIndex(newIndex);
                container.scrollTo({
                    left: newIndex * scrollAmount,
                    behavior: "smooth",
                });
            } else {
                const maxIndex = Math.max(0, (steps?.length || 0) - 1);
                const newIndex = Math.min(maxIndex, currentIndex + 1);
                setCurrentIndex(newIndex);
                container.scrollTo({
                    left: newIndex * scrollAmount,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <section
            id={_type}
            className="w-full px-4 md:px-6 py-8 md:py-12 lg:py-16 bg-background"
            style={{ backgroundColor: backgroundColor?.hex }}
        >
            {/* Container */}
            <div className="px-4 md:px-6">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{sectionTitle}</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">{sectionDescription}</p>
                </div>

                {/* Mobile view - Scrollable layout with navigation buttons */}
                <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                    {/* Navigation buttons - only shown when needed */}
                    {showControls && (
                        <>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full bg-background/80 backdrop-blur-sm shadow-md border-gray-200 hover:bg-background"
                                    onClick={() => scrollToCard("left")}
                                    aria-label="Scroll left"
                                    disabled={currentIndex === 0}
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </Button>
                            </div>

                            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full bg-background/80 backdrop-blur-sm shadow-md border-gray-200 hover:bg-background"
                                    onClick={() => scrollToCard("right")}
                                    aria-label="Scroll right"
                                    disabled={currentIndex >= (steps?.length || 0) - 1}
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </Button>
                            </div>
                        </>
                    )}

                    {/* Scrollable container with center alignment when fewer cards */}
                    <div
                        ref={scrollContainerRef}
                        className={`flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide px-8 ${
                            !showControls ? "justify-center" : ""
                        }`}
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {steps.map((step, index) => (
                            <div key={index} className="step-card flex-none w-[280px] snap-center">
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
