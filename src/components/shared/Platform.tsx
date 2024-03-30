"use client";
import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Card,
    CardContent
} from "@/components/ui/card"
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok, FaSnapchat } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Platform = ({ handleFilters }: { handleFilters: (value: any) => void }) => {


    return (
        <div className="w-full">
            <Card className='border-none shadow-none'>
                <CardContent className="grid gap-6 border-none p-0">
                    <RadioGroup defaultValue="instagram" name='platform' className="grid grid-cols-3 gap-4" onChange={handleFilters}>
                        <div>
                            <RadioGroupItem value="instagram" id="instagram" className="peer sr-only" />
                            <Label
                                htmlFor="instagram"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary peer-data-[state=checked]:bg-accent font-semibold"
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
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary peer-data-[state=checked]:bg-accent  font-semibold"
                            >
                                <FaFacebook className="mb-3 h-6 w-6" />
                                Facebook
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem value="youtube" id="youtube" className="peer sr-only" />
                            <Label
                                htmlFor="youtube"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary peer-data-[state=checked]:bg-accent font-semibold"
                            >
                                <IoLogoYoutube className="mb-3 h-6 w-6" />
                                Youtube
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem value="tiktok" id="tiktok" className="peer sr-only" />
                            <Label
                                htmlFor="tiktok"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary peer-data-[state=checked]:bg-accent font-semibold"
                            >
                                <FaTiktok className="mb-3 h-6 w-6" />
                                Tik Tok
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem value="xtwitter" id="xtwitter" className="peer sr-only" />
                            <Label
                                htmlFor="xtwitter"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary peer-data-[state=checked]:bg-accent font-semibold"
                            >
                                <FaXTwitter className="mb-3 h-6 w-6" />
                                X
                            </Label>
                        </div>
                        <div>
                            <RadioGroupItem value="snapchat" id="snapchat" className="peer sr-only" />
                            <Label
                                htmlFor="snapchat"
                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary peer-data-[state=checked]:bg-accent font-semibold"
                            >
                                <FaSnapchat className="mb-3 h-6 w-6" />
                                Snapchat
                            </Label>
                        </div>
                    </RadioGroup>
                </CardContent>
            </Card>
        </div >
    )
}

export default Platform