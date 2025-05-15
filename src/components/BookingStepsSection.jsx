import React from 'react';
import { FaLocationArrow, FaRegCreditCard, FaPlaneDeparture, FaHeart, FaBookmark, FaUser } from 'react-icons/fa';

function BookingStepsSection() {
  return (
    <section className="py-20 bg-white max-w-[70rem] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left content */}
      <div className="flex-1 text-left">
        <p className="text-[18px] text-[#5E6282] font-poppins font-medium mb-2">Easy and Fast</p>
        <h2 className="text-[50px] font-bold text-[#14183E] text-[#14183E] font-volkhov mb-10 leading-snug">
          Book Your Next Trip <br /> In 3 Easy Steps
        </h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="rounded-xl text-yellow-500 text-xl">
              <img
                src={`${process.env.PUBLIC_URL}/Images/Group 7.png`}
                alt="Choose Destination Icon"
              />
            </div>
            <div>
              <h4 className="text-md font-bold font-poppins text-[16px] text-[#5E6282]">Choose Destination</h4>
              <p className="text-sm text-[#5E6282] font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="rounded-xl text-red-500 text-xl">
              <img
                src={`${process.env.PUBLIC_URL}/Images/Group 12.png`}
                alt="Make Payment Icon"
              />
            </div>
            <div>
              <h4 className="text-md font-bold font-poppins text-[16px] text-[#5E6282]">Make Payment</h4>
              <p className="text-sm text-[#5E6282] font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="rounded-xl text-blue-500 text-xl">
              <img
                src={`${process.env.PUBLIC_URL}/Images/Group 11.png`}
                alt="Reach Airport Icon"
              />
            </div>
            <div>
              <h4 className="text-md font-bold font-poppins text-[16px] text-[#5E6282]">Reach Airport on Selected Date</h4>
              <p className="text-sm text-[#5E6282] font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Trip Card */}
      <div className="flex-1 relative w-full">
        {/* Background decoration – behind the card */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${process.env.PUBLIC_URL}/Images/Group 589.png`}
            alt="Decorative BG"
            className="absolute top-10 -right-16 h-[300px] md:h-[400px] pointer-events-none"
          />
        </div>

        {/* White trip card – responsive */}
        <div className="relative z-10 bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-[370px] mx-auto pt-4">
          <div className="flex justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/Images/Rectangle 17.jpg`}
              alt="Trip to Greece"
              className="w-[90%] h-auto object-cover rounded-t-[24px]"
            />
          </div>

          <div className="p-5 text-left space-y-2">
            <h4 className="font-bold text-[#14183E] text-[18px] font-poppins">Trip To Greece</h4>
            <p className="text-[16px] text-[#5E6282] font-poppins">14–29 June | by Robbin J</p>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-[#5E6282] text-sm">
              <img src={`${process.env.PUBLIC_URL}/Images/LEAF.png`} alt="Leaf Icon" />
              <img src={`${process.env.PUBLIC_URL}/Images/map icon.png`} alt="Map Icon" />
              <img src={`${process.env.PUBLIC_URL}/Images/send.png`} alt="Send Icon" />
            </div>
            <div className="flex items-center gap-4 mt-3">
              <img className="h-4" src={`${process.env.PUBLIC_URL}/Images/Group.png`} alt="People Icon" />
              <p className="text-sm text-[#5E6282] font-poppins">24 people going</p>
            </div>
          </div>
        </div>

        {/* Floating status card – only visible on lg screens and up */}
        <div className="hidden lg:block absolute bottom-16 -right-8 z-20 bg-white shadow-lg rounded-2xl px-4 py-3 w-[90%] max-w-[220px] text-left flex gap-4">
          <div>
            <img src={`${process.env.PUBLIC_URL}/Images/Mask Group.png`} alt="Rome Trip" />
          </div>
          <div>
            <p className="text-xs text-[#5E6282] font-poppins mb-1">Ongoing</p>
            <h5 className="font-bold text-sm text-[#14183E] mb-1">Trip to Rome</h5>
            <p className="text-[14px] font-poppins">
              <span className="text-[#8A79DF] font-semibold">40%</span> completed
              <img src={`${process.env.PUBLIC_URL}/Images/Group 3.png`} alt="Progress Bar" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingStepsSection;