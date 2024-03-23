import ToolsSidebar from '@/components/shared/Sidebar'
import ToolMobileNavbar from '@/components/shared/Tool.mobile.navbar'
import React from 'react'

const AccessLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full">
            <main className="w-full flex wrapper-2">
                <div className="hidden md:block md:w-[18%] tools-wrapper h-screen border-r">
                    <ToolsSidebar />
                </div>
                <div className="w-full md:w-[82%] tools-wrapper md:pr-5">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default AccessLayout