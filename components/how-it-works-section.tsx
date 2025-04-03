import {
    internalGroqTypeReferenceTo,
    SanityImageCrop,
    SanityImageHotspot,
    type HowItWorksSection,
} from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface Step {
    icon?: {
        asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
    };
    title?: string;
    description?: string;
    _type: "feature";
    _key: string;
}

export default function HowItWorksSection({
    sectionTitle,
    sectionDescription,
    steps = [],
    backgroundColor,
}: HowItWorksSection) {
    return (
        <section
            className="w-full py-12 md:py-24 lg:py-32 bg-background"
            style={{ backgroundColor: backgroundColor?.hex }}
        >
            {/* Container */}
            <div className="px-4 md:px-6">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{sectionTitle}</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">{sectionDescription}</p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {steps.map((step, index) => (
                        <StepCard key={index} step={step} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StepCard({ step }: { step: Step }) {
    return (
        <div className=" max-w-md flex flex-col items-center space-y-4 rounded-lg border p-6 text-center shadow-sm transition-all hover:shadow-md">
            {/* Icon */}
            <div className="relative h-16 w-16 mb-2">
                {step.icon ? (
                    <Image src={urlFor(step.icon).url() || "/placeholder.svg"} alt="" fill className="object-contain" />
                ) : (
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">Icon</span>
                    </div>
                )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold">{step.title}</h3>

            {/* Description */}
            <p className="text-muted-foreground">{step.description}</p>
        </div>
    );
}
