import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

function Cart({ cart, setCart, removeFromCart, increaseQuantity, decreaseQuantity, cartCount, setCartCount }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    

    // Simulate a successful checkout after a delay
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsCheckoutSuccess(true);
      setIsModalOpen(true);
      setCartCount(0);

      // Reset the cart (this can be done later)
    }, 1000); // Change the delay as needed
  };

  const closeModal = () => {
    if (isCheckoutSuccess) {
      // If the checkout was successful, reset the cart
      setCart([]);
    }

    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <div className='min-h-screen bg-gray-100 grid justify-center w-full mx-auto p-10 shadow-md'>
      <h1 className='text-2xl font-semibold mb-4 text-purple-600'>
        {cart.length > 0 ? <h1>Cart({cart.length})</h1> : <h1>Cart</h1>}
      </h1>
      {cart.length === 0 && (
        <div className='mb-80 font-bold'>
          <div className='mb-10'>Your cart is empty</div>
          <RouterLink to='/' className='mt-20 text-sm bg-purple-500 text-white p-2 shadow-md rounded'>Start Shopping</RouterLink>
        </div>
      )}
      {cart.length > 0 && (
        <div className='bg-white rounded shadow-md border border-purple-500 p-4'>
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
            <div className="m-4 grid justify-center bg-gray-100 h-40 p-5 rounded-md shadow-md border-2j border-purple-l500">
              <div className='font-bold text-lg text-purple-600 grid justify-center'>
                Cart Summary
              </div>
              <div className="">
                <span className='font-bold ml-16'>
                  Subtotal: <span className='font-normal'>${total.toFixed(2)}</span>
                </span>
              </div>
              {isCheckingOut ? (
                <p>Processing your order...</p>
              ) : (
                <>
                  <button
                    onClick={handleCheckout}
                    className='bg-purple-500 w-64 text-white font-bold rounded-md shadow-md'
                  >
                    Checkout(${total.toFixed(2)})
                  </button>
                  {isCheckoutSuccess && isModalOpen && (
                    <div className="fixed p-4 top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                      <section className="bg-white p-8 rounded-lg shadow-lg">
                      <div className="p-8 text-center sm:p-12">
                        <p className="text-sm font-bold uppercase tracking-widest text-purple-500">
                          Your order is on the way 🎉
                        </p>
                        <h2 className="mt-6 text-3xl font-semibold">
                          Thanks for your purchase, we're getting it ready!
                        </h2>
                        <button
                          className="mt-8 inline-block uppercase w-20 rounded-full bg-purple-500 py-4 text-sm font-bold text-white shadow-md"
                          href=""
                          onClick={closeModal}
                        >
                          close
                        </button>
                        </div>
                      </section>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;






