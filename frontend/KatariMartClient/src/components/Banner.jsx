import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';


const Banner = () => {
  return (
    <div className='bg-[url(./assets/slider-bg.jpg)] text-white h-96 bg-cover lg:bg-contain lg:h-screen lg:bg-no-repeat'>
      <h1 className='text-4xl text-white font-bold font-sans flex justify-center lg:text-5xl lg:justify-start px-20'><span className='mt-20 lg:mt-40'>STYLE WATCHES</span></h1>
      <p className='flex px-20 py-5 font-semibold'>Elevate Your Style with Exquisite Timepieces - Explore Our Online Watch Shop Today!</p>
      <div className='flex gap-2 justify-center mt-10 lg:justify-start lg:px-20'>
        <Link className='bg-green-500 p-2 w-36 text-center shadow-md rounded cursor-pointer hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-500'
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        >
          Contact Us
          </Link>
        <Link className='bg-purple-700 p-2 w-36 text-center shadow-md rounded cursor-pointer hover:bg-white hover:text-purple-600 hover:border-2 hover:border-purple-500'
        to="about"
        spy={true}
        smooth={true}
        duration={500}>
          About Us
          </Link>
      </div>
    </div>
  )
}

export default Banner