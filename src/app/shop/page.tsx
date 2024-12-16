import CustomerCare from '@/components/CustomerCare';
import Image from 'next/image';
import React from 'react';

interface Card {
  image: string;
  title: string;
  description: string;
  prize: string;
  oldPrize: string;
}

const cards: Card[] = [
  {
    image: '/product1.png',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    prize: 'Rp 2.500.000',
    oldPrize: 'Rp 3.500.000',
  },
  {
    image: '/product2.png',
    title: 'Leviosa',
    description: 'Stylish cafe chair',
    prize: 'Rp 2.500.000',
    oldPrize: '',
  },
  {
    image: '/product3.png',
    title: 'Lolito',
    description: 'Luxury big sofa',
    prize: 'Rp 7.000.000',
    oldPrize: 'Rp 14.000.000',
  },
  {
    image: '/product4.png',
    title: 'Respira',
    description: 'Outdoor bar table and stool',
    prize: 'Rp 500.000',
    oldPrize: '',
  },
  ...Array(12).fill(null).map((_, index) => ({
    image: `/product${(index % 4) + 1}.png`,
    title: ['Syltherine', 'Leviosa', 'Lolito', 'Respira'][index % 4],
    description: [
      'Stylish cafe chair',
      'Stylish cafe chair',
      'Luxury big sofa',
      'Outdoor bar table and stool',
    ][index % 4],
    prize: ['Rp 2.500.000', 'Rp 2.500.000', 'Rp 7.000.000', 'Rp 500.000'][index % 4],
    oldPrize: ['Rp 3.500.000', '', 'Rp 14.000.000', ''][index % 4],
  })),
];

const Shop = () => {
  return (
    <>
      <section className="min-h-full w-full flex flex-col bg-white items-center">
        {/* Banner Section */}
        <div className="h-full md:h-[416px] w-full flex flex-col items-center justify-center">
          <div className="md:h-[316px] relative w-full">
            <Image src="/shop/shop-hero.png" alt="hero" width={1440} height={316} />
            <div className="w-[150px] md:w-[124px] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] h-[90%] flex flex-col justify-center items-center md:h-[84px]">
              <h1 className="font-medium text-4xl text-black">Shop</h1>
              <p className="font-normal text-[16px] text-mygray">home &gt; shop</p>
            </div>
          </div>

          {/* Filter Section */}
          <div className="h-[80px] flex items-center justify-center md:h-[100px] w-full bg-peach">
            <div className="h-full md:h-[38px] w-full md:w-[1240px] flex flex-col md:flex-row items-center justify-between">
              <div className="h-full w-full md:w-[500px] flex items-center justify-between">
                <div className="h-[30px] w-[58px] flex items-center">
                  <Image src="/filter1.png" alt="hero" width={58} height={30} />
                </div>
                <div className="h-[30px] w-[58px] flex justify-between items-center">
                  <span className="h-[28px] w-[28px]">
                    <Image src="/filter2.png" alt="hero" width={28} height={20} />
                  </span>
                  <span className="h-[24px] w-[24px]">
                    <Image src="/filter3.png" alt="hero" width={24} height={24} />
                  </span>
                </div>
                <span className="h-[37px] md:w-[285px] flex border-l-2 border-black items-center justify-end">
                  <h2 className="text-[16px] font-semibold text-myblack">
                    Showing 1–16 of 32 results
                  </h2>
                </span>
              </div>

              <div className="h-[38px] w-full md:w-[500px] flex justify-between">
                <div className="h-full w-[100px] flex justify-between items-center">
                  <p className="text-[16px] font-semibold text-myblack">Show</p>
                  <span className="h-[38px] w-[38px] flex justify-center items-center bg-white">16</span>
                </div>
                <div className="h-full w-[288px] flex justify-between items-center">
                  <p className="text-[16px] font-semibold text-myblack">Sort By</p>
                  <span className="h-[38px] w-[188px] flex justify-center items-center bg-white">Default</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Section */}
        <div className="h-auto w-full flex flex-col justify-between pb-10 items-center">
          <div className="w-full max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden"
              >
                <div className="w-full h-auto bg-gray-300">
                  <Image src={card.image} alt="products" width={285} height={301} />
                </div>
                <div className="w-full flex justify-center items-center h-[145px] bg-white">
                  <div className="w-[249px] flex flex-col justify-between h-[99px]">
                    <h1 className="font-semibold text-2xl text-myblack">{card.title}</h1>
                    <p className="text-mygray text-[16px] font-medium">{card.description}</p>
                    <div className="flex flex-row justify-between">
                      <span className="font-semibold text-myblack text-[20px]">
                        {card.prize}
                      </span>
                      {card.oldPrize && (
                        <p className="text-mygray text-[16px] line-through">{card.oldPrize}</p>
                      )}
                    </div>
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="px-4 py-2 bg-golden text-white font-medium rounded hover:bg-golden/80">
                    Add to Cart
                  </button>
                  <div className="flex space-x-4">
                    <div className="text-white flex flex-col items-center">
                      <i className="fas fa-share-alt"></i>
                      <span className="text-sm">Share</span>
                    </div>
                    <div className="text-white flex flex-col items-center">
                      <i className="fas fa-exchange-alt"></i>
                      <span className="text-sm">Compare</span>
                    </div>
                    <div className="text-white flex flex-col items-center">
                      <i className="fas fa-heart"></i>
                      <span className="text-sm">Save</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="h-[32px] w-full md:w-[392px] flex justify-center items-center space-x-2 mt-6">
            <div className="h-[60px] w-[60px] text-white flex justify-center items-center bg-golden hover:bg-white hover:border-2 hover:text-myblack border-golden rounded-md">
              1
            </div>
            <div className="h-[60px] w-[60px] text-white flex justify-center items-center bg-golden hover:bg-white hover:border-2 hover:text-myblack border-golden rounded-md">
              2
            </div>
            <div className="h-[60px] w-[60px] text-white flex justify-center items-center bg-golden hover:bg-white hover:border-2 hover:text-myblack border-golden rounded-md">
              3
            </div>
            <div className="h-[60px] w-[98px] text-white flex justify-center items-center bg-golden hover:bg-white hover:border-2 hover:text-myblack border-golden rounded-md">
              Next
            </div>
          </div>
        </div>
      </section>
      <CustomerCare />
    </>
  );
};

export default Shop;


