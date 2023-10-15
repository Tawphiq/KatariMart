import React from 'react';

function Cart({ cart, removeFromCart, increaseQuantity, decreaseQuantity, cartCount }) {
  // Calculating the total price of items in the cart
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='min-h-screen bg-gray-100 grid justify-center w-screen mx-auto p-10  shadow-md'>
      <h1 className='text-2xl font-semibold mb-4 text-purple-600'>{cart.length > 0 ? <h1>Cart({cart.length})</h1> : <h1>Cart</h1>}</h1>
      {cart.length === 0 && <p>Your cart is empty <br /> <button className='mt-20'>Start Shopping</button></p>}
      {cart.length > 0 && (<div className='bg-white rounded shadow-md border border-purple-500 p-4'>
      <ul className='divide-y divide-purple-500'>
        {cart.map((item) => (
          <div key={item.id} className="p-5 grid grid-cols-2 items-center">
            <div className='grid grid-cols-2 w-1/2 lg:w-1/4'>
            <img src={item.image} alt="" className='h-20 object-contain' />
            <div className='w-40 ml-2'>
            <div className='font-bold'>{item.name}</div>
            <div className='font-thin'>In stock: {item.stock}</div>
            </div>
            
            </div>
            <div className='grid justify-end'>
            <div className='font-bold ml-10'>${item.price}</div>
            <div className="w-36 gap-2 grid grid-cols-3 p-2">
              <button onClick={() => decreaseQuantity(item.id)} className={` text-white font-bold shadow rounded ${item.quantity > 1 ? 'bg-purple-600':'bg-purple-300 cursor-not-allowed'}`}>-</button>
              <span className='ml-3 font-bold'>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)} className='bg-purple-500 text-white font-bold shadow rounded'>+</button>
            </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className='mr-40 ljg:mr-96 lmg:-ml-32 mt-5 font-bold text-purple-600'>REMOVE</button>
          </div>
          
        ))}
      </ul>
      {cart.length > 0 && (
        <div className="m-4 grid justify-center bg-gray-100 h-40 p-5 rounded-md shadow-md border-2j border-purple-l500 ">
          <div className='font-bold text-lg text-purple-600 grid justify-center'>Cart Summary</div>
          <div className="">
            <span className='font-bold ml-16'>Subtotal: <span className='font-normal'>${total.toFixed(2)}</span></span>
          </div>
          <button onClick={() => alert('Checkout functionality goes here')} className='bg-purple-500 w-64 text-white font-bold rounded-md shadow-md'>
            Checkout(${total.toFixed(2)})
          </button>
        </div>
      )}
      </div>)}
    </div>
  );
}

export default Cart;







