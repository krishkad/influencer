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
import { AlignJustify } from "react-feather"
import MobileNavlinks from "./MobileNavlinks"

export default function RootMobileNavbar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify />
            </SheetTrigger>
            <SheetContent className="w-full">
                <SheetHeader>
                    <SheetTitle className="text-primary">Influencer</SheetTitle>
                    <SheetDescription>

                    </SheetDescription>
                </SheetHeader>
                <div className="w-full mt-10">
                    <MobileNavlinks />
                </div>
            </SheetContent>
        </Sheet>
    )
}
