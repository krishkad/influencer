"use client";
import React, { useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { RiInstagramFill } from 'react-icons/ri';
import { cn } from '@/lib/utils';

const RadioSelect = ({ data, title, grid }: { data: { label: string, value: string }[], title: string, grid?: number }) => {

    const [input, setInput] = useState("");
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-1">
                <span className='font-semibold'>Select {title}</span>
                <span className="text-muted-foreground text-sm font-medium">Lorem ipsum dolor sit.</span>
            </div>
            <RadioGroup defaultValue="instagram" name='platform' className={cn("grid  sm:grid-cols-3 lg:grid-cols-4 gap-4", `grid-cols-${grid || 2}`)}>
                {data.map((item) => {
                    let checked = item.value === input;
                    return <div key={item.value}>
                        <RadioGroupItem value={item.value} onClick={() => setInput(item.value)} id={item.value} checked={checked} className="peer sr-only" />
                        <Label
                            htmlFor={item.value}
                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary peer-data-[state=checked]:bg-accent font-semibold"
                        >
                            {item.label}
                        </Label>
                    </div>
                })}
            </RadioGroup>
        </div>
    )
}

export default RadioSelect