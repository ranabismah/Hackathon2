import Image from 'next/image';
import React from 'react';

const Range: React.FC = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center w-full bg-white">
      <div className="h-full md:h-[685px] w-full md:w-[1188px] flex items-center flex-col space-y-4 md:space-y-0 justify-between">
        <div className="h-[76px] md:w-[559px] flex flex-col items-center">
          <h2 className="text-[24px] md:text-[32px] font-bold text-myblack">Browse The Range</h2>
          <p className="text-[14px] md:text-[20px] font-normal text-mygray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="md:h-[537px] w-full grid grid-cols-1 md:grid-cols-3 px-6 sm:px-0 gap-6">
          <div className="h-full w-[381px] flex flex-col items-center justify-between bg-white">
            <Image
              src="/browser-img1.png"
              alt="Dining Range"
              width={762}
              height={508}
              className="object-cover"
            />
            <p className="text-[24px] font-semibold text-myblack">Dining</p>
          </div>
          <div className="h-full w-[381px] flex flex-col items-center justify-between bg-white">
            <Image
              src="/browser-img2.png"
              alt="Living Range"
              width={762}
              height={508}
              className="object-cover"
            />
            <p className="text-[24px] font-semibold text-myblack">Living</p>
          </div>
          <div className="h-full w-[381px] flex flex-col items-center justify-between bg-white">
            <Image
              src="/browser-img3.png"
              alt="Bedroom Range"
              width={762}
              height={508}
              className="object-cover"
            />
            <p className="text-[24px] font-semibold text-myblack">Bedroom</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Range;
