import { type SchemaTypeDefinition } from "sanity";

// Documents
import { page } from "./documents/page";

// Sections
import { heroSection } from "./sections/heroSection";
import { featuresSection } from "./sections/featuresSection";
import { testimonialsSection } from "./sections/testimonialsSection";
import formSection from "./sections/formSection";
import { formField } from "./objects/formField";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [page, heroSection, featuresSection, testimonialsSection, formSection, formField],
};
