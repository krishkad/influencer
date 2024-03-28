import { Dashboard } from '@/components/shared/Dashboard'
import FindInfluencer from '@/components/shared/FindInfluencer'
import { ToolNavbar } from '@/constants/index.c'
import React from 'react'

const Page = ({ params }: { params: { tool: string } }) => {
    const content: { Label: string, href: string, description: string, miniDescription: string } | any = ToolNavbar.find((item) => item.href.includes(params.tool))

    return (

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">{content.Label}</h1>
            </div>
            <div className="w-full">
                {content.Label === "Dashboard" && <Dashboard />}
                {content.Label === "Find Influencer" && <FindInfluencer />}
            </div>
        </main>
    )
}

export default Page