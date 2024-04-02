import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import MobileNavlinks from "./MobileNavlinks"
import { AlignLeft } from "react-feather"

export default function RootMobileNavbar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignLeft />
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
