import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='h-screen md:h-[716px] flex flex-col items-center justify-center w-full bg-white relative'>
      {/* Hero Image - Background Image */}
      <div className='w-full h-full absolute top-0 left-0 bg-cover bg-center' style={{ backgroundImage: "url('/hero.png')" }}></div>
      
      {/* Hero Content */}
      <div className='relative w-[90%] md:w-[643px] h-auto flex justify-center items-center bg-background md:h-[443px] p-4'>
        <div className='w-full md:w-[556px] flex flex-col justify-between text-center'>
          <h2 className='text-[16px] font-semibold text-myblack'>New Arrival</h2>
          <h1 className='text-[32px] md:text-[52px] font-bold text-golden'>
            Discover Our New Collection
          </h1>
          <p className='text-[14px] md:text-[18px] font-medium text-myblack'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          {/* Button with responsive size */}
          <Button className="bg-[#B88E2F] text-white hover:bg-[#B88E2F]/80" size="sm">
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero



