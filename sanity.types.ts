/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type ImageGallerySection = {
  _type: "imageGallerySection";
  backgroundColor?: Color;
  sectionTitle?: string;
  sectionDescription?: string;
  images?: Array<{
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
    _key: string;
  }>;
};

export type TitleDescriptionCtaSection = {
  _type: "titleDescriptionCtaSection";
  backgroundColor?: Color;
  sectionTitle?: string;
  sectionDescription?: string;
  ctaButton?: Array<{
    _key: string;
  } & CtaButton>;
};

export type FaqSection = {
  _type: "faqSection";
  backgroundColor?: Color;
  sectionTitle?: string;
  description?: string;
  faqs?: Array<{
    question?: string;
    answer?: string;
    _type: "faq";
    _key: string;
  }>;
};

export type VenueSection = {
  _type: "venueSection";
  backgroundColor?: Color;
  sectionTitle?: string;
  description?: string;
  venues?: Array<{
    image?: {
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
    name?: string;
    location?: string;
    capacity?: string;
    rating?: number;
    facilities?: Array<{
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      _key: string;
      [internalGroqTypeReferenceTo]?: "facility";
    }>;
    buttonText?: string;
    buttonAction?: ButtonType;
    _type: "venue";
    _key: string;
  }>;
};

export type FacilitiesSection = {
  _type: "facilitiesSection";
  backgroundColor?: Color;
  sectionTitle?: string;
  facilities?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "facility";
  }>;
  packagesTitle?: string;
  packages?: Array<{
    name?: string;
    facilities?: Array<{
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      _key: string;
      [internalGroqTypeReferenceTo]?: "facility";
    }>;
    _key: string;
  }>;
};

export type VenueCategorySection = {
  _type: "venueCategorySection";
  backgroundColor?: Color;
  sectionTitle?: string;
  venueCategories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "venueCategory";
  }>;
};

