import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Product({ addToCart}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-100 w-full container mx-auto py-4 shadow-md">
      <h1 className="text-2xl font-semibold mb-4 text-purple-600">Products</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-gray-100 grid grid-cols-2 md:grid-cols-3 gap-4 m-5 p-5 md:p-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow-md rounded-lg border-2 border-purple-500"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-contain mb-2"
              />
              <h2 className="text-lg font-semibold md:font-bold md:text-xl mb-2 text-purple-500">
                {product.name}
              </h2>
              <p className="text-gray-700 text-sm md:text-lg font-semibold mb-2">
                Price: <span className='text-sm font-thin md:text-lg'>${product.price}</span>
              </p>

              <p className="text-gray-700 text-sm md:text-lg font-semibold mb-2">
                In Stock: <span className='text-sm font-thin md:text-lg'>{product.stock} {product.name}s</span>
              </p>
              <button
                className='text-white font-bold border border-purple-500 hover:bg-white p-1 rounded shadow w-full bg-purple-500 hover:text-purple-500'
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Product;