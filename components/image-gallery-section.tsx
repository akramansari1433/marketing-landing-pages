"use client";
import type { ImageGallerySection } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function ImageGallerySection({ images }: ImageGallerySection) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <section>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
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
            </ResponsiveMasonry>
        </section>
    );
}
