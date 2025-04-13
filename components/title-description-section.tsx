"use client";

import type { TitleDescriptionSection } from "@/sanity.types";

export default function TitleDescriptionSection({
    _type,
    sectionTitle,
    sectionDescription,
    backgroundColor,
}: TitleDescriptionSection) {
    return (
        <section
            id={_type}
            className="w-full px-4 md:px-6 py-20 md:py-28 lg:py-32 bg-background"
            style={{ backgroundColor: backgroundColor?.hex }}
        >
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{sectionTitle}</h2>
                {sectionDescription && (
                    <p className="text-muted-foreground md:text-xl max-w-[800px]">{sectionDescription}</p>
                )}
            </div>
        </section>
    );
}
