"use client"
import React, { useState } from 'react'
import { Moon, Sun } from 'react-feather';
import { Button } from '../ui/button';

const Dark = () => {
    const [dark, setDark] = useState(false);
    return (
        <div className='flex p-1 rounded-full bg-white dark:bg-black cursor-pointer' onClick={() => setDark(!dark)}>
            {dark ? <Sun className='w-4 h-4 text-black dark:text-white' /> : <Moon className='w-4 h-4 text-black dark:text-white' />}
        </div>
    )
}

export default Dark