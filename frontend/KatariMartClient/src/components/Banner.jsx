import React, {useEffect} from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Banner = () => {

  useEffect(() => {AOS.init({duration: 2000})}, [])
  return (
    <div data-aos="fade-left" className='bg-[url(./assets/slider-bg.jpg)] text-white h-96 bg-cover bg-right lg:bg-top bg-no-repeat lg:bg-contain lg:h-screen'>
      <h1 data-aos="fade-down-right" className='text-4xl text-white font-bold font-mono flex justify-center lg:text-5xl lg:justify-start px-20'><p  className='mt-20 lg:mt-40 whitespace-nowrap'>STYLE WATCHES</p></h1>
      <p data-aos="fade-down-left" className='flex px-10 py-5 lg:px-20 font-bold'>Elevate Your Style with Exquisite Timepieces - Explore Our Online Watch Shop Today!</p>
      
      <div className='flex gap-2 justify-center lg:mt-10 lg:justify-start lg:px-20'>
        <Link data-aos="fade-right" className='bg-green-500 p-2 w-36 text-center shadow-md rounded cursor-pointer hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-500'
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        >
          Contact Us
          </Link>
        <Link data-aos="fade-left" className='bg-purple-700 p-2 w-36 text-center shadow-md rounded cursor-pointer hover:bg-white hover:text-purple-600 hover:border-2 hover:border-purple-500'
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