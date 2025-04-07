"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import type { Header } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";

export default function Header({ logo, navigationItems = [], ctaButton }: Header) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full border-b bg-background">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
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

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navigationItems.map((item) => (
                        <Link
                            key={item._key}
                            href={item.link as string}
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            {item.label}
                        </Link>
                    ))}

                    {ctaButton && (
                        <Button asChild>
                            <Link href={ctaButton.link as string}>{ctaButton.label}</Link>
                        </Button>
                    )}
                </nav>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" aria-label="Open Menu">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                        <nav className="flex flex-col gap-4 mt-8">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item._key}
                                    href={item.link as string}
                                    className="text-sm font-medium transition-colors hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {ctaButton && (
                                <Button asChild className="mt-2">
                                    <Link href={ctaButton.link as string} onClick={() => setIsOpen(false)}>
                                        {ctaButton.label}
                                    </Link>
                                </Button>
                            )}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
