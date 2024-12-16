'use client';
import React, { useState } from 'react'
import Link from 'next/link'

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    } else {
      alert('Please enter a valid email address!');
    }
  }

  return (
    <div className='h-full md:h-[505px] flex flex-col md:flex-row items-center justify-center w-full bg-white '>
      <div className='h-full md:h-[419px] w-[90%] flex flex-col  justify-between md:w-[1240px] bg-white '>
        <div className='h-full md:h-[312px] py-2 w-[90%] flex flex-col md:flex-row mx-auto md:mx-0 justify-between md:w-[1133px] bg-white'>
          {/* logo */}
          <div className='h-full md:h-[172px] flex flex-col justify-between w-[285px] bg-white'>
            <h2 className='font-bold text-2xl text-black'>Funiro.</h2>
            <p className='text-foreground font-normal text-[16px]'>400 University Drive Suite 200 Coral <br /> Gables, <br />
              FL 33134 USA</p>
          </div>
          {/* main */}
          <div className='h-full flex  flex-col md:flex-row  md:justify-between w-[80%]   md:w-[710px] bg-white'>
            {/* 1 row */}
            <div className='h-full md:h-[312px] w-[68px] space-y-2 md:space-y-0 flex flex-col justify-between '>
              <h2 className='font-medium text-[16px] text-mygray'>Links</h2>
              <ul className='h-full py-2 md:py-0   md:h-[233px] w-[68px] flex flex-col justify-between '>
                <Link href="/" className='hover:text-golden hover:underline font-medium text-[16px] text-black'>
                  <li>Home</li>
                </Link>
                <Link href="/shop" className='hover:text-golden hover:underline font-medium text-[16px] text-black'>
                  <li>Shop</li>
                </Link>
                <Link href="/blog" className='hover:text-golden hover:underline font-medium text-[16px] text-black'>
                  <li>Blog</li>
                </Link>
                <Link href="/contact" className='hover:text-golden hover:underline font-medium text-[16px] text-black'>
                  <li>Contact</li>
                </Link>
              </ul>
            </div>

            {/* 2 row */}
            <div className='h-full md:h-[242px] w-[142px] flex flex-col space-y-4 md:space-y-16'>
              <h2 className='font-medium text-[16px] text-mygray'>Help</h2>
              <ul className='h-full py-2 md:py-0 md:h-[163px] w-[142px] flex flex-col justify-between '>
                <li className='font-medium text-[16px] text-black'>Payment Options</li>
                <li className='font-medium text-[16px] text-black'>Returns</li>
                <li className='font-medium text-[16px] text-black'>Privacy Policies</li>
              </ul>
            </div>

            {/* 3 row */}
            <div className='md:h-[101px] w-[286px] flex justify-between flex-col '>
              <h2 className='font-medium text-[16px] text-mygray'>Newsletter</h2>
              <div className='flex justify-between'>
                <input
                  type="email"
                  placeholder='Enter your email'
                  className='w-[60%] h-[34px] px-2 border-b-2 border-black'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={handleSubscribe}
                  className='p-2 border-b-2  hover:border-2 border-myblack'
                >
                  {isSubscribed ? 'Subscribed' : 'Subscribe'}
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className='h-[59px] md:w-full border-t-2 flex items-end border-gray-400'>
          <p className='text-[16px] font-normal text-black'>2023 Furino. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
