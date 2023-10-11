import React from 'react'
import delivery from '../assets/delivery.png'
import shipping from '../assets/shipping.png'
import best from '../assets/best.png'
import customer from '../assets/customer.png'

const Benifits = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 lg:items-center font-bold bg-gray-100 shadow-md'>
        <div className='flex justify-center gap-40 my-10 lg:ml-40'>
            <div>
                <img src= {delivery} alt="" className='ml-8 mb-4'/>
                <div className=''>FAST DELIVERY</div>
            </div>
            <div>
                <img src= {shipping} alt="" className='ml-8 mb-4' />
                <div>FREE SHIPPING</div>
            </div>
        </div>
        <div className='flex justify-center gap-40 my-10 ml-16'>
            <div>
                <img src={best} alt="" className='ml-4 mb-4' />
                <div className=''>BEST QUALITY</div>
            </div>
            <div>
                <img src={customer} alt="" className='ml-8 mb-4' />
                <div>24/7 CUSTOMER SUPPORT</div>
            </div>
        </div>
    </div>
  )
}

export default Benifits