"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxSelect({ title, value, checked, setCategory, multiSelect }: { title: string, value: string, checked: boolean, setCategory: (value: string) => void, multiSelect: boolean }) {
    return (
        <div className="flex items-center space-x-2 p-2 border rounded-2xl w-max" onClick={() => setCategory(value)}>
            <Checkbox id={value} value={value} checked={!multiSelect ? checked : undefined} name="value" />
            <label
                htmlFor={value}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {title}
            </label>
        </div>
    )
}
