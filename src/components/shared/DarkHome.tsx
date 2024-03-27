"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '../ui/switch';

const DarkHomeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <div className="flex items-center space-x-2">
            <Switch
                id="dark-mode"
                checked={theme === "dark" && true}
                onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
            <span className="font-medium">Dark Mode</span>
        </div>
    )
}

export default DarkHomeSwitch