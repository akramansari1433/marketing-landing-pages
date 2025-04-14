"use client";
import type { ImageGallerySection } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function ImageGallerySection({
    _type,
    sectionTitle,
    sectionDescription,
    backgroundColor,
    images,
}: ImageGallerySection) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <section
            id={_type}
            className="w-full px-4 md:px-6 py-8 md:py-12 lg:py-16 bg-background"
            style={{ backgroundColor: backgroundColor?.hex }}
        >
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
                {sectionTitle && (
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{sectionTitle}</h2>
                )}
                {sectionDescription && (
                    <p className="text-muted-foreground md:text-xl max-w-[800px]">{sectionDescription}</p>
                )}
            </div>
            <div className="max-w-5xl mx-auto">
                {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}> */}
                <Masonry
                    gutter="16px"
                    // style={{ gap: "0px" }}
                    // itemStyle={{ gap: "0px" }}
                >
                    {images?.map((image, index) => (
                        <img
                            key={image._key}
                            src={urlFor(image).url()}
                            alt={`Image ${index + 1}`}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    ))}
                </Masonry>
                {/* </ResponsiveMasonry> */}
            </div>
        </section>
    );
}
