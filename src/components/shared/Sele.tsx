"use client"
import React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function Sele({ data, title }: { data: { label: string, value: string }[], title: string }) {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={`Select ${title}`} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{title}</SelectLabel>
                    {data.map((item) => {
                        return (
                            <SelectItem key={item.label} value={item.value}>{item.label}</SelectItem>
                        )
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>

    )
}
