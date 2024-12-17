import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import CustomerCare from '@/components/CustomerCare';

const Contact = () => {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col bg-white items-center">
        {/* Banner Section */}
        <div className="h-full md:h-[316px] w-full max-w-[1440px] flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[1440px]">
            <Image src={'/shop/shop-hero.png'} alt="Contact Banner" width={1440} height={316} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <h1 className="text-4xl font-medium text-black">Contact</h1>
              <p className="text-mygray text-[16px] font-normal">home &gt; Contact</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="py-12 w-full max-w-[1440px] px-4 flex flex-col items-center space-y-8">
          <div className="text-center w-full max-w-[680px]">
            <h2 className="text-[20px] md:text-[32px] font-semibold text-black">Get In Touch With Us</h2>
            <p className="text-[12px] md:text-[16px] text-mygray font-normal">
              For more information about our products & services, feel free to drop us an email. Our staff is always ready to assist you.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between w-full max-w-[1050px] space-y-8 md:space-y-0">
            {/* Contact Information */}
            <div className="w-full md:w-[393px] flex flex-col space-y-8">
              <div className="flex space-x-4">
                <Image src={'/location.png'} alt="Address Icon" width={22} height={27} />
                <div>
                  <h3 className="text-[18px] md:text-[24px] font-semibold text-black">Address</h3>
                  <p className="text-[12px] md:text-[16px] text-mygray">236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <Image src={'/phone.png'} alt="Phone Icon" width={22} height={27} />
                <div>
                  <h3 className="text-[18px] md:text-[24px] font-semibold text-black">Phone</h3>
                  <p className="text-[12px] md:text-[16px] text-mygray">Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <Image src={'/clock.png'} alt="Clock Icon" width={22} height={27} />
                <div>
                  <h3 className="text-[18px] md:text-[24px] font-semibold text-black">Working Time</h3>
                  <p className="text-[12px] md:text-[16px] text-mygray">
                    Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-[635px]">
              <form className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-[16px] font-semibold text-black">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full h-[50px] border-2 border-gray-300 rounded-md px-4"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[16px] font-semibold text-black">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full h-[50px] border-2 border-gray-300 rounded-md px-4"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[16px] font-semibold text-black">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject (optional)"
                    className="w-full h-[50px] border-2 border-gray-300 rounded-md px-4"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[16px] font-semibold text-black">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Type your message here"
                    className="w-full border-2 border-gray-300 rounded-md px-4 py-2"
                  ></textarea>
                </div>

                <Button variant="primary" size="xs">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CustomerCare />
    </>
  );
};

export default Contact;

