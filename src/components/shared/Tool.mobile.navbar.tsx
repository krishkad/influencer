"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ToolNavbar } from "@/constants/index.c"
import { AlignJustify } from "react-feather"
import SidebarLink from "./SidebarLink"
import NavButton from "./NavButton"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Activity, Cpu, File, Folder, Grid, Paperclip, Search, Share2 } from 'react-feather'


export default function ToolMobileNavbar() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-primary">Influencer</SheetTitle>
                    <SheetDescription>Main Menu</SheetDescription>
                </SheetHeader>
                <div className="w-full flex flex-col gap-1 my-10">
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
                {/* <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter> */}
            </SheetContent>
        </Sheet>
    )
}
