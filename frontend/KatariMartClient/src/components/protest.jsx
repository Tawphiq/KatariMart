import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Protest() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define the URL of your Django API endpoint
    const apiUrl = 'http://localhost:8000/api/products/'; // Replace with your actual API URL

    // Make a GET request to fetch product data from Django
    axios.get(apiUrl)
      .then((response) => {
        // Update the state with the fetched data
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <img src={product.image} alt={product.name} />
            <div>{product.stock}</div>
            <div>{product.category}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Protest;
