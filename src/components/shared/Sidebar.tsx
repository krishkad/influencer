import React from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import SidebarLink from './SidebarLink'

const ToolsSidebar = () => {
    return (
        <div className='w-full'>
            <div className="w-full">
                <div className="flex items-center gap-4 mb-16">
                    <Avatar className='w-8 h-8'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    </Avatar>
                    <span className='text-sm font-semibold'>krrish kadam</span>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <span className="text-[10px] text-muted-foreground mb-3">Main Menu</span>
                    <SidebarLink />
                </div>
            </div>
        </div>
    )
}

export default ToolsSidebar