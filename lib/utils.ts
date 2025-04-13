import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const sectionComponentsMapping: Record<string, React.ComponentType<any>> = {
    heroWithFormSection: dynamic(() => import("@/components/hero-with-form-section")),
    venueCategorySection: dynamic(() => import("@/components/venue-categories-section")),
    facilitiesSection: dynamic(() => import("@/components/facilities-section")),
    howItWorksSection: dynamic(() => import("@/components/how-it-works-section")),
    testimonialsSection: dynamic(() => import("@/components/testimonials-section")),
    venueSection: dynamic(() => import("@/components/venue-section")),
    faqSection: dynamic(() => import("@/components/faq-section")),
    titleDescriptionCtaSection: dynamic(() => import("@/components/title-description-cta-section")),
    imageGallerySection: dynamic(() => import("@/components/image-gallery-section")),
};
