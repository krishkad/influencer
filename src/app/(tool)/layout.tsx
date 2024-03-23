import Check from '@/components/shared/Check'
import React from 'react'

const AccessLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full">
            <Check children={children} />
        </div>
    )
}

export default AccessLayout