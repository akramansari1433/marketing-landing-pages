import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { type HeroSection } from "@/sanity.types";

export default function HeroSection({
    _type,
    title,
    subtitle,
    backgroundImage,
    ctaText,
    ctaLink,
    alignContent = "center",
    overlay = true,
}: HeroSection) {
    // Determine text alignment classes based on alignContent
    const alignmentClasses = {
        left: "text-left items-start",
        center: "text-center items-center",
        right: "text-right items-end",
    }[alignContent];

    return (
        <section
            id={_type}
            className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            {backgroundImage ? (
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={urlFor(backgroundImage).url() || "/placeholder.svg"}
                        alt=""
                        fill
                        priority
                        className="object-cover"
                        style={
                            backgroundImage.hotspot
                                ? {
                                      objectPosition: `${backgroundImage.hotspot.x! * 100}% ${backgroundImage.hotspot.y! * 100}%`,
                                  }
                                : undefined
                        }
                    />
                </div>
            ) : (
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-900 to-gray-800" />
            )}

            {/* Optional Overlay */}
            {overlay && <div className="absolute inset-0 bg-black/50 z-10" />}

            {/* Content */}
            <div className="container relative z-20 px-4 md:px-6">
                <div className={cn("flex flex-col gap-6 max-w-5xl mx-auto", alignmentClasses)}>
                    <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">{title}</h1>

                    {subtitle && <p className="text-xl text-white/80 md:text-2xl">{subtitle}</p>}

                    {ctaText && ctaLink && (
                        <div className="mt-2">
                            <Button size="lg" asChild>
                                <Link href={ctaLink}>{ctaText}</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
