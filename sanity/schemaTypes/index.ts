import { type SchemaTypeDefinition } from "sanity";

// Documents
import { page } from "./documents/page";
import { facility } from "./documents/facility";
import { venueCategory } from "./documents/venueCategory";
import { siteSettings } from "./documents/siteSetting";

// Objects
import { navigationItem } from "./objects/navigationItem";
import { header } from "./objects/header";
import { formField } from "./objects/formField";
import { ctaButton } from "./objects/ctaButton";
import { buttonType } from "./objects/buttonType";
import { floatingButton } from "./objects/floatingButton";

// Sections
import { heroSection } from "./sections/heroSection";
import { howItWorksSection } from "./sections/howItWorksSection";
import { testimonialsSection } from "./sections/testimonialsSection";
import { formSection } from "./sections/formSection";
import { heroWithFormSection } from "./sections/heroWithFormSection";
import { venueCategorySection } from "./sections/venueCategorySection";
import { facilitiesSection } from "./sections/facilitySection";
import { venueSection } from "./sections/venueSection";
import { faqSection } from "./sections/faqSection";
import { titleDescriptionCtaSection } from "./sections/titleDescriptionCtaSection";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        // Documents
        page,
        facility,
        venueCategory,
        siteSettings,
        // Objects
        navigationItem,
        header,
        formField,
        buttonType,
        ctaButton,
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
        titleDescriptionCtaSection,
    ],
};
