"use client";
import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { FloatingButton as FloatingButtonType } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export const FloatingButton: React.FC<FloatingButtonType> = ({ buttons, position = "bottom-right" }) => {
    if (!buttons?.length) return null;

    const positionClasses = {
        "bottom-right": "right-4",
        "bottom-left": "left-4",
    };

    return (
        <>
            {buttons.map((btn, index) => {
                const phoneNumber = btn.phoneNumber?.replace(/\s+/g, "");
                const handleClick = () => {
                    if (btn.type === "whatsapp") {
                        const message = encodeURIComponent(btn.whatsappMessage || "");
                        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
                    } else {
                        window.location.href = `tel:${phoneNumber}`;
                    }
                };

                // Calculate bottom position dynamically
                const bottomPosition = `${index * 4 + 2}rem`;

                return (
                    <Button
                        key={index}
                        size="lg"
                        onClick={handleClick}
                        className={cn(
                            "fixed z-50 h-12 w-12 !p-1 rounded-full shadow-lg animate-bounce",
                            positionClasses[position]
                        )}
                        style={{
                            backgroundColor: btn.backgroundColor?.hex || "#000000",
                            color: "#ffffff",
                            bottom: bottomPosition,
                        }}
                    >
                        {btn.icon ? (
                            <Image
                                src={urlFor(btn.icon).url()}
                                alt="Button Icon"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        ) : btn.type === "whatsapp" ? (
                            <MessageCircle className="h-5 w-5" />
                        ) : (
                            <Phone className="h-5 w-5" />
                        )}
                    </Button>
                );
            })}
        </>
    );
};

export default FloatingButton;
