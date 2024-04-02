"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from '@/lib/utils'
import { Bookmark } from 'react-feather'

const ProfileCard = ({ imgUrl, username, name, posts, followers, following, creatorTitle, bio }: instaProfileType) => {
    const [save, setSave] = useState(false);

    return (
        <div className='w-full h-[35rem] border border-muted rounded-xl shadow overflow-hidden'>
            <div className={cn("w-full h-[30%] p-4 relative", 'bg-gradient')}>
                <Image src={imgUrl} width={80} height={80} className='object-cover aspect-square rounded-full p-1 bg-background absolute -bottom-[40px]' alt={username} />

                <div className="flex items-center gap-2 absolute top-4 right-4">
                    <Bookmark className={cn('w-4 h-4 text-white cursor-pointer', save && 'fill-white')} onClick={()=> setSave(!save)} />
                </div>

            </div>
            <div className="w-full h-[70%] p-4 pt-10">
                <div className="w-full mb-2">
                    <span className="font-semibold">{username}</span>
                </div>
                <Tabs defaultValue="profile" className="w-full p-0">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="profile" className=''>Profile</TabsTrigger>
                        <TabsTrigger value="insight" className=''>Insight</TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile" className='w-full p-0 '>
                        <Card className='w-full p-0 border-none'>
                            <CardContent className="space-y-2 p-0">
                                <div className="flex justify-center items-center gap-4">
                                    <div className="w-20 aspect-square flex flex-col justify-center items-center p-2">
                                        <span className="font-bold text-sm">{posts}</span>
                                        <span className="font-bold text-sm">Posts</span>
                                    </div>
                                    <div className="w-20 aspect-square flex flex-col justify-center items-center p-2">
                                        <span className="font-bold text-sm">{followers}</span>
                                        <span className="font-bold text-sm">followers</span>
                                    </div>
                                    <div className="w-20 aspect-square flex flex-col justify-center items-center p-2">
                                        <span className="font-bold text-sm">{following}</span>
                                        <span className="font-bold text-sm">following</span>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col">
                                    <span className="font-medium">{name}</span>
                                    <span className="font-semibold text-xs text-zinc-400">{creatorTitle}</span>
                                </div>
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