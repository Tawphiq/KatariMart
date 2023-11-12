import React, {useEffect} from 'react'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {AOS.init({duration: 2000})}, [])
  return (
    <div className='bg-gray-100'>
      <div className='lg:grid lg:grid-cols-2'>
        <div className='flex gap-4 p-5'>
        <img data-aos="flip-right" src={about1} alt="" className='h-36 lg:h-60 -mr-2' />
        <img data-aos="flip-left" src={about2} alt="" className='h-36 mt-20 lg:mt-32 lg:h-60' />
        </div>
        <div data-aos="fade-left" className='p-5 lg:mt-32'>
          <h1 className='text-2xl font-bold'>About Our Shop</h1>
          <p className='mt-2'>At Katari Watches, our passion for horology knows no bounds. 
            We're more than just a retailer; we're dedicated timepiece enthusiasts who curate a collection of watches that tell a story of craftsmanship and sophistication.</p>
          <button className='bg-purple-500 text-white p-2 rounded shadow mt-2 lg:mt-10'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About