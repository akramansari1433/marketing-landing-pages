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
import { venueCategorySection } from "./sections/venueCategorySection";
import { facility } from "./documents/facility";
import { venueCategory } from "./documents/venueCategory";
import { facilitiesSection } from "./sections/facilitySection";
import { buttonType } from "./objects/buttonType";
import { venueSection } from "./sections/venueSection";
import { faqSection } from "./sections/faqSection";
import { floatingButton } from "./objects/floatingButton";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        // Documents
        page,
        facility,
        venueCategory,
        // Objects
        navigationItem,
        header,
        formField,
        buttonType,
        floatingButton,
        // Sections
        heroSection,
        howItWorksSection,
        testimonialsSection,
        formSection,
        heroWithFormSection,
        venueCategorySection,
        facilitiesSection,
        venueSection,
        faqSection,
    ],
};
