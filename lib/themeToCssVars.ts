import { Color, SiteSettings } from "@/sanity.types";

/**
 * Linearizes a sRGB component (0-1 range) using the standard gamma correction.
 */
function linearize(c: number): number {
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

/**
 * Converts an sRGB color (given in a { r, g, b, a? } object, with r, g, b in 0-255)
 * to an Oklch color string.
 *
 * The conversion follows these steps:
 * 1. Convert sRGB values from [0,255] to [0,1] and then linearize them.
 * 2. Transform the linear sRGB values to LMS values using a transformation matrix.
 * 3. Apply a cube root (non-linearity) to get intermediate values.
 * 4. Convert to the OkLab space using a weighted sum.
 * 5. Compute the chroma (C) and hue (h) from the OkLab a and b components.
 * 6. Format the result as an Oklch string.
 *
 * @param rgb - The sRGB color object.
 * @returns A string of the form "oklch(L C h)".
 */
export function rgbToOklch(rgb: { r: number; g: number; b: number; a?: number }): string {
    // Convert sRGB (0-255) to normalized 0-1 values and linearize them
    const R = linearize(rgb.r / 255);
    const G = linearize(rgb.g / 255);
    const B = linearize(rgb.b / 255);

    // Step 2: Convert linear sRGB to LMS using the matrix for OkLab conversion.
    // (These coefficients are specific for the OkLab conversion transformation.)
    const L = 0.412165612 * R + 0.536275208 * G + 0.0514575653 * B;
    const M = 0.211859107 * R + 0.6807189584 * G + 0.107406579 * B;
    const S = 0.0883097947 * R + 0.2818474174 * G + 0.6299787005 * B;

    // Step 3: Apply a cube root to each channel.
    const l = Math.cbrt(L);
    const m = Math.cbrt(M);
    const s = Math.cbrt(S);

    // Step 4: Convert the cube rooted LMS values to OkLab.
    const L_ok = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
    const a_ok = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
    const b_ok = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;

    // Step 5: Compute Chroma (C) and Hue (h)
    const C = Math.sqrt(a_ok * a_ok + b_ok * b_ok);
    let h = Math.atan2(b_ok, a_ok) * (180 / Math.PI);
    if (h < 0) h += 360; // Ensure hue is positive

    // Step 6: Format and return the resulting Oklch string.
    // Here L_ok is in a 0-1 range; adjust the precision as needed.
    return `oklch(${L_ok.toFixed(3)} ${C.toFixed(3)} ${h.toFixed(1)})`;
}

/**
 * Updated helper function that converts a Sanity color to an Oklch string.
 *
 * It leverages the `rgbToOklch` conversion, expecting the Sanity color to have an `rgb` property.
 */
const getOklchString = (color: Color | undefined): string | undefined => {
    // Check if the rgb object exists and that r, g, and b are defined.
    if (!color?.rgb || color.rgb.r === undefined || color.rgb.g === undefined || color.rgb.b === undefined) {
        return undefined;
    }

    // We can now safely call rgbToOklch since we know r, g, b are defined.
    return rgbToOklch({
        r: color.rgb.r,
        g: color.rgb.g,
        b: color.rgb.b,
        a: color.rgb.a, // Optional: passed along if present
    });
};

/**
 * Converts a SiteSettings theme color object to a React CSSProperties object
 * with custom properties for Oklch color values.
 */
export function themeToCssVars(colors: SiteSettings["themeColor"] | null): React.CSSProperties {
    if (!colors) return {};

    return {
        "--background": getOklchString(colors.background),
        "--foreground": getOklchString(colors.foreground),
        "--card": getOklchString(colors.background),
        "--card-foreground": getOklchString(colors.foreground),
        "--popover": getOklchString(colors.background),
        "--popover-foreground": getOklchString(colors.foreground),
        "--primary": getOklchString(colors.primary),
        "--primary-foreground": getOklchString(colors.primaryForeground),
        "--secondary": getOklchString(colors.secondary),
        "--secondary-foreground": getOklchString(colors.secondaryForeground),
        "--accent": getOklchString(colors.accent),
        "--accent-foreground": getOklchString(colors.accentForeground),
    } as React.CSSProperties;
}
