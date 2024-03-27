"use client"
import React, { useState } from 'react'
import { Moon, Sun } from 'react-feather';
import { Button } from '../ui/button';
import { useTheme } from 'next-themes';

const Dark = () => {
    // const [dark, setDark] = useState(false);
    const { theme, setTheme } = useTheme();
    return (
        <div className='flex p-1 rounded-full bg-white dark:bg-black cursor-pointer' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className='w-4 h-4 text-black dark:text-white' /> : <Moon className='w-4 h-4 text-black dark:text-white' />}
        </div>
    )
}

export default Dark