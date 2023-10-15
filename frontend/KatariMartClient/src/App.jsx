import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);


  const addToCart = (product) => {
    console.log('Current Cart:', cart);


    const updatedCart = [...cart, product];

    console.log('Updated Cart:', updatedCart);

    setCart(updatedCart);
    setCartCount(cartCount + 1);
  };
  
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    setCartCount(cartCount - 1);
  };


  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
    setCartCount(cartCount + 1);
    };


  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
    setCartCount(cartCount - 1);
    };


  return (
    <div>
    <Router>
      <Navbar cartCount={cartCount}/>
        <Routes>
          <Route path="*"
           element={<Home cart = {cart} 
           setCart = {setCart} 
           addToCart={addToCart} 
           cartCount = {cartCount}/>} 
            />
          <Route path="/cart" 
          element={<Cart cart={cart} 
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity} 
          decreaseQuantity = {decreaseQuantity} 
          />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    );
}

export default App;



