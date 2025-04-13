"use client";

import Image from "next/image";

// Array of images – update with your own image sources and dimensions
const images = [
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
        alt: "Gallery Image 3",
        width: 600,
        height: 500,
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
        alt: "Gallery Image 4",
        width: 600,
        height: 600,
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        alt: "Gallery Image 5",
        width: 600,
        height: 400,
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
        alt: "Gallery Image 6",
        width: 600,
        height: 700,
    },

    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
        alt: "Gallery Image 12",
        width: 600,
        height: 550,
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        alt: "Gallery Image 1",
        width: 600,
        height: 400,
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        alt: "Gallery Image 2",
        width: 600,
        height: 800,
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
        alt: "Gallery Image 7",
        width: 600,
        height: 500,
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
        alt: "Gallery Image 8",
        width: 600,
        height: 800,
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
        alt: "Gallery Image 9",
        width: 600,
        height: 450,
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
        alt: "Gallery Image 10",
        width: 600,
        height: 750,
    },
    {
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
        alt: "Gallery Image 11",
        width: 600,
        height: 700,
    },
];
export default function MasonryGallery() {
    return (
        <div className="columns-2 md:columns-4 gap-4 space-y-4">
            {images.map((image, index) => (
                <div key={index} className="break-inside-avoid relative">
                    <div className="relative w-full h-auto">
                        <Image
                            src={image.src}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "0.5rem",
                            }}
                            className="object-cover"
                            quality={75}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
