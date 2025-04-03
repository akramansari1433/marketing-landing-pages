"use client";

import FormSectionComponent from "./form-section";
import { FormSection, HeroWithFormSection } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";

export default function HeroWithForm({
    backgroundType = "image",
    backgroundImage,
    backgroundColor,
    overlay = true,
    title,
    subtitle,
    form,
}: HeroWithFormSection) {
    const backgroundStyle =
        backgroundType === "image" && backgroundImage
            ? {
                  backgroundImage: `url(${urlFor(backgroundImage).url()})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
              }
            : { backgroundColor: backgroundColor?.hex || "#f3f4f6" };

    return (
        <section className="relative w-full min-h-[600px] flex items-center py-16 md:py-24" style={backgroundStyle}>
            {/* Overlay */}
            {overlay && backgroundType === "image" && <div className="absolute inset-0 bg-black/50" />}

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid gap-8 lg:grid-cols-2 items-center">
                    {/* Text Content */}
                    <div
                        className={`space-y-6 ${backgroundType === "image" && overlay ? "text-white" : "text-gray-900"}`}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
                        {subtitle && <p className="text-lg md:text-xl max-w-[600px]">{subtitle}</p>}
                    </div>

                    <div>
                        <FormSectionComponent {...(form as FormSection)} />
                    </div>
                </div>
            </div>
        </section>
    );
}
