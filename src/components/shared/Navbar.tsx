import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { NavbarLinks } from './NavbarLinks'
import RootMobileNavbar from './Root.mobile.navbar'

const Navbar = () => {
    return (
        <div className='w-full'>
            <div className="wrapper">
                <div className="w-full h-16 md:h-24 flex items-center justify-between">
                    <div className="flex items-center justify-center text-center m-0 p-0">
                        <Link href={'/'} className='m-0 p-0'>
                            <span className="text-primary text-lg md:text-2xl font-bold m-0 p-0">Influencer</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center absolute inset-x-0  mx-auto  w-max">
                        <div className="flex items-center py-1 pl-3 pr-1 bg-black rounded-full dark:bg-white">
                            <NavbarLinks />
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-x-2">
                        <Button variant={'ghost'} className='' size={'sm'}>Sign up</Button>
                        <Button className='text-white' size={'sm'}>Sign In</Button>
                    </div>
                    <div className="md:hidden">
                        <RootMobileNavbar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar