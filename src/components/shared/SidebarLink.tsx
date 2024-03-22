import React from 'react'
import { ToolNavbar } from '@/constants/index.c'
import NavButton from './NavButton'

const SidebarLink = () => {
    return (
        <>
            {ToolNavbar.map((item) => {
                return (
                    <NavButton Label={item.Label} href={item.href} key={item.Label} />
                )
            })}
        </>
    )
}

export default SidebarLink