import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='h-screen md:h-[716px] flex  flex-col items-center space-y-4 justify-center   w-full bg-white'>
        <div className='md:h-[716px] w-[90%] '>
       <Image src='/hero.png' alt='hero' width={1440} height={716} />
       </div>
       <div className='md:absolute md:right-24  w-[90%] h-[443px] md:w-[643px] flex justify-center items-center bg-background  bg-pink-100'>
         <div className='h-[344px] w-[90%] md:w-[556px] flex flex-col justify-between '>
          <h2 className='text-[16px] font-semibold text-myblack'>New Arrival</h2>
          <h1 className='text-[32px] md:text-[52px] font-bold text-golden'>Discover Our New Collection</h1>
          <p className='text-[18px] font-medium text-myblack'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <Button className="bg-[#B88E2F] text-white hover:bg-[#B88E2F]/80" size='xs' >Buy Now</Button>
         </div>
       </div>
    </section>
      
    </>
  )
}

export default Hero

