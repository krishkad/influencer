import { Dashboard } from '@/components/shared/Dashboard'
import ToolMobileNavbar from '@/components/shared/Tool.mobile.navbar'
import { Input } from '@/components/ui/input'
import { ToolNavbar } from '@/constants/index.c'
import React from 'react'
import { Bell, Settings, Star } from 'react-feather'

const Page = ({ params }: { params: { tool: string } }) => {
    const content: { Label: string, href: string, description: string, miniDescription: string } | any = ToolNavbar.find((item) => item.href.includes(params.tool))

    return (

        <div className={'w-full'}>
            <div className="h-8 flex justify-between items-center">
                <div className="">
                    <span className='text-xl font-bold'>{content.Label}</span>
                </div>
                <div className="hidden lg:flex items-center gap-5">
                    <Input className='h-7 w-60 text-xs' placeholder='Search here...' />
                    <Star className='w-4 h-4' />
                    <Bell className='w-4 h-4' />
                    <Settings className='w-4 h-4' />
                </div>
                <div className="lg:hidden ">
                    <ToolMobileNavbar />
                </div>
            </div>
            {content.Label === "Dashboard" && <Dashboard />}
        </div>
    )
}

export default Page