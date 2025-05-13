import React, { useState } from 'react'
            
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="max-w-[90.5rem] mx-auto flex items-center justify-between px-8 py-4 mt-2 sm:mt-4 md:mt-6 lg:mt-8 absolute top-0 left-0 right-0 z-50 bg-transparent">
        {/* Logo - Always visible */}
        <div className="flex-1 flex justify-start">
          <img src="/Images/Logo.png" alt="Logo" className="h-8 md:h-auto" />
        </div>

        {/* Navigation Links - Hidden on small/medium screens */}
        <ul className="hidden lg:flex gap-14 text-gray-700 font-medium justify-center">
          <li className="hover:text-yellow-500 cursor-pointer">Destinations</li>
          <li className="hover:text-yellow-500 cursor-pointer">Hotels</li>
          <li className="hover:text-yellow-500 cursor-pointer">Flights</li>
          <li className="hover:text-yellow-500 cursor-pointer">Bookings</li>
        </ul>

        {/* Buttons - Hidden on small/medium screens */}
        <div className="hidden lg:flex flex-1 justify-end gap-6">
          <button className="border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 transition">
            Log in
          </button>
          <button className="border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 transition">
            Sign up
          </button>

          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-700">EN</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Hamburger Menu Button - Visible only on sm and md screens */}
        <div className="flex lg:hidden items-center">
          <button 
            onClick={toggleMenu} 
            className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 rounded-md p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#212832] transition-transform duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#212832] transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-[#212832] transition-transform duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Slides in from right when open */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <div className="flex flex-col p-8">
          <div className="flex justify-end mb-10">
            <button 
              onClick={toggleMenu} 
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <ul className="flex flex-col space-y-6">
            <li className="py-2 border-b border-gray-100">
              <a href="#" className="text-[#212832] text-lg font-medium hover:text-[#DF6951]">Destinations</a>
            </li>
            <li className="py-2 border-b border-gray-100">
              <a href="#" className="text-[#212832] text-lg font-medium hover:text-[#DF6951]">Hotels</a>
            </li>
            <li className="py-2 border-b border-gray-100">
              <a href="#" className="text-[#212832] text-lg font-medium hover:text-[#DF6951]">Flights</a>
            </li>
            <li className="py-2 border-b border-gray-100">
              <a href="#" className="text-[#212832] text-lg font-medium hover:text-[#DF6951]">Bookings</a>
            </li>
          </ul>
          
          <div className="mt-10 flex flex-col space-y-4">
            <button className="w-full bg-white border border-gray-400 px-4 py-3 rounded-md hover:bg-gray-100 transition text-[#212832] font-medium">
              Log in
            </button>
            <button className="w-full bg-[#F1A501] text-white px-4 py-3 rounded-md hover:bg-[#e09600] transition font-medium">
              Sign up
            </button>
            
            <div className="flex items-center gap-2 mt-4 justify-center">
              <span className="text-[#212832] font-medium">EN</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  )
}
            
export default Navbar