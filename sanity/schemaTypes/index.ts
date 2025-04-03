import { type SchemaTypeDefinition } from "sanity";

// Documents
import { page } from "./documents/page";

// Sections
import { heroSection } from "./sections/heroSection";
import { howItWorksSection } from "./sections/howItWorksSection";
import { testimonialsSection } from "./sections/testimonialsSection";
import formSection from "./sections/formSection";
import { formField } from "./objects/formField";
import { heroWithFormSection } from "./sections/heroWithFormSection";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [page, heroSection, howItWorksSection, testimonialsSection, formSection, heroWithFormSection, formField],
};