export type HeroWithFormSection = {
  _type: "heroWithFormSection";
  backgroundType?: "image" | "color";
  backgroundImage?: {
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
  backgroundColor?: Color;
  overlay?: boolean;
  title?: string;
  subtitle?: string;
  form?: FormSection;
};

export type FormSection = {
  _type: "formSection";
  backgroundColor?: Color;
  title?: string;
  description?: string;
  fields?: Array<{
    _key: string;
  } & FormField>;
  submit?: string;
  submissionEndpoint?: string;
  redirectPath?: string;
};

export type TestimonialsSection = {
  _type: "testimonialsSection";
  backgroundColor?: Color;
  sectionTitle?: string;
  sectionDescription?: string;
  rating?: number;
  testimonials?: Array<{
    quote?: string;
    image?: {
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
    author?: string;
    role?: string;
    company?: string;
    _type: "testimonial";
    _key: string;
  }>;
};

export type HowItWorksSection = {
  _type: "howItWorksSection";
  backgroundColor?: Color;
  sectionTitle?: string;
  sectionDescription?: string;
  steps?: Array<{
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
  }>;
  chatButtonText?: string;
  chatButtonLink?: string;
};

export type HeroSection = {
  _type: "heroSection";
  title?: string;
  subtitle?: string;
  backgroundImage?: {
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
  ctaText?: string;
  ctaLink?: string;
  alignContent?: "left" | "center" | "right";
  overlay?: boolean;
};

export type CtaButton = {
  _type: "ctaButton";
  type?: "phone" | "whatsapp";
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
  buttonText?: string;
  phoneNumber?: string;
  whatsappMessage?: string;
  backgroundColor?: Color;
};

export type FormField = {
  _type: "formField";
  label?: string;
  placeholder?: string;
  name?: string;
  type?: "text" | "email" | "phone" | "number" | "date" | "time" | "textarea" | "select" | "radio" | "checkbox" | "termAndConditions";
  termsAndConditionsUrl?: string;
  options?: Array<string>;
  required?: boolean;
};

export type NavigationItem = {
  _type: "navigationItem";
  label?: string;
  link?: string;
  isExternal?: boolean;
};

export type SiteSettings = {
  _id: string;
  _type: "siteSettings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  logo?: {
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
  legalName?: string;
  contact?: {
    phone?: string;
    email?: string;
  };
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  };
  themeColor?: {
    background?: Color;
    foreground?: Color;
    primary?: Color;
    primaryForeground?: Color;
    secondary?: Color;
    secondaryForeground?: Color;
    accent?: Color;
    accentForeground?: Color;
  };
  social?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
};

export type VenueCategory = {
  _id: string;
  _type: "venueCategory";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
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
  name?: string;
  description?: string;
  capacity?: string;
  facilities?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "facility";
  }>;
  image?: {
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
  buttonText?: string;
  buttonAction?: ButtonType;
};

export type Facility = {
  _id: string;
  _type: "facility";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
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
  name?: string;
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  header?: Header;
  content?: Array<{
    _key: string;
  } & HeroWithFormSection | {
    _key: string;
  } & VenueCategorySection | {
    _key: string;
  } & HowItWorksSection | {
    _key: string;
  } & TestimonialsSection | {
    _key: string;
  } & FacilitiesSection | {
    _key: string;
  } & VenueSection | {
    _key: string;
  } & FaqSection | {
    _key: string;
  } & TitleDescriptionCtaSection | {
    _key: string;
  } & ImageGallerySection>;
  floatingButton?: FloatingButton;
};

export type FloatingButton = {
  _type: "floatingButton";
  buttons?: Array<{
    _key: string;
  } & CtaButton>;
  position?: "bottom-right" | "bottom-left";
};

export type ButtonType = {
  _type: "buttonType";
  type?: "scroll" | "link";
  scrollToSection?: "heroWithFormSection" | "venueCategoriesSection" | "featuresSection" | "testimonialsSection" | "faqSection" | "contactSection";
  url?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Header = {
  _type: "header";
  logo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Color = {
  _type: "color";
  hex?: string;
  alpha?: number;
  hsl?: HslaColor;
  hsv?: HsvaColor;
  rgb?: RgbaColor;
};

export type RgbaColor = {
  _type: "rgbaColor";
  r?: number;
  g?: number;
  b?: number;
  a?: number;
};

export type HsvaColor = {
  _type: "hsvaColor";
  h?: number;
  s?: number;
  v?: number;
  a?: number;
};

export type HslaColor = {
  _type: "hslaColor";
  h?: number;
  s?: number;
  l?: number;
  a?: number;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | ImageGallerySection | TitleDescriptionCtaSection | FaqSection | VenueSection | FacilitiesSection | VenueCategorySection | HeroWithFormSection | FormSection | TestimonialsSection | HowItWorksSection | HeroSection | CtaButton | FormField | NavigationItem | SiteSettings | VenueCategory | Facility | Page | FloatingButton | ButtonType | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Header | Slug | Color | RgbaColor | HsvaColor | HslaColor;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./app/[slug]/page.tsx
// Variable: query
// Query: *[_type == "page"]{        "slug": slug.current    }
export type QueryResult = Array<{
  slug: string | null;
}>;
// Variable: pageQuery
// Query: *[_type == "page" && slug.current == $slug][0] {            title,            header,            floatingButton,            content[] {                ...,                venueCategories[]-> {                    ...,                    facilities[]-> {                        ...,                    }                },                facilities[]-> {                    ...,                 },                packages[] {                    ...,                    facilities[]-> {                    ...,                    },                },                venues[] {                    ...,                    facilities[]-> {                    ...,                    },                }            }           }
export type PageQueryResult = {
  title: string | null;
  header: Header | null;
  floatingButton: FloatingButton | null;
  content: Array<{
    _key: string;
    _type: "facilitiesSection";
    backgroundColor?: Color;
    sectionTitle?: string;
    facilities: Array<{
      _id: string;
      _type: "facility";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
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
      name?: string;
    }> | null;
    packagesTitle?: string;
    packages: Array<{
      name?: string;
      facilities: Array<{
        _id: string;
        _type: "facility";
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
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
        name?: string;
      }> | null;
      _key: string;
    }> | null;
    venueCategories: null;
    venues: null;
  } | {
    _key: string;
    _type: "faqSection";
    backgroundColor?: Color;
    sectionTitle?: string;
    description?: string;
    faqs?: Array<{
      question?: string;
      answer?: string;
      _type: "faq";
      _key: string;
    }>;
    venueCategories: null;
    facilities: null;
    packages: null;
    venues: null;
  } | {
    _key: string;
    _type: "heroWithFormSection";
    backgroundType?: "color" | "image";
    backgroundImage?: {
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
    backgroundColor?: Color;
    overlay?: boolean;
    title?: string;
    subtitle?: string;
    form?: FormSection;
    venueCategories: null;
    facilities: null;
    packages: null;
    venues: null;
  } | {
    _key: string;
    _type: "howItWorksSection";
    backgroundColor?: Color;
    sectionTitle?: string;
    sectionDescription?: string;
    steps?: Array<{
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
    }>;
    chatButtonText?: string;
    chatButtonLink?: string;
    venueCategories: null;
    facilities: null;
    packages: null;
    venues: null;
  } | {
    _key: string;
    _type: "imageGallerySection";
    backgroundColor?: Color;
    sectionTitle?: string;
    sectionDescription?: string;
    images?: Array<{
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
      _key: string;
    }>;
    venueCategories: null;
    facilities: null;
    packages: null;
    venues: null;
  } | {
    _key: string;
    _type: "testimonialsSection";
    backgroundColor?: Color;
    sectionTitle?: string;
    sectionDescription?: string;
    rating?: number;
    testimonials?: Array<{
      quote?: string;
      image?: {
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
      author?: string;
      role?: string;
      company?: string;
      _type: "testimonial";
      _key: string;
    }>;
    venueCategories: null;
    facilities: null;
    packages: null;
    venues: null;
  } | {
    _key: string;
    _type: "titleDescriptionCtaSection";
    backgroundColor?: Color;
    sectionTitle?: string;
    sectionDescription?: string;
    ctaButton?: Array<{
      _key: string;
    } & CtaButton>;
    venueCategories: null;
    facilities: null;
    packages: null;
    venues: null;
  } | {
    _key: string;
    _type: "venueCategorySection";
    backgroundColor?: Color;
    sectionTitle?: string;
    venueCategories: Array<{
      _id: string;
      _type: "venueCategory";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
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
      name?: string;
      description?: string;
      capacity?: string;
      facilities: Array<{
        _id: string;
        _type: "facility";
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
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
        name?: string;
      }> | null;
      image?: {
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
      buttonText?: string;
      buttonAction?: ButtonType;
    }> | null;
    facilities: null;
    packages: null;
    venues: null;
  } | {
    _key: string;
    _type: "venueSection";
    backgroundColor?: Color;
    sectionTitle?: string;
    description?: string;
    venues: Array<{
      image?: {
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
      name?: string;
      location?: string;
      capacity?: string;
      rating?: number;
      facilities: Array<{
        _id: string;
        _type: "facility";
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
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
        name?: string;
      }> | null;
      buttonText?: string;
      buttonAction?: ButtonType;
      _type: "venue";
      _key: string;
    }> | null;
    venueCategories: null;
    facilities: null;
    packages: null;
  }> | null;
} | null;

// Source: ./app/layout.tsx
// Variable: siteSettingsQuery
// Query: *[_type == "siteSettings"][0] {        logo,        themeColor,        legalName    }
export type SiteSettingsQueryResult = {
  logo: {
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
  } | null;
  themeColor: {
    background?: Color;
    foreground?: Color;
    primary?: Color;
    primaryForeground?: Color;
    secondary?: Color;
    secondaryForeground?: Color;
    accent?: Color;
    accentForeground?: Color;
  } | null;
  legalName: string | null;
} | null;

// Source: ./app/page.tsx
// Variable: dataQuery
// Query: *[_type == "page" && slug.current == "/"][0] {            title,            header,            floatingButton,            content[] {                ...,                venueCategories[]-> {                    ...,                    facilities[]-> {                        ...,                    }                },                facilities[]-> {                    ...,                 },                packages[] {                    ...,                    facilities[]-> {                    ...,                    },                },                venues[] {                    ...,                    facilities[]-> {                    ...,                    },                }            }           }
export type DataQueryResult = {
  title: string | null;
  header: Header | null;
  floatingButton: FloatingButton | null;
  content: Array<{
    _key: string;
    _type: "facilitiesSection";
    backgroundColor?: Color;
    sectionTitle?: string;
    facilities: Array<{
      _id: string;
      _type: "facility";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
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
      name?: string;
    }> | null;
    packagesTitle?: string;
    packages: Array<{
      name?: string;
      facilities: Array<{
        _id: string;
        _type: "facility";
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
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
        name?: string;
      }> | null;
      _key: string;
    }> | null;
    venueCategories: null;
    venues: null;
  } | {
    _key: string;
    _type: "faqSection";
    backgroundColor?: Color;
    sectionTitle?: string;
    description?: string;
    faqs?: Array<{
      question?: string;
      answer?: string;
      _type: "faq";
      _key: string;
    }>;
    venueCategories: null;
    facilities: null;
    packages: null;
    venues: null;
  } | {
    _key: string;
    _type: "heroWithFormSection";
    backgroundType?: "color" | "image";
    backgroundImage?: {
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
    backgroundColor?: Color;
    overlay?: boolean;
    title?: string;
    subtitle?: string;
    form?: FormSection;
    venueCategories: null;
    facilities: null;
    packages: null;
    venues: null;
  } | {
    _key: string;
    _type: "howItWorksSection";
    backgroundColor?: Color;
    sectionTitle?: string;
    sectionDescription?: string;
    steps?: Array<{
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
    }>;
    chatButtonText?: string;
    chatButtonLink?: string;
    venueCategories: null;
    facilities: null;
    packages: null;
    venues: null;
  } | {
    _key: string;
    _type: "imageGallerySection";
    backgroundColor?: Color;
    sectionTitle?: string;
    sectionDescription?: string;
    images?: Array<{
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
      _key: string;
    }>;
    venueCategories: null;
    facilities: null;
    packages: null;
    venues: null;
  } | {
    _key: string;
    _type: "testimonialsSection";
    backgroundColor?: Color;
    sectionTitle?: string;
    sectionDescription?: string;
    rating?: number;
    testimonials?: Array<{
      quote?: string;
      image?: {
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
      author?: string;
      role?: string;
      company?: string;
      _type: "testimonial";
      _key: string;
    }>;
    venueCategories: null;
    facilities: null;
    packages: null;
    venues: null;
  } | {
    _key: string;
    _type: "titleDescriptionCtaSection";
    backgroundColor?: Color;
    sectionTitle?: string;
    sectionDescription?: string;
    ctaButton?: Array<{
      _key: string;
    } & CtaButton>;
    venueCategories: null;
    facilities: null;
    packages: null;
    venues: null;
  } | {
    _key: string;
    _type: "venueCategorySection";
    backgroundColor?: Color;
    sectionTitle?: string;
    venueCategories: Array<{
      _id: string;
      _type: "venueCategory";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
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
      name?: string;
      description?: string;
      capacity?: string;
      facilities: Array<{
        _id: string;
        _type: "facility";
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
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
        name?: string;
      }> | null;
      image?: {
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
      buttonText?: string;
      buttonAction?: ButtonType;
    }> | null;
    facilities: null;
    packages: null;
    venues: null;
  } | {
    _key: string;
    _type: "venueSection";
    backgroundColor?: Color;
    sectionTitle?: string;
    description?: string;
    venues: Array<{
      image?: {
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
      name?: string;
      location?: string;
      capacity?: string;
      rating?: number;
      facilities: Array<{
        _id: string;
        _type: "facility";
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
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
        name?: string;
      }> | null;
      buttonText?: string;
      buttonAction?: ButtonType;
      _type: "venue";
      _key: string;
    }> | null;
    venueCategories: null;
    facilities: null;
    packages: null;
  }> | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"page\"]{\n        \"slug\": slug.current\n    }": QueryResult;
    "*[_type == \"page\" && slug.current == $slug][0] {\n            title,\n            header,\n            floatingButton,\n            content[] {\n                ...,\n                venueCategories[]-> {\n                    ...,\n                    facilities[]-> {\n                        ...,\n                    }\n                },\n                facilities[]-> {\n                    ..., \n                },\n                packages[] {\n                    ...,\n                    facilities[]-> {\n                    ...,\n                    },\n                },\n                venues[] {\n                    ...,\n                    facilities[]-> {\n                    ...,\n                    },\n                }\n            }   \n        }": PageQueryResult;
    "*[_type == \"siteSettings\"][0] {\n        logo,\n        themeColor,\n        legalName\n    }": SiteSettingsQueryResult;
    "*[_type == \"page\" && slug.current == \"/\"][0] {\n            title,\n            header,\n            floatingButton,\n            content[] {\n                ...,\n                venueCategories[]-> {\n                    ...,\n                    facilities[]-> {\n                        ...,\n                    }\n                },\n                facilities[]-> {\n                    ..., \n                },\n                packages[] {\n                    ...,\n                    facilities[]-> {\n                    ...,\n                    },\n                },\n                venues[] {\n                    ...,\n                    facilities[]-> {\n                    ...,\n                    },\n                }\n            }   \n        }": DataQueryResult;
  }
}
