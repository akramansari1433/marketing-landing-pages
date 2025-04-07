import dynamic from "next/dynamic";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import Header from "@/components/header";
import { notFound } from "next/navigation";

// Dynamically import components for each section type.
// Extend this mapping as you add more sections.
const sectionComponents: Record<string, React.ComponentType<any>> = {
    heroWithFormSection: dynamic(() => import("@/components/hero-with-form-section")),
    venueCategorySection: dynamic(() => import("@/components/venue-categories-section")),
    facilitiesSection: dynamic(() => import("@/components/facilities-section")),
    howItWorksSection: dynamic(() => import("@/components/how-it-works-section")),
    testimonialsSection: dynamic(() => import("@/components/testimonials-section")),
};

export const revalidate = 60;

export default async function Home({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    const pageQuery = defineQuery(
        `*[_type == "page" && slug.current == $slug][0] {
            title,
            header,
            content[] {
                ...,
                venueCategories[]-> {
                    ...,
                    facilities[]-> {
                        ...,
                    }
                },
                facilities[]-> {
                    ..., 
                },
                packages[] {
                    ...,
                    facilities[]-> {
                    ...,
                    },
                }
            }   
        }`
    );
    const data = await client.fetch(pageQuery, { slug: `/${slug}` });
    if (!data) {
        notFound();
    }

    return (
        <>
            {data?.header && <Header {...data.header} />}
            <main>
                {data?.content?.map((section, index) => {
                    // Select the matching component for the section type.
                    const SectionComponent = sectionComponents[section._type];

                    if (SectionComponent) {
                        return <SectionComponent key={section._key} {...section} />;
                    }
                    // Fallback if the section type doesn't have a component mapping.
                    return <p key={index}>Section not found</p>;
                })}
            </main>
        </>
    );
}
