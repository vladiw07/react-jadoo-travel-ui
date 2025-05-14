import React from 'react'
                        
function Hero() {
  return (
    <section className="relative mt-4 sm:mt-6 md:mt-0 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32 overflow-hidden min-h-[650px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px]">
      {/* Background decor - hidden on small screens, visible and responsive on larger screens */}
      <img
        src={`${process.env.PUBLIC_URL}/Images/Decore.png`}
        className="hidden md:block absolute top-0 right-0 w-full max-w-[50%] lg:max-w-[70%] xl:max-w-[830px] h-auto z-20"
        alt="Decorative Background"
      />

      {/* Traveller 1 image - hidden on small screens, responsive positioning on larger screens */}
      <img
        src={`${process.env.PUBLIC_URL}/Images/Traveller 1.png`}
        className="hidden md:block absolute top-32 md:top-48 lg:top-32 right-0 md:right-8 lg:right-16 xl:right-56 w-full max-w-[45%] lg:max-w-[55%] xl:max-w-[700px] h-auto z-20"
        alt="Traveller"
      />

      {/* plane images - hidden on small screens */}
      <img
        src={`${process.env.PUBLIC_URL}/Images/plane.png`}
        className="hidden lg:block absolute top-52 lg:top-64 xl:top-52 right-16 xl:right-56 w-full max-w-[80px] xl:max-w-[128px] h-auto z-20"
        alt="Plane"
      />

      <img
        src={`${process.env.PUBLIC_URL}/Images/plane.png`}
        className="hidden lg:block absolute top-48 lg:top-60 xl:top-48 right-[40%] xl:right-[670px] w-full max-w-[80px] xl:max-w-[128px] h-auto z-20"
        alt="Plane"
      />
        {/* left screen elipse */}
        <img
        src={`${process.env.PUBLIC_URL}/Images/Ellipse 8.png`}
        className="block absolute top-0 left-0 w-full max-w-[200px] h-auto z-20"
        alt="Plane"
      />


    
      {/* Main content */}
      <div className="max-w-[90.5rem] mt-4 md:mt-8 lg:mt-16 mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 relative z-30 h-full">
        {/* Hero text content - full width on mobile, percentage width on larger screens */}
        <div className="w-full md:w-[60%] lg:w-[55%] xl:w-[49%] text-center md:text-left mb-12 md:mb-0">
          <span className="text-[#DF6951] text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest font-poppins">
            Best Destinations around the world
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] font-bold leading-tight mt-3 md:mt-5 text-[#181E4B] font-volkhov">
            Travel, <span className="relative inline-block w-auto md:w-[200px] lg:w-[280px] xl:w-[350px]">
              enjoy
              <img 
                src={`${process.env.PUBLIC_URL}/Images/Decore2.png`}
                alt="" 
                className="absolute bottom-0 left-0 w-full sm:w-[300px] md:w-[600px] lg:w-[800px] xl:w-[1005px] h-auto -z-10"
              />
            </span> and live a new and full life
          </h1>
          
          <p className="text-[#5E6282] mt-4 md:mt-6 text-base md:text-lg font-poppins max-w-[90%] mx-auto md:mx-0">
            Built Wicket longer admire do barton vanity itself do in it. 
            Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>
          
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6">
            <button className="bg-[#F1A501] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#e09600] transition w-full sm:w-auto">
              Find out more
            </button>
            
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <div className="bg-[#DF6951] rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg cursor-pointer">
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6.5L0.75 12.9952L0.75 0.00480889L12 6.5Z" fill="white"/>
                </svg>
              </div>
              <span className="text-[#5E6282] text-sm md:text-base">Play Demo</span>
            </div>
          </div>
        </div>

        {/* Mobile-only traveller image */}
        <div className="block md:hidden w-full max-w-[80%] mx-auto">
          <img 
            src={`${process.env.PUBLIC_URL}/Images/Traveller 1.png`}
            alt="Traveller" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
                        
export default Hero