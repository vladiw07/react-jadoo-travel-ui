import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white py-16 px-6 sm:px-10 lg:px-20 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-[#5E6282]">
        
        {/* Brand */}
        <div className="col-span-1">
          <h2 className="text-[44px] font-medium font-poppins text-[#181E4B] mb-4">Jadoo.</h2>
          <p className="text-[13px] max-w-xs font-poppins font-medium ">
            Book your trip in minute, get full control for much longer.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-[21px] font-bold font-poppins text-[#080809] mb-4">Company</h3>
          <ul className="space-y-2 text-[18px] font-poppins font-medium">
            <li>About</li>
            <li>Careers</li>
            <li>Desktop</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[21px] font-bold font-poppins text-[#080809] mb-4">Contact</h3>
          <ul className="space-y-2 text-[18px] font-poppins font-medium">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[21px] font-bold font-poppins text-[#080809] mb-4">More</h3>
          <ul className="space-y-2 text-[18px] font-poppins font-medium">
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>

        {/* Social & Apps */}
        <div className="flex flex-col items-start gap-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:opacity-80 transition">
              <FaFacebookF className="text-[#14183E]" />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:opacity-80 transition">
              <FaInstagram className="text-[#14183E]" />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:opacity-80 transition">
              <FaTwitter className="text-[#14183E]" />
            </div>
          </div>
          <p className="text-sm font-medium">Discover our app</p>
          <div className="flex gap-3">
            <img
              src={`${process.env.PUBLIC_URL}/Images/Google Play.png`}
              alt="Google Play"
              className="h-[35px] w-[105px]"
            />
            <img
              src={`${process.env.PUBLIC_URL}/Images/Play Store.png`}
              alt="App Store"
              className="h-[35px] w-[105px]"
            />
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-20 text-center font-medium text-[14px] text-[#5E6282]">
        All rights reserved@jadoo.co
      </div>
    </footer>
  );
}

export default Footer;
