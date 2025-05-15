import React from 'react';
import { FiMail } from 'react-icons/fi';

function NewsletterSubscription() {
  return (
    <div className="w-full flex justify-center -mt-0 px-4 sm:px-6 md:px-8">
      <section className="relative bg-[#F4F0FB] py-10 sm:py-16 px-4 sm:px-6 md:px-12 rounded-[20px] sm:rounded-tl-[100px] md:rounded-tl-[150px] max-w-7xl w-full flex items-center justify-center mb-10">
        
        {/* Background decorations inside the clipped area */}
        <div className="absolute inset-0 overflow-hidden rounded-[40px] sm:rounded-[80px] z-0">
          <img
            src={`${process.env.PUBLIC_URL}/Images/Group 42.png`}
            alt="Background Decoration"
            className="absolute bottom-0 left-0 sm:left-10 w-[200px] sm:w-[300px] md:w-[400px] opacity-[13%] h-auto pointer-events-none"
          />
          <img
            src={`${process.env.PUBLIC_URL}/Images/Group 43.png`}
            alt="Paper Plane"
            className="absolute top-[-20px] right-[-20px] opacity-[13%] w-[30px] sm:w-[40px] md:w-50"
          />
        </div>

        {/* Foreground decoration allowed to overflow (e.g. corner badge) */}
        <img
          src={`${process.env.PUBLIC_URL}/Images/Group 77.png`}
          alt="Accent Decoration"
          className="absolute -top-[13px] -right-[13px] w-[40px] sm:w-[50px] md:w-[70px] z-10 pointer-events-none"
        />

        <img
          src={`${process.env.PUBLIC_URL}/Images/Group 5.png`}
          alt="Accent Decoration"
          className="absolute -bottom-[40px] sm:-bottom-[50px] md:-bottom-[69px] -right-[50px] sm:-right-[70px] md:-right-[100px] w-[80px] sm:w-[100px] md:w-[150px] z-10 pointer-events-none hidden xl:block"
        />


            {/* Subscription content block with centered layout */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-4 sm:space-y-6 md:space-y-10 overflow-hidden px-2 sm:px-4 w-full py-8 sm:py-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold font-poppins text-[#5E6282] max-w-3xl mb-2 sm:mb-4 md:mb-10">
            Subscribe to get information, latest news and other interesting offers about Jadoo
          </h2>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
            <div className="flex items-center bg-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl w-full sm:flex-1 shadow-sm">
              <FiMail className="text-[#5E6282] mr-2" />
              <input
                type="email"
                placeholder="Your email"
                className="w-full py-1 sm:py-2 px-2 sm:px-4 text-[#39425D] outline-none text-[14px] text-[#5E6282] bg-transparent"
                aria-label="Email for newsletter subscription"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#FF946D] to-[#FF7D68] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-sans text-base sm:text-[17px] font-semibold shadow-md hover:opacity-90 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default NewsletterSubscription;