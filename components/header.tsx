"use client";

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { Header } from "@/sanity.types";

export default function Header({ logo }: Header) {
    return (
        <header className="w-full absolute top-0 left-0 z-10">
            <div className="container flex h-16 items-center px-4 md:px-6">
                <div className="w-full flex justify-center md:justify-start">
                    <Link href="/" className="flex items-center">
                        {logo && (
                            <Image
                                src={urlFor(logo).url() || "/placeholder.svg"}
                                alt={logo.alt || "Site logo"}
                                width={120}
                                height={40}
                                className="h-8 w-auto object-contain"
                            />
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}
