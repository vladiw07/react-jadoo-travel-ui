import React from 'react';
        
function ServiceCardsSection() {
  const services = [
    {
      image: 'Group 48',
      title: 'Calculated Weather',
      description: 'Built Wicket longer admire do barton vanity itself do in it.',
    },
    {
      image: 'Group 51',
      title: 'Best Flights',
      description: 'Engrossed listening. Park gate sell they west hard for the.',
      highlight: true,
    },
    {
      image: 'Group 50',
      title: 'Local Events',
      description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
    },
    {
      image: 'Group 49',
      title: 'Customization',
      description: 'We deliver outsourced aviation services for military customers.',
    },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white text-center relative overflow-hidden">
      {/* Background decoration image - hidden on screens less than 650px */}
      <img
        className="absolute hidden sm:block right-0 sm:right-4 md:right-10 lg:right-20 top-10 w-24 sm:w-32 md:w-auto opacity-50 sm:opacity-100"
        src={`${process.env.PUBLIC_URL}/Images/Group 4.png`}
        alt=""
      />

      {/* Section title */}
      <p className="text-sm sm:text-base md:text-[18px] font-semibold font-poppins text-[#5E6282] uppercase tracking-wide">
        Category
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold font-volkhov text-gray-900 mt-2 mb-8 md:mb-12 px-4">
        We Offer Best Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
        {services.map((service, index) => (
          <div key={index} className="relative flex justify-center mb-6 sm:mb-0">
            {/* Highlight image (behind the card) - hidden on screens less than 650px */}
            {service.highlight && (
              <img
                src={`${process.env.PUBLIC_URL}/Images/Rectangle 157.png`}
                alt="Decorative highlight"
                className="absolute hidden sm:block -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 z-0 w-16 sm:w-auto"
              />
            )}

            {/* Card itself - shadow only on highlighted card and screens >= 650px */}
            <div 
              className={`relative z-10 p-6 sm:p-8 pb-8 sm:pb-12 pt-8 sm:pt-10 rounded-[20px] sm:rounded-[30px] transition flex flex-col items-center bg-white w-full ${
                service.highlight ? 'sm:shadow-lg sm:shadow-soft-xl' : ''
              }`}
            >
              <div className="flex justify-center items-center mb-4 h-16 sm:h-20">
                <img
                  src={`${process.env.PUBLIC_URL}/Images/${service.image}.png`}
                  alt={service.title}
                  className="max-h-full"
                />
              </div>
              <h3 className="text-lg sm:text-[20px] font-sans font-semibold text-[#1E1D4C] mb-2">
                {service.title}
              </h3>
              <p className="text-sm sm:text-[16px] font-poppins text-[#5E6282] max-w-[250px]">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceCardsSection;