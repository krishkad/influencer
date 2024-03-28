import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";

const FindInfluencer = () => {
    return (
        <div className='w-full'>
            <Card className='border-none shadow-none'>
                {/* <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>
                        Add a new payment method to your account.
                    </CardDescription>
                </CardHeader> */}
                <CardContent className="grid gap-6 border-none p-0">
                    <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                        <div>
                            <RadioGroupItem value="instagram" id="instagram" className="peer sr-only" />
                            <Label
                                htmlFor="instagram"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary font-semibold"
                            >

                                <RiInstagramFill className="mb-3 h-6 w-6" />
                                Instagram
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem
                                value="facebook"
                                id="facebook"
                                className="peer sr-only"
                            />
                            <Label
                                htmlFor="facebook"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary font-semibold"
                            >
                                <FaFacebook className="mb-3 h-6 w-6" />
                                Facebook
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem value="youtube" id="youtube" className="peer sr-only" />
                            <Label
                                htmlFor="youtube"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary font-semibold"
                            >
                                <IoLogoYoutube className="mb-3 h-6 w-6" />
                                Youtube
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem value="tiktok" id="tiktok" className="peer sr-only" />
                            <Label
                                htmlFor="tiktok"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary font-semibold"
                            >
                                <FaTiktok  className="mb-3 h-6 w-6" />
                                Tik Tok
                            </Label>
                        </div>
                    </RadioGroup>
                </CardContent>

            </Card>
        </div >
    )
}

export default FindInfluencer