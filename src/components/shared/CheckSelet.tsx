"use client";
import { influencerCategories } from '@/constants/index.c';
import React, { useState } from 'react'
import { CheckboxSelect } from './CheckBox';

const CheckSelect = ({ title, data, multiSelect }: { title: string, multiSelect: boolean, data: { label: string, value: string }[] }) => {
    const [category, setCategory] = useState<string>("");
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-1">
                <span className='font-semibold'>Select {title}</span>
                <span className="text-muted-foreground text-sm font-medium">Lorem ipsum dolor sit.</span>
            </div>
            <div className="flex flex-wrap gap-4">
                {data.map((item) => {
                    let checked = item.value === category;
                    return <CheckboxSelect multiSelect={multiSelect} title={item.label} setCategory={setCategory} checked={checked} value={item.value} key={item.value} />
                })}
            </div>
        </div>
    )
}

export default CheckSelect;