import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <main className="w-full h-[calc(100vh-96px)]">
      <div className="w-full md:w-1/2 max-sm:h-2/5 md:h-52 mx-auto flex flex-col items-center justify-center text-center gap-2">
        <span className='text-4xl font-bold'>Revolutionize Influencer Marketing with <span className="text-primary">Influencer</span></span>
        <span className='font-medium text-muted-foreground text-sm'>Discover Your Perfect Match with 30 Days Free Trial</span>
        <Link href={'/tool/dashboard'}>
          <Button className='w-max text-white' size={'sm'}>Try Free Plan</Button>
        </Link>
      </div>
      <div className="w-full max-sm:h-3/5 h-[calc(100%-208px)] flex justify-center">
        <div className="w-full sm:w-4/5 h-full relative overflow-y-hidden">
          <Image src={'/desktop.png'} fill sizes='height: 100% , width: 100%' className="  hidden object-contain object-top  sm:block" alt='img' />
          <Image src={'/mobile-mini.png'} fill sizes='height: 100% , width: 100%' className=" object-contain object-top sm:hidden" alt='img' />
        </div>
      </div>
    </main>
  )
}

export default Hero