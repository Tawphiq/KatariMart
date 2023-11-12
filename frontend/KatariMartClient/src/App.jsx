import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Orders from './components/Orders';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // Fetch order data here, based on your API endpoint
    axios
      .get('http://localhost:8000/api/orders/') // Replace {orderId} with the actual order ID
      .then((response) => {
        setOrderData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching order data:', error);
      });
  }, []);


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
    <div className='font-mono'>
    <Router>
      <Navbar cartCount={cartCount} />
        <Routes>
          <Route path="*"
           element={<Home cart = {cart} 
           setCart = {setCart} 
           addToCart={addToCart} 
           cartCount = {cartCount}/>}
            />
          <Route path="/cart" 
          element={<Cart cart={cart}
          setCart={setCart} 
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity} 
          decreaseQuantity = {decreaseQuantity}
          cartCount={cartCount} setCartCount={setCartCount} />} 
           />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/orders" element={<Orders orderData={orderData} />} />
        </Routes>
        <Footer />
      </Router>

      
    </div>
    );
}

export default App;



