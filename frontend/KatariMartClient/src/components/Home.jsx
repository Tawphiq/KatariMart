import React, {useState} from 'react'
import Products from './Products';
import Banner from './Banner';
import About from './About'
import Contact from './Contact'
import Benifits from './Benifits'




const Home = ({addToCart}) => {
    return (
    <div>
      <div>
        <Banner />
      </div>
      <div className='mb-10 -mt-10'>
        <Benifits />
      </div>
      <div id='about' className='mb-10'>
        <About />
      </div>
      <div id='products' className='mb-10'>
        <Products
         addToCart={addToCart} 
        />
      </div>
      <div id='contact' className='bg-gray-100 mb-10 p-10'>
        <Contact />
      </div>
    </div>
  )
}

export default Home