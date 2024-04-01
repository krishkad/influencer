import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'
import HomeCarousel from './HomeCarousel'
import { ContainerScroll } from './Hero'

const Hero = () => {
  return (
    <main className="w-full">
      <div className="w-full h-full flex justify-center items-start overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <div className="w-full flex justify-center items-center">
                <div className="w-full md:w-3/5 flex flex-col items-center justify-center text-center gap-2 mb-20">
                  <span className='text-4xl font-bold'>Say <span className="text-primary">goodbye</span> to hassle. Finding the perfect influencer with <span className="text-primary">Influencer</span></span>
                  <span className='font-medium text-muted-foreground text-sm'>Discover Your Perfect Match with 30 Days Free Trial</span>
                  <Link href={'/tool/dashboard'}>
                    <Button className='w-max text-white' size={'sm'}>Try Free Plan</Button>
                  </Link>
                </div>
              </div>
            </>
          }

        >


          <Image
            src={`/desktop-pics.png`}
            alt="hero"
            priority
            height={720}
            width={1400}
            className="hidden md:block mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />

          <Image
            src={`/mobile.png`}
            alt="hero"
            priority
            height={720}
            width={1400}
            className="block md:hidden mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />

        </ContainerScroll>
      </div>
    </main>
  )
}

export default Hero


