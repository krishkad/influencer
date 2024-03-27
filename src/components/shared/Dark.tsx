"use client"
import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'react-feather';
import { useTheme } from 'next-themes';

const Dark = () => {
    // const [dark, setDark] = useState(false);
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <div className='flex p-1 rounded-full bg-white dark:bg-black cursor-pointer' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className='w-4 h-4 text-black dark:text-white' /> : <Moon className='w-4 h-4 text-black dark:text-white' />}
        </div>
    )
}

export default Dark