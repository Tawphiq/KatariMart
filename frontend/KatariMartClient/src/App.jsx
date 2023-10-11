import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const removeFromCart = (productId) => {
    // Filter out the product with the specified ID from the cart
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };


  const increaseQuantity = (itemId) => {
    // Implement your increase quantity logic
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };


  const decreaseQuantity = (itemId) => {
    // Implement your decrease quantity logic
    const updatedCart = cart.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };


  return (
    <div>
    
      <Router>
      <Navbar />
        <Routes>
          <Route path="*" element={<Home cart = {cart} setCart = {setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity = {decreaseQuantity} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;



{/*import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Benifits from './components/Benifits';
import Footer from './components/Footer';
import Cart from './components/Cart';

<Router>
      <Routes>
        <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
</Router>

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]); // Initialize your products here

  const addToCart = (product) => {
    // Create a copy of the current cart and add the selected product to it
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    // Filter out the product with the specified ID from the cart
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/benifits" element={<Benifits />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={<Products products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;*/}

