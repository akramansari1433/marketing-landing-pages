"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { TestimonialsSection } from "@/sanity.types";

interface Testimonial {
    quote?: string;
    author?: string;
    role?: string;
    company?: string;
    _type: "testimonial";
    _key: string;
}

export default function TestimonialsSection({
    _type,
    sectionTitle,
    sectionDescription,
    testimonials = [],
    backgroundColor,
}: TestimonialsSection) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showControls, setShowControls] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

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
    }, [testimonials]);

    const scrollToCard = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.querySelector(".testimonial-card")?.clientWidth || 350;
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
                const maxIndex = Math.max(0, (testimonials?.length || 0) - 1);
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
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{sectionTitle}</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">{sectionDescription}</p>
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
                                disabled={currentIndex >= (testimonials?.length || 0) - 1}
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
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card flex-none w-[300px] md:w-[350px] snap-center">
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <Card className="h-full">
            <CardContent className="pt-6">
                <div className="mb-4">
                    <svg className="h-8 w-8 text-slate-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                </div>
                <p className="text-slate-700 mb-4">{testimonial.quote}</p>
            </CardContent>
            <CardFooter className="border-t pt-4">
                <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    {(testimonial.role || testimonial.company) && (
                        <p className="text-sm text-slate-500">
                            {testimonial.role}
                            {testimonial.role && testimonial.company && " at "}
                            {testimonial.company}
                        </p>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}
