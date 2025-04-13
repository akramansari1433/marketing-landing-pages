import { Settings } from "lucide-react";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
    S.list()
        .id("root")
        .title("Zoom Venues")
        .items([
            S.listItem()
                .title("Site Settings")
                .child(S.document().schemaType("siteSettings").documentId("siteSettings"))
                .icon(Settings),
            S.divider(),
            ...S.documentTypeListItems().filter((listItem) => listItem.getId() !== "siteSettings"),
        ]);
