import React from 'react';

function Cart({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) {
  // Calculating the total price of items in the cart
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='h-screen bg-gray-100 w-full container mx-auto p-5 m-10 shadow-md'>
      <h1 className='text-2xl font-semibold mb-4 text-purple-600'>{cart.length > 0 ? <h1>Cart({cart.length})</h1> : <h1>Cart</h1>}</h1>
      {cart.length === 0 && <p>Your cart is empty <br /> <button className='mt-20'>Start Shopping</button></p>}
      <ul className='divide-y-2'>
        {cart.map((item) => (
          <div key={item.id} className="p-5 grid grid-cols-2">
            <div className='grid grid-cols-2 w-1/2 lg:w-1/4'>
            <img src={item.image} alt="" className='h-20 object-contain' />
            <span className='mt-10'>{item.name}</span>
            </div>
            <div>
            <div>Price: ${item.price}</div>
            <div className="w-24 grid grid-cols-3 p-2">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span className=''>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className='mr-96 -ml-32 mt-5'>Remove</button>
          </div>
          
        ))}
      </ul>
      {cart.length > 0 && (
        <div className="mt-4">
          <div className="cart-total">
            <span>Total: ${total.toFixed(2)}</span>
          </div>
          <button onClick={() => alert('Checkout functionality goes here')}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;







