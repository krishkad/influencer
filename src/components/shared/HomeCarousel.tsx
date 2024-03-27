"use client";
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const HomeCarousel = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <div className="w-full sm:w-4/5 h-full relative overflow-y-hidden">
            <Image src={theme === "dark" ? "/desktop-pic-dark.png" : '/desktop-pics.png'} priority fill sizes='height: 100% , width: 100%' className="hidden object-contain object-top sm:block" alt='img' />



            <Image src={theme === "dark" ? "/mobile-dark.png" : '/mobile.png'} priority fill sizes='height: 100% , width: 100%' className="block object-contain object-top sm:hidden" alt='img' />
        </div>
    )
}

export default HomeCarousel