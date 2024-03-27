import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'
import HomeCarousel from './HomeCarousel'

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
        <HomeCarousel />
      </div>
    </main>
  )
}

export default Hero