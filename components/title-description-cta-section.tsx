"use client";

import type { TitleDescriptionCtaSection } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default function TitleDescriptionSection({
    _type,
    sectionTitle,
    sectionDescription,
    backgroundColor,
    ctaButton,
}: TitleDescriptionCtaSection) {
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
            <div className="flex items-center justify-center">
                {ctaButton?.map((button, index) => {
                    const { type, icon, buttonText, phoneNumber, whatsappMessage, backgroundColor } = button;

                    return (
                        <a
                            key={index}
                            href={
                                type === "phone"
                                    ? `tel:${phoneNumber}`
                                    : `https://wa.me/${phoneNumber}?text=${whatsappMessage}`
                            }
                            style={{ backgroundColor: backgroundColor?.hex }}
                            className="flex items-center justify-center px-4 py-2 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out mr-4"
                        >
                            {icon && <Image src={urlFor(icon).url()} alt="" width={20} height={20} className="mr-2" />}
                            {buttonText}
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
