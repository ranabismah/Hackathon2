import React from 'react'
import Image from 'next/image'
import CustomerCare from '@/components/CustomerCare';

const Blog = () => {
  return (
    <>
      <section className='min-h-full w-full flex flex-col items-center'>
        {/* Banner */}
        <div className='h-full md:h-[316px] w-full flex flex-col items-center justify-center'>
          <div className='h-[316px] relative w-full'>
            <Image src={'/shop/shop-hero.png'} alt='hero' layout='fill' objectFit='cover' />
            <div className='w-[150px] md:w-[124px] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] h-[90%] flex flex-col justify-center items-center'>
              <h1 className='font-medium text-4xl text-black'>Blog</h1>
              <p className='font-normal text-[16px] text-mygray'>home &gt; Blog</p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className='w-full max-w-screen-xl py-12 px-4 md:px-8'>
          <div className='flex flex-col md:flex-row gap-8'>

            {/* About Information */}
            <div className='flex-1 space-y-8'>
              {/* About Section 1 */}
              <div className='relative'>
                <Image src={'/image1.png'} alt='about' layout='responsive' width={1440} height={800} />
                <Image className='absolute bottom-0 left-1/2 transform -translate-x-1/2 pt-2' src={'/tag1.png'} alt='about' width={349} height={24} />
                <h2 className='text-2xl font-medium text-myblack mt-4'>Our Vision and Mission</h2>
                <p className='text-base text-mygray'>
                  We aim to bring innovative solutions to everyday problems and improve the quality of life. Our commitment to quality and sustainability drives everything we do. From designing functional products to ensuring customer satisfaction, we are always working towards a brighter future.
                </p>
                <button className='w-[120px] h-[36px] mt-4 border-b-2 border-myblack text-[16px] font-semibold text-myblack'>Read More</button>
              </div>

              {/* About Section 2 */}
              <div className='relative'>
                <Image src={'/image2.png'} alt='about' layout='responsive' width={1440} height={800} />
                <Image className='absolute bottom-0 left-1/2 transform -translate-x-1/2 pt-2' src={'/tag2.png'} alt='about' width={349} height={24} />
                <h2 className='text-2xl font-medium text-myblack mt-4'>Our Values</h2>
                <p className='text-base text-mygray'>
                  At the heart of our company lies a strong belief in honesty, sustainability, and creativity. We value hard work, dedication, and the ability to adapt to new challenges. Every day, we strive to live by these values and uphold them in everything we do.
                </p>
                <button className='w-[120px] h-[36px] mt-4 border-b-2 border-myblack text-[16px] font-semibold text-myblack'>Read More</button>
              </div>

              {/* About Section 3 */}
              <div className='relative'>
                <Image src={'/image3.png'} alt='about' layout='responsive' width={1440} height={800} />
                <Image className='absolute bottom-0 left-1/2 transform -translate-x-1/2 pt-2' src={'/tag1.png'} alt='about' width={349} height={24} />
                <h2 className='text-2xl font-medium text-myblack mt-4'>Our History</h2>
                <p className='text-base text-mygray'>
                  Founded in [year], our company has continuously evolved, always looking for better ways to serve our community. Over the years, we've grown from a small startup to an industry leader. Our journey is one of resilience, innovation, and passion for what we do.
                </p>
                <button className='w-[120px] h-[36px] mt-4 border-b-2 border-myblack text-[16px] font-semibold text-myblack'>Read More</button>
              </div>
            </div>

            {/* Sidebar for About */}
            <div className='w-full md:w-[300px] space-y-8'>
              {/* Search Bar */}
              <div className='h-[58px] w-full flex border-2 border-myblack rounded-md items-center justify-between px-2'>
                <input type='text' placeholder='Search' className='w-full h-full pl-2 text-myblack text-sm outline-none' />
                <Image src={'/searchbar.png'} alt='search icon' width={19} height={19} />
              </div>

              {/* Categories */}
              <div className='space-y-4'>
                <h2 className='text-2xl font-medium text-myblack'>Categories</h2>
                <div className='space-y-2'>
                  <span className='flex justify-between'>
                    <p className='text-base text-myblack'>Crafts</p>
                    <p className='text-base text-mygray'>2</p>
                  </span>
                  <span className='flex justify-between'>
                    <p className='text-base text-myblack'>Design</p>
                    <p className='text-base text-mygray'>8</p>
                  </span>
                  <span className='flex justify-between'>
                    <p className='text-base text-myblack'>Handmade</p>
                    <p className='text-base text-mygray'>7</p>
                  </span>
                  <span className='flex justify-between'>
                    <p className='text-base text-myblack'>Interior</p>
                    <p className='text-base text-mygray'>1</p>
                  </span>
                  <span className='flex justify-between'>
                    <p className='text-base text-myblack'>Wood</p>
                    <p className='text-base text-mygray'>6</p>
                  </span>
                </div>
              </div>

              {/* Recent Updates */}
              <div className='space-y-4'>
                <h2 className='text-2xl font-medium text-myblack'>Recent Updates</h2>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <Image src={'/post1.png'} alt='update' width={80} height={80} />
                    <div>
                      <h3 className='text-sm text-myblack'>Expanding our horizons</h3>
                      <p className='text-xs text-mygray'>03 Aug 2022</p>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <Image src={'/post2.png'} alt='update' width={80} height={80} />
                    <div>
                      <h3 className='text-sm text-myblack'>Sustainability initiatives</h3>
                      <p className='text-xs text-mygray'>03 Aug 2022</p>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <Image src={'/post3.png'} alt='update' width={80} height={80} />
                    <div>
                      <h3 className='text-sm text-myblack'>handmade pieces that took time to made</h3>
                      <p className='text-xs text-mygray'>03 Aug 2022</p>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <Image src={'/post4.png'} alt='update' width={80} height={80} />
                    <div>
                      <h3 className='text-sm text-myblack'>Modern home in millan</h3>
                      <p className='text-xs text-mygray'>03 Aug 2022</p>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <Image src={'/post5.png'} alt='update' width={80} height={80} />
                    <div>
                      <h3 className='text-sm text-myblack'>Colorful office redisign</h3>
                      <p className='text-xs text-mygray'>03 Aug 2022</p>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className='h-[32px] w-full flex justify-center space-x-4 mt-8'>
            <div className='h-[60px] w-[60px] text-white flex justify-center items-center bg-golden hover:bg-white hover:border-2 hover:text-myblack border-golden rounded-md'>1</div>
            <div className='h-[60px] w-[60px] text-myblack flex justify-center items-center bg-white hover:bg-golden hover:text-white hover:border-2 hover:border-golden rounded-md'>2</div>
            <div className='h-[60px] w-[60px] text-myblack flex justify-center items-center bg-white hover:bg-golden hover:text-white hover:border-2 hover:border-golden rounded-md'>3</div>
          </div>
        </div>
      </section>
      <CustomerCare/>
    </>
  )
}

export default Blog;


