import Navbar from '@/components/shared/Navbar';
import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full relative'>
            <Navbar />
            <main className="w-full">{children}</main>
        </div>
    )
}

export default RootLayout;