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
    <section className="flex flex-col md:flex-row justify-center items-center px-6 md:justify-between bg-white space-y-6 md:space-y-0 h-full w-full py-10">
      {/* Text Section */}
      <div className="flex flex-col justify-between w-full max-w-md md:max-w-sm space-y-4 ml-4">
        <div>
          <h1 className="text-4xl font-bold text-myblack">
            50+ Beautiful Rooms Inspiration
          </h1>
          <p className="text-mygray text-lg font-medium">
            Explore our stunning prototypes and find inspiration for your dream rooms.
          </p>
        </div>
        <Button variant="primary" size="sm1" className="bg-[#B88E2F] text-white hover:bg-[#B88E2F]/80" onClick={handleExploreMore}>
          Explore More
        </Button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center gap-4 w-full md:w-auto flex-wrap md:flex-nowrap">
        <div className="flex-shrink-0 ml-4">
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




