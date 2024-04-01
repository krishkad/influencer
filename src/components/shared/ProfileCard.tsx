"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const ProfileCard = ({ imgUrl, username, name, posts, followers, following, creatorTitle, bio }: instaProfileType) => {
    return (
        <div className='w-full h-[30rem] border border-muted rounded-xl shadow overflow-hidden'>
            <div className="w-full h-[30%] bg-gradient p-4 relative">
                <Image src={imgUrl} width={80} height={80} className='object-cover aspect-square rounded-full p-1 bg-background absolute -bottom-[40px]' alt={username} />
            </div>
            <div className="w-full h-[70%] p-4 pt-10">
                <Tabs defaultValue="profile" className="w-full p-0">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="profile" className=''>Profile</TabsTrigger>
                        <TabsTrigger value="insight" className=''>Insight</TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile" className='p-0 '>
                        <Card className='p-0 border-none'>
                            <CardHeader className='p-0'>
                                <CardTitle className='text-sm p-0 m-0'>Account</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 p-0">
                                account
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="insight" className='p-0 '>
                        <Card className='border-none'>
                            <CardHeader className='p-0'>
                                <CardTitle className='text-sm p-0 m-0'>Password</CardTitle>

                            </CardHeader>
                            <CardContent className="space-y-2 p-0">
                                password
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default ProfileCard