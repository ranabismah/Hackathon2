import Image from 'next/image';
import React from 'react';

const CustomerCare = () => {
  return (
    <section className="h-full py-6 flex justify-center items-center w-full bg-peach overflow-x-hidden">
      <div className="w-full max-w-full md:max-w-[1334px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {/* High Quality Section */}
        <div className="flex justify-center items-center w-full max-w-[328px]">
          <div className="flex justify-center items-center flex-col">
            <div className="mb-4">
              <Image src="/customer1.png" alt="logo" width={60} height={60} />
            </div>
            <h2 className="font-semibold text-2xl text-myblack">High Quality</h2>
            <p className="text-mygray text-[16px] font-medium text-center">
              Crafted from top materials
            </p>
          </div>
        </div>

        {/* Warranty Protection Section */}
        <div className="flex justify-center items-center w-full max-w-[328px]">
          <div className="flex justify-center items-center flex-col">
            <div className="mb-4">
              <Image src="/customer2.png" alt="logo" width={60} height={60} />
            </div>
            <h2 className="font-semibold text-2xl text-myblack">Warranty Protection</h2>
            <p className="text-mygray text-[16px] font-medium text-center">Over 2 years</p>
          </div>
        </div>

        {/* Free Shipping Section */}
        <div className="flex justify-center items-center w-full max-w-[328px]">
          <div className="flex justify-center items-center flex-col">
            <div className="mb-4">
              <Image src="/customer3.png" alt="logo" width={60} height={60} />
            </div>
            <h2 className="font-semibold text-2xl text-myblack">Free Shipping</h2>
            <p className="text-mygray text-[16px] font-medium text-center">Orders over $150</p>
          </div>
        </div>

        {/* 24/7 Support Section */}
        <div className="flex justify-center items-center w-full max-w-[328px]">
          <div className="flex justify-center items-center flex-col">
            <div className="mb-4">
              <Image src="/customer4.png" alt="logo" width={60} height={60} />
            </div>
            <h2 className="font-semibold text-2xl text-myblack">24/7 Support</h2>
            <p className="text-mygray text-[16px] font-medium text-center">Dedicated support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerCare;

