"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { type TestimonialsSection } from "@/sanity.types";

interface Testimonial {
    quote?: string;
    author?: string;
    role?: string;
    company?: string;
    _type: "testimonial";
    _key: string;
}

export default function TestimonialsSection({
    sectionTitle,
    sectionDescription,
    testimonials = [],
    backgroundColor,
}: TestimonialsSection) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    return (
        <section className="py-16 px-4 md:px-6 lg:px-8" style={{ backgroundColor: backgroundColor?.hex }}>
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{sectionTitle}</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">{sectionDescription}</p>
                </div>

                {/* Desktop view - Grid layout */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>

                {/* Mobile view - Carousel */}
                <div className="md:hidden">
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div
                                className="transition-transform duration-300 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                <div className="flex">
                                    {testimonials.map((testimonial, index) => (
                                        <div key={index} className="w-full flex-shrink-0">
                                            <TestimonialCard testimonial={testimonial} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {testimonials.length > 1 && (
                            <div className="flex justify-center mt-6 gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={prevTestimonial}
                                    className="rounded-full"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                    <span className="sr-only">Previous testimonial</span>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={nextTestimonial}
                                    className="rounded-full"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                    <span className="sr-only">Next testimonial</span>
                                </Button>
                            </div>
                        )}
                    </div>
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
