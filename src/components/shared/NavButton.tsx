"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Activity, Cpu, File, Folder, Grid, Paperclip, Search, Share2 } from 'react-feather'
import { usePathname } from 'next/navigation'

const NavButton = ({ href, Label }: { href: string, Label: string }) => {
    const pathname = usePathname();
    return (
        <div className="w-full">
            <Link href={href}>
                <Button variant={'ghost'} className={cn('group w-full flex items-center gap-4 justify-start ', href === pathname && "bg-accent")}>
                    {
                        Label === "Dashboard" && <Grid className={cn('w-4 h-4 text-muted-foreground group-hover:text-primary', href === pathname && 'text-primary hover:text-primary  ')} /> ||
                        Label === "Find Influencer" && <Search className={cn('w-4 h-4 text-muted-foreground group-hover:text-primary', href === pathname && 'text-primary hover:text-primary  ')} /> ||
                        Label === "Contract Generation" && <Paperclip className={cn('w-4 h-4 text-muted-foreground group-hover:text-primary', href === pathname && 'text-primary hover:text-primary  ')} /> ||
                        Label === "Trend Identification" && <Activity className={cn('w-4 h-4 text-muted-foreground group-hover:text-primary', href === pathname && 'text-primary hover:text-primary  ')} /> ||
                        Label === "Report Generation" && <File className={cn('w-4 h-4 text-muted-foreground group-hover:text-primary', href === pathname && 'text-primary hover:text-primary  ')} /> ||
                        Label === "AI Approaching" && <Cpu className={cn('w-4 h-4 text-muted-foreground group-hover:text-primary', href === pathname && 'text-primary hover:text-primary  ')} />

                    }
                    <span className={cn('font-semibold text-muted-foreground group-hover:text-foreground text-xs p-0 m-0', href === pathname && 'text-foreground')}>{Label}</span>
                </Button>
            </Link>
        </div>
    )
}

export default NavButton