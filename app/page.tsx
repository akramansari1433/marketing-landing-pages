import dynamic from "next/dynamic";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import Header from "@/components/header";

// Dynamically import components for each section type.
// Extend this mapping as you add more sections.
const sectionComponents: Record<string, React.ComponentType<any>> = {
    heroSection: dynamic(() => import("@/components/hero-section")),
    heroWithFormSection: dynamic(() => import("@/components/hero-with-form-section")),
    howItWorksSection: dynamic(() => import("@/components/how-it-works-section")),
    testimonialsSection: dynamic(() => import("@/components/testimonials-section")),
    formSection: dynamic(() => import("@/components/form-section")),
};

export const revalidate = 60;

export default async function Home() {
    const dataQuery = defineQuery(
        `*[_type == "page" && slug.current == "/"][0] {
            title,
            header,
            content,
        }`
    );
    const data = await client.fetch(dataQuery);

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
