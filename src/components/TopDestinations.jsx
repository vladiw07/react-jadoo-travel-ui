import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

const destinations = [
  {
    city: 'Rome, Italy',
    price: '$5.42k',
    duration: '10 Days Trip',
    image: 'Rome.png',
  },
  {
    city: 'London, UK',
    price: '$4.2k',
    duration: '12 Days Trip',
    image: 'London.png',
  },
  {
    city: 'Full Europe',
    price: '$15k',
    duration: '28 Days Trip',
    image: 'Europe.png',
  },
];

function TopDestinations() {
  return (
    <section className="py-20 bg-white text-center relative">
      <p className="text-sm font-semibold font-poppins text-[#5E6282] tracking-wide">Top Selling</p>
      <h2 className="text-4xl font-bold font-volkhov text-[#14183E] mt-2 mb-12">Top Destinations</h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="w-[315px] bg-white rounded-[20px] z-10 shadow-lg flex flex-col relative"
          >
            {/* Card image */}
            <img
              src={`${process.env.PUBLIC_URL}/Images/${dest.image}`}
              alt={dest.city}
              className="w-full h-[340px] object-cover rounded-t-[20px]"
            />

            {/* Text content */}
            <div className="p-5 text-left flex flex-col justify-between h-full">
              <div className="flex justify-between items-center text-[#14183E] font-semibold mb-2">
                <h3 className="text-[18px] font-poppins">{dest.city}</h3>
                <span className="text-[18px] font-poppins text-[#5E6282] font-medium">{dest.price}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#5E6282] font-poppins">
                <FaLocationArrow className="text-xs black" />
                <span className='text-[16px] font-poppins'>{dest.duration}</span>
              </div>
            </div>

            {/* Decorative image on the third card */}
            {index === 2 && (
              <img
                src={`${process.env.PUBLIC_URL}/Images/Decore3.png`}
                alt="Decoration"
                className="absolute -right-[60px] -z-10 top-1/2 transform -translate-y-1/2 pointer-events-none"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopDestinations;
