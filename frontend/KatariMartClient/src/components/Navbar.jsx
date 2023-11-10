import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import fevicon from '../assets/fevicon.png';
import { Link as RouterLink } from 'react-router-dom';
import Account from './Account';




function Navbar({cartCount}) {
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
    <div className="flex lg:hidden">
      <RouterLink
      to='/cart'
      >
    <span>
        <li class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-1 align-middle text-black hover:text-gray-700">
  <a href="#" role="button" class="relative flex">
    <svg class="flex-1 w-8 h-6 mb-2 fill-current" viewbox="0 0 24 24" >
      <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
      </svg>
      <span class="absolute right-0 top-0 rounded-full bg-purple-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cartCount}</span>
  </a>
</li>
    </span>
    </RouterLink>
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
      <div className="text-sm lg:flex-grow text-center mr-40">
        <RouterLink
          to="/"
          spy={true}
          smooth={true}
          duration={500}
          className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold text-lg hover:font-thin hover:border-b-2 hover:border-b-purple-700 mr-4 cursor-pointer"
          activeClass="font-thin text-lg border-b-2 border-b-purple-700"
        >
          Home
        </RouterLink>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold text-lg hover:font-thin hover:border-b-2 hover:border-b-purple-700 mr-4 cursor-pointer"
          activeClass="font-thin text-lg border-b-2 border-b-purple-700"
        >
          About
        </Link>
        <Link
          to="products"
          spy={true}
          smooth={true}
          duration={500}
          className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold text-lg hover:font-thin hover:border-b-2 hover:border-b-purple-700 mr-4 cursor-pointer"
          activeClass="font-thin text-lg border-b-2 border-b-purple-700"
        >
          Products
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold text-lg hover:font-thin hover:border-b-2 hover:border-b-purple-700 mr-4 cursor-pointer"
          activeClass="font-thin text-lg border-b-2 border-b-purple-700"
        >
          Contact Us
        </Link>
        {/*<RouterLink
          to="/account"
          spy={true}
          smooth={true}
          duration={500}
          className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold text-lg hover:font-thin hover:border-b-2 hover:border-b-purple-700 mr-4 cursor-pointer"
          activeClass="font-thin text-lg border-b-2 border-b-purple-700"
        >
          Account
    </RouterLink>*/}
        
        <RouterLink
          to="/cart"
          className="block absolute mt-4 lg:inline-block lg:mt-0 text-black font-bold text-lg hover:font-thin hover:border-b-2 hover:border-b-purple-700 mr-4 cursor-pointer"
        >
        <span className='ml-28'>Cart</span>
        <span>
        {!isOpen&&<li class="font-sans mt-4 lg:inline-block lg:mt-0 lg:ml-1 align-middle text-black hover:text-gray-700">
  <a href="#" role="button" class="relative flex">
    <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24" >
      <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
      </svg>
      <span class="absolute right-0 top-0 rounded-full bg-purple-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cartCount}</span>
  </a>
</li>}
    </span>
  </RouterLink>
  <button
  className="mt-4 relative lg:inline-block lg:mt-0 text-black font-bold text-lg hover:font-thin hover:border-b-2 hover:border-b-purple-700 mr-4 cursor-pointer">
          <div className=''>Account</div>
          <Account className = "" />
        </button>
  </div>
  </div>
  </nav>
);
}

export default Navbar;






