'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const InspirationSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures the component only renders on the client-side
  }, []);

  if (!isClient) {
    return null; // Avoid server rendering issues, only render on the client
  }

  const handleExploreMore = () => {
    alert('Explore More functionality coming soon!');
  };

  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-6 bg-white space-y-6 md:space-y-0 h-full w-full py-10">
      {/* Text Section - Left on large screens */}
      <div className="order-2 md:order-1 flex flex-col justify-between w-full max-w-md md:max-w-sm space-y-4 text-center md:text-left">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-myblack">
            50+ Beautiful Rooms Inspiration
          </h1>
          <p className="text-mygray text-lg font-medium mt-2">
            Explore our stunning prototypes and find inspiration for your dream rooms.
          </p>
        </div>
        <Button
          variant="primary"
          size="sm1"
          className="bg-[#B88E2F] text-white hover:bg-[#B88E2F]/80 mx-auto md:mx-0"
          onClick={handleExploreMore}
        >
          Explore More
        </Button>
      </div>

      {/* Image Section -  */}
      <div className="order-1 md:order-2 flex justify-center items-center w-full md:w-auto flex-wrap">
        <div className="flex-shrink-0 mb-4 md:mb-0 w-full sm:w-3/4 md:w-96 lg:w-1/2">
          <Image
            src="/Products.png"
            alt="Room Inspiration"
            width={600}
            height={400}
            className="rounded-md shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;


