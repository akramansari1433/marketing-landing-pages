"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { VenueSection } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { ChevronLeft, ChevronRight, Users, MapPin, Star } from "lucide-react";
import Image from "next/image";

export default function VenueSection({ _type, sectionTitle, description, venues, backgroundColor }: VenueSection) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -350,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 350,
                behavior: "smooth",
            });
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
                {description && <p className="text-muted-foreground md:text-xl max-w-[800px]">{description}</p>}
            </div>

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
                        <ChevronLeft className="h-6 w-6" />
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
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </div>

                {/* Scrollable container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide px-8"
                >
                    {venues?.map((venue: any) => (
                        <Card
                            key={venue._key || venue._id}
                            className="overflow-hidden p-0 flex-none w-[300px] md:w-[350px] snap-center"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={urlFor(venue.image).url() || "/placeholder.svg"}
                                    alt={venue.name}
                                    fill
                                    className="object-cover transition-transform hover:scale-105"
                                />
                                {venue.rating && (
                                    <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 flex items-center">
                                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                                        <span className="text-xs font-medium">{venue.rating}</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-4 space-y-3">
                                <div>
                                    <h3 className="font-semibold">{venue.name}</h3>
                                    {venue.location && (
                                        <div className="flex items-center text-sm text-gray-500">
                                            <MapPin className="h-3 w-3 mr-1" />
                                            {venue.location}
                                        </div>
                                    )}
                                </div>

                                {venue.capacity && (
                                    <div className="flex items-center text-sm">
                                        <Users className="h-4 w-4 text-gray-500 mr-1" />
                                        <span>{venue.capacity}</span>
                                    </div>
                                )}

                                {venue.facilities && venue.facilities.length > 0 && (
                                    <div className="flex flex-wrap gap-1">
                                        {venue.facilities.map((facility: any, index: number) => (
                                            <span
                                                key={facility._id || index}
                                                className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800"
                                            >
                                                {facility.name}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <Button
                                    className="w-full mt-2"
                                    onClick={() => {
                                        if (venue.buttonAction?.type === "scroll") {
                                            const element = document.getElementById(venue.buttonAction.scrollToSection);
                                            if (element) {
                                                element.scrollIntoView({ behavior: "smooth" });
                                            }
                                        } else if (venue.buttonAction?.type === "link" && venue.buttonAction.url) {
                                            window.location.href = venue.buttonAction.url;
                                        }
                                    }}
                                >
                                    {venue.buttonText || "Enquire Now"}
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
