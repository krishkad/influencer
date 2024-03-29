"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ToolNavbar } from '@/constants/index.c'
import { cn } from "@/lib/utils"
import { Activity, Cpu, File, Folder, Grid, Paperclip, Share2 } from "react-feather"
import SidebarLink from '@/components/shared/SidebarLink'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'

const AccessLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[250px_1fr] lg:grid-cols-[280px_1fr] bg-background">
            <div className="hidden border-r md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <Package2 className="h-6 w-6" />
                            <span className="text-primary">Influencer</span>
                        </Link>
                        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                            <Bell className="h-4 w-4" />
                            <span className="sr-only">Toggle notifications</span>
                        </Button>
                    </div>
                    <div className="flex-1 flex flex-col gap-1 px-4">
                        <SidebarLink />
                    </div>
                    <div className="mt-auto p-4">
                        <Card>
                            <CardHeader className="p-2 pt-0 md:p-4">
                                <CardTitle className="text-base">Upgrade to Pro</CardTitle>
                                <CardDescription className="text-xs">
                                    Unlock all features and get unlimited access to our support
                                    team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                <Button size="sm" className="w-full text-sm text-white">
                                    Upgrade
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6 bg-background">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col bg-background">
                            <SheetHeader className="flex flex-col">
                                <SheetTitle className="text-primary">
                                    <Link href={'/'}>
                                        Influencer
                                    </Link>
                                </SheetTitle>
                                <SheetDescription className="text-xs">Main Menu</SheetDescription>
                            </SheetHeader>
                            <div className="w-full flex flex-col gap-1">
                                {ToolNavbar.map((item) => {
                                    return <SheetClose asChild key={item.Label}>
                                        <Link href={item.href} >
                                            <div className={cn('h-10 px-4 py-2 group w-full flex items-center gap-4 justify-start ', item.href === pathname && "bg-accent")}>
                                                {
                                                    item.Label === "Dashboard" && <Grid className={cn('w-4 h-4 text-muted-foreground group-hover:text-primary', item.href === pathname && 'text-primary hover:text-primary  ')} /> ||
                                                    item.Label === "Find Influencer" && <Search className={cn('w-4 h-4 text-muted-foreground group-hover:text-primary', item.href === pathname && 'text-primary hover:text-primary  ')} /> ||
                                                    item.Label === "Campaign Management" && <Folder className={cn('w-4 h-4 text-muted-foreground group-hover:text-primary', item.href === pathname && 'text-primary hover:text-primary  ')} /> ||
                                                    item.Label === "Contract Management" && <Paperclip className={cn('w-4 h-4 text-muted-foreground group-hover:text-primary', item.href === pathname && 'text-primary hover:text-primary  ')} /> ||
                                                    item.Label === "Content Collaboration" && <Share2 className={cn('w-4 h-4 text-muted-foreground group-hover:text-primary', item.href === pathname && 'text-primary hover:text-primary  ')} /> ||
                                                    item.Label === "Trend Identification" && <Activity className={cn('w-4 h-4 text-muted-foreground group-hover:text-primary', item.href === pathname && 'text-primary hover:text-primary  ')} /> ||
                                                    item.Label === "Report Generation" && <File className={cn('w-4 h-4 text-muted-foreground group-hover:text-primary', item.href === pathname && 'text-primary hover:text-primary  ')} /> ||
                                                    item.Label === "AI Approaching" && <Cpu className={cn('w-4 h-4 text-muted-foreground group-hover:text-primary', item.href === pathname && 'text-primary hover:text-primary  ')} />

                                                }
                                                <span className={cn('font-semibold text-muted-foreground group-hover:text-foreground text-xs p-0 m-0', item.href === pathname && 'text-foreground')}>{item.Label}</span>
                                            </div>
                                        </Link>
                                    </SheetClose>
                                })}
                            </div>
                            <div className="mt-auto">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-base">Upgrade to Pro</CardTitle>
                                        <CardDescription>
                                            Unlock all features and get unlimited access to our
                                            support team.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button size="sm" className="w-full text-white">
                                            Upgrade
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                        <form>
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search products..."
                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                />
                            </div>
                        </form>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuItem>
                                {theme === "light" ? <span onClick={()=> setTheme('dark')}>Dark Mode</span> : <span onClick={()=> setTheme("light")}>Light Mode</span>}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}


export default AccessLayout