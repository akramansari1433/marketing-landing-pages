"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { VenueCategorySection } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import Image from "next/image";

export default function VenueCategoriesSection({
    _type,
    sectionTitle,
    venueCategories,
    backgroundColor,
}: VenueCategorySection) {
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
    }, [venueCategories]);

    const scrollToCard = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.querySelector(".venue-card")?.clientWidth || 350;
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
                const maxIndex = Math.max(0, (venueCategories?.length || 0) - 1);
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{sectionTitle}</h2>
            </div>

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
                                <ChevronLeft className="h-6 w-6" />
                            </Button>
                        </div>

                        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-background/80 backdrop-blur-sm shadow-md border-gray-200 hover:bg-background"
                                onClick={() => scrollToCard("right")}
                                aria-label="Scroll right"
                                disabled={currentIndex >= (venueCategories?.length || 0) - 1}
                            >
                                <ChevronRight className="h-6 w-6" />
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
                    {venueCategories?.map((category: any) => (
                        <Card
                            key={category._id}
                            className="venue-card overflow-hidden flex-none w-[300px] md:w-[350px] snap-center p-4 gap-4"
                        >
                            <div className="flex justify-center items-center gap-3 border-b p-2">
                                <Image
                                    src={urlFor(category.icon).url() || "/placeholder.svg"}
                                    alt={category.name}
                                    width={40}
                                    height={40}
                                    className="h-10 w-10"
                                />
                                <h3 className="text-lg font-semibold">{category.name}</h3>
                            </div>

                            <div className="space-y-4">
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

                                <Button
                                    size="lg"
                                    className="w-full"
                                    onClick={() => {
                                        if (category.buttonAction?.type === "scroll") {
                                            const element = document.getElementById(
                                                category.buttonAction.scrollToSection
                                            );
                                            if (element) {
                                                element.scrollIntoView({ behavior: "smooth" });
                                            }
                                        } else if (
                                            category.buttonAction?.type === "link" &&
                                            category.buttonAction.url
                                        ) {
                                            window.location.href = category.buttonAction.url;
                                        }
                                    }}
                                >
                                    {category.buttonText}
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
