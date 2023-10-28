import React from 'react'
import delivery from '../assets/delivery.png'
import shipping from '../assets/shipping.png'
import best from '../assets/best.png'
import customer from '../assets/customer.png'

{/*const Benifits = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 lg:items-center font-bold bg-gray-100 shadow-md'>
        <div className='flexk justify-centerh gap-40 my-10 lg:ml-40'>
            <div className='grid items-center w-48'>
                <img src= {delivery} alt="" className='ml-10 lg:ml-8 lg:mb-4'/>
                <div className='ml-5'>FAST DELIVERY</div>
            </div>
            <div>
                <img src= {shipping} alt="" className='lg:ml-8 lg:mb-4' />
                <div>FREE SHIPPING</div>
            </div>
        </div>
        <div className='flexl justify-centern gap-40 my-10 ml-16'>
            <div>
                <img src={best} alt="" className='lg:ml-4 lg:mb-4' />
                <div className=''>BEST QUALITY</div>
            </div>
            <div>
                <img src={customer} alt="" className='lg:ml-8 lg:mb-4' />
                <div>24/7 CUSTOMER SUPPORT</div>
            </div>
        </div>
    </div>
  )
}

export default Benifits*/}

//import React from 'react'

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
        <div className='grid justify-center gap-3 text-xl mt-10'>
            <img src={best} alt="" className='ml-10 h-16' />
            <p className='lg:mb-10'>BEST QUALITY</p>
        </div>
        <div className='grid justify-center gap-4 text-xl mb-10 mr-5'>
            <img src={customer} alt="" className='ml-28 h-16 lg:mt-10'/>
            <p>24/7 CUSTOMER SUPPORT</p>
        </div>
    </div>
  )
}

export default Benifits