import Image from 'next/image'
import React from 'react'

const InfluencerItem = () => {
    return (
        <div className="w-full">
            <div className="w-full p-4 rounded-2xl border-2 border-muted">
                <div className="w-full flex items-center gap-3 lg:gap-5">
                    <div className="w-[100px] h-[100px] aspect-square">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                            <Image src={"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={100} height={100} className="object-cover" alt='img' />
                        </div>
                    </div>
                    <div className="w-[calc(100%-100px)] h-[120px] aspect-video flex justify-center items-center">
                        <div className="w-max grid grid-cols-3 gap-3">
                            <div className="flex flex-col items-center">
                                <span className='text-md font-semibold'>89</span>
                                <span className='text-sm font-semibold'>Posts</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className='text-md font-semibold'>89</span>
                                <span className='text-sm font-semibold'>Followers</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className='text-md font-semibold'>89</span>
                                <span className='text-sm font-semibold'>following</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-2 mb-4">
                    <div className="w-full">
                        <span className="font-sm font-medium">krrrish_</span>
                    </div>
                    <div className="w-full mt-2">
                        <div className="w-full">
                            <span className="font-medium text-xs text-muted-foreground">Web Designer</span>
                        </div>
                        <div className="w-full flex flex-col font-medium">
                            <span className="text-sm">Lorem, ipsum.</span>
                            <span className="text-sm">Lorem, ipsum. Lorem, ipsum.</span>
                            <span className="text-sm">Lorem, ipsum. Lorem, ipsum dolor.</span>
                            <span className="text-sm">Lorem, ipsum. Lorem ipsum dolor sit.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfluencerItem