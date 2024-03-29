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
import { audienceAgeGroups, audienceIncomeLevels, audienceOccupations, engagementRates, followerCounts, genders, influencerCategories, influencerLocations } from '@/constants/index.c';
import Sele from './Sele';
import { Button } from '../ui/button';

const FindInfluencer = () => {
    return (
        <div className='w-full'>
            <div className="w-full">

                <Card className='border-none shadow-none'>
                    {/* <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>
                        Add a new payment method to your account.
                    </CardDescription>
                </CardHeader> */}
                    <CardContent className="grid gap-6 border-none p-0">
                        <RadioGroup defaultValue="instagram" className="grid grid-cols-3 gap-4">
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
                                    <FaTiktok className="mb-3 h-6 w-6" />
                                    Tik Tok
                                </Label>
                            </div>
                            <div>
                                <RadioGroupItem value="xtwitter" id="xtwitter" className="peer sr-only" />
                                <Label
                                    htmlFor="xtwitter"
                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary font-semibold"
                                >
                                    <FaXTwitter className="mb-3 h-6 w-6" />
                                    X
                                </Label>
                            </div>
                            <div>
                                <RadioGroupItem value="snapchat" id="snapchat" className="peer sr-only" />
                                <Label
                                    htmlFor="snapchat"
                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary font-semibold"
                                >
                                    <FaSnapchat className="mb-3 h-6 w-6" />
                                    Snapchat
                                </Label>
                            </div>
                        </RadioGroup>
                    </CardContent>
                </Card>
            </div >
            <div className="w-full flex flex-col gap-7">
                <div className="mt-6 space-y-1">
                    <h2 className="text-xl font-semibold tracking-tight">
                        Tell us more
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        What kind of influencer you want.
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Sele data={influencerCategories} title='Category' />
                    <Sele data={followerCounts} title='Followers' />
                    <Sele data={influencerLocations} title='Location' />
                    <Sele data={genders} title='Gender' />
                    <Sele data={engagementRates} title='Average Engagement' />
                    <Sele data={audienceIncomeLevels} title='Audience Income Level' />
                    <Sele data={audienceAgeGroups} title='Audience Age Group' />
                    <Sele data={audienceOccupations} title='Audience Occupations' />
                </div>
                <div className="w-full">
                    <Button className='w-full h-14 font-semibold'>
                        {true ? "Find Influencer" : "Finding..."}
                    </Button>
                </div>
            </div>
        </div>


    )
}

export default FindInfluencer