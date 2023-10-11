import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import fevicon from '../assets/fevicon.png';
import { Link as RouterLink } from 'react-router-dom';



function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

useEffect(() => {
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

const toggleNavbar = () => {
  setIsOpen(!isOpen);
};

return (
  <nav className="flex items-center justify-between flex-wrap p-6 sticky top-0 w-full z-10 bg-gray-300">
    <RouterLink
      to='/'
      spy={true}
      smooth={true}
      duration={500} 
      className="flex items-center flex-shrink-0  mr-6 cursor-pointer text-white  border bg-purple-500 hover:bg-white hover:text-purple-500 font-bold  hover:border-purple-500 p-2 shadow rounded-md">
      <img src={fevicon} className="w-100 h-10 mr-2" alt="Logo" />
      <span className=''>Katari Watch</span>
    </RouterLink>
    <div className="block lg:hidden">
      <button
        onClick={toggleNavbar}
        className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
      >
        <svg
          className={`fill-current h-3 w-3 ${isOpen ? 'hidden' : 'block'}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        <svg
          className={`fill-current h-3 w-3 ${isOpen ? 'block' : 'hidden'}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      </button>
    </div>
    <div
      className={`w-full block lg:flex lg:items-center lg:w-auto ${
        isLargeScreen || isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="text-sm lg:flex-grow text-center">
        <RouterLink
          to="/"
          spy={true}
          smooth={true}
          duration={500}
          className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold hover:text-lg hover:font-thin hover:border-b-2 hover:border-b-purple-700 mr-4 cursor-pointer"
          activeClass="font-thin text-lg border-b-2 border-b-purple-700"
        >
          Home
        </RouterLink>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold hover:text-lg hover:font-thin hover:border-b-2 hover:border-b-purple-700 mr-4 cursor-pointer"
          activeClass="font-thin text-lg border-b-2 border-b-purple-700"
        >
          About
        </Link>
        <Link
          to="products"
          spy={true}
          smooth={true}
          duration={500}
          className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold hover:text-lg hover:font-thin hover:border-b-2 hover:border-b-purple-700 mr-4 cursor-pointer"
          activeClass="font-thin text-lg border-b-2 border-b-purple-700"
        >
          Products
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold hover:text-lg hover:font-thin hover:border-b-2 hover:border-b-purple-700 mr-4 cursor-pointer"
          activeClass="font-thin text-lg border-b-2 border-b-purple-700"
        >
          Contact Us
        </Link>
        <RouterLink
          to="/account"
          spy={true}
          smooth={true}
          duration={500}
          className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold hover:text-lg hover:font-thin hover:border-b-2 hover:border-b-purple-700 mr-4 cursor-pointer"
          activeClass="font-thin text-lg border-b-2 border-b-purple-700"
        >
        Account
        </RouterLink>
        <RouterLink
          to="/cart"
          className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold hover:text-lg hover:font-thin hover:border-b-2 hover:border-b-purple-700 mr-4 cursor-pointer"
        >
        Cart
        </RouterLink>
    
      </div>
    </div>
  </nav>
);
}

export default Navbar;






