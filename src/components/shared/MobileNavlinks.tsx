import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ToolNavbar } from "@/constants/index.c"
import Link from "next/link"
import { SheetClose } from "../ui/sheet"

export default function MobileNavlinks() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="py-4 font-semibold">
                <Link href={'/'}>
                    Home
                </Link>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="focus:no-underline font-semibold">Features</AccordionTrigger>
                <AccordionContent>
                    <div className="grid grid-cols-2 gap-2">
                        {ToolNavbar.map((item) => {
                            return <SheetClose asChild key={item.Label}>
                                <Link href={item.href}>
                                    <div className="flex flex-col gap-1 p-1">
                                        <span className="font-semibold">{item.Label}</span>
                                        <span className="text-xs font-medium text-muted-foreground">{item.miniDescription.slice(0, 60)}...</span>
                                    </div>
                                </Link>
                            </SheetClose>
                        })}
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="focus:no-underline font-semibold">Use Case</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
