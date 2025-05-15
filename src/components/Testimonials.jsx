import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Mike Taylor',
    location: 'Lahore, Pakistan',
    quote:
      '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
    avatar: 'Image.png',
  },
  {
    name: 'Chris Thomas',
    location: 'CEO of Red Button',
    quote:
      '“We were impressed by how smooth the process was. From booking to destination, everything was perfectly handled.”',
    avatar: '2ndMaleTestimonial.png',
  },
  {
    name: 'Emily Johnson',
    location: 'San Francisco, USA',
    quote:
      '“This was the easiest trip planning experience I’ve had. The suggestions were great and support was excellent.”',
    avatar: 'femaleTestimonial.png',
  },
];

const logos = [
  'axon.png',
  'jetstar.png',
  'expedia.png',
  'qantas.png',
  'alitalia.png'
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const active = testimonials[current];
  const previous = testimonials[(current - 1 + testimonials.length) % testimonials.length];

  return (
    <section className="py-20 bg-white max-w-[70rem] mx-auto px-6 flex flex-col gap-20">
      <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-16">
        {/* Left Side */}
        <div className="flex-1 w-full text-center lg:text-left">
          <p className="text-[18px] font-poppins text-[#5E6282] uppercase font-semibold mb-2 tracking-wide">
            Testimonials
          </p>
          <h2 className="text-[38px] md:text-[50px] font-bold text-[#14183E] font-volkhov leading-snug mb-10">
            What People Say <br className="hidden lg:block" /> About Us.
          </h2>

          {/* Dots */}
          <div className="flex justify-center lg:justify-start gap-3 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === current ? 'bg-[#39425D]' : 'bg-[#E5E5E5]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 w-full relative flex flex-col items-center">
          {/* Active Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 relative z-10 max-w-md w-full">
            <img
              src={`${process.env.PUBLIC_URL}/Images/${active.avatar}`}
              alt={active.name}
              className="w-14 h-14 sm:w-18 sm:h-18 rounded-full absolute -top-7 left-6 sm:left-[-28px] border-4 border-white object-cover"
            />
            <p className="text-[#5E6282] font-poppins text-[16px] sm:text-[16px] leading-relaxed mb-5 mt-7">
              {active.quote}
            </p>
            <p className="text-[#14183E] font-poppins font-bold text-[16px]">{active.name}</p>
            <p className="text-[#5E6282] text-sm font-poppins">{active.location}</p>
          </div>

          {/* Inactive Preview */}
          <div className="hidden sm:block rounded-2xl border-2 border-[#F7F7F7] p-6 relative -z-1 max-w-md w-full absolute bottom-[140px] left-[35px]">
            <p className="text-[#5E6282] font-poppins font-semibold text-[15px] leading-relaxed mb-5 mt-7">
              {previous.quote}
            </p>
            <p className="text-[#5E6282] font-poppins font-bold text-[16px]">{previous.name}</p>
            <p className="text-[#5E6282] text-sm font-poppins">{previous.location}</p>
          </div>

          {/* Arrows */}
          <div className="mt-10 sm:mt-0 sm:absolute sm:-right-24 sm:top-40 transform sm:-translate-y-1/2 flex sm:flex-col gap-4 z-20">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#BDC0D1] hover:text-[#14183E] transition-colors"
            >
              <FiChevronUp size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#BDC0D1] hover:text-[#14183E] transition-colors"
            >
              <FiChevronDown size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Logos Static Image */}
<div className="w-full -mt-40 hidden md:block">
  <img
    src={`${process.env.PUBLIC_URL}/Images/logos.png`}
    alt="Partner Logos"
    className="w-full object-contain"
  />
</div>
    </section>
  );
}

export default Testimonials;
