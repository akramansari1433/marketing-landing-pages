import { type SchemaTypeDefinition } from "sanity";

// Documents
import { page } from "./documents/page";

// Objects
import { navigationItem } from "./objects/navigationItem";
import { header } from "./objects/header";
import { formField } from "./objects/formField";

// Sections
import { heroSection } from "./sections/heroSection";
import { howItWorksSection } from "./sections/howItWorksSection";
import { testimonialsSection } from "./sections/testimonialsSection";
import { formSection } from "./sections/formSection";
import { heroWithFormSection } from "./sections/heroWithFormSection";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        // Documents
        page,
        // Objects
        navigationItem,
        header,
        formField,
        // Sections
        heroSection,
        howItWorksSection,
        testimonialsSection,
        formSection,
        heroWithFormSection,
    ],
};
