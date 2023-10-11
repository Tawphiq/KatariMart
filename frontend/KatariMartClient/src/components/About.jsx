import React from 'react'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'

const About = () => {
  return (
    <div className='bg-gray-100 shadow-md'>
      <div className='lg:grid lg:grid-cols-2'>
        <div className='flex gap-4 p-5'>
        <img src={about1} alt="" className='h-40 lg:h-60' />
        <img src={about2} alt="" className='h-40 mt-20 lg:mt-32 lg:h-60' />
        </div>
        <div className='p-5 lg:mt-32'>
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