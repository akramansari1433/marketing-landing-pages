"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface TimePickerProps {
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    placeholder?: string;
}

export function TimePicker({ value, onChange, className, placeholder }: TimePickerProps) {
    return (
        <div className={cn("grid gap-1 w-full", className)}>
            <Input
                type="time"
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                placeholder={placeholder}
                className="w-full"
            />
        </div>
    );
}
