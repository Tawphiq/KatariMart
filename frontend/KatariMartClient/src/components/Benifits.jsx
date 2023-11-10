import React from 'react'
import delivery from '../assets/delivery.png'
import shipping from '../assets/shipping.png'
import best from '../assets/best.png'
import customer from '../assets/customer.png'



const Benifits = () => {
  return (
    <div className='grid lg:grid-cols-4 justify-center my-20 lg:my-10 lg:mt-1 gap-20 font-bold shadow-md bg-gray-200 font-mono'>
        <div className='grid justify-center gap-2 text-xl mt-10 lg:mb-10'>
            <img src={delivery} alt="" className='ml-10 h-16' />
            <p>FAST DELIVERY</p>
        </div>
        <div className='grid justify-center gap-4 lg:gap-2 lg:mt-10 text-xl'>
            <img src={shipping} alt="" className='ml-10 h-16' />
            <p className='lg:mb-10'>FREE SHIPPING</p>
        </div>
        <div className='grid justify-center gap-3 text-xl mt-2 mb-5g'>
            <img src={best} alt="" className='ml-10 h-16' />
            <p className='lg:mb-10'>BEST QUALITY</p>
        </div>
        <div className='grid justify-center gap-4 text-xl mb-10 mr-10'>
            <img src={customer} alt="" className='ml-28 h-16 lg:mt-10'/>
            <p>24/7 CUSTOMER SUPPORT</p>
        </div>
    </div>
  )
}

export default Benifits