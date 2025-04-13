import dynamic from "next/dynamic";
import { client } from "@/sanity/lib/client";
import { defineQuery, groq } from "next-sanity";
import Header from "@/components/header";
import { sectionComponentsMapping } from "@/lib/utils";
import { FloatingButton } from "@/components/floating-button";

export const revalidate = 60;

export default async function Home() {
    const dataQuery = defineQuery(
        `*[_type == "page" && slug.current == "/"][0] {
            title,
            header,
            floatingButton,
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
                },
                venues[] {
                    ...,
                    facilities[]-> {
                    ...,
                    },
                }
            }   
        }`
    );
    const data = await client.fetch(dataQuery);

    return (
        <>
            {data?.header && <Header {...data.header} />}
            <main>
                {data?.content?.map((section, index) => {
                    // Select the matching component for the section type.
                    const SectionComponent = sectionComponentsMapping[section._type];

                    if (SectionComponent) {
                        return <SectionComponent key={section._key} {...section} />;
                    }
                    // Fallback if the section type doesn't have a component mapping.
                    return <p key={index}>Section not found</p>;
                })}

                {data?.floatingButton && <FloatingButton {...data.floatingButton} />}
            </main>
        </>
    );
}
