{/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/orders/')
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-purple-500 text-white p-4 rounded hover:bg-purple-600">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-4 shadow-md rounded-lg mb-4"
            >
              <h2 className="text-lg font-semibold mb-2">Order ID: {order.id}</h2>
              <p className="text-gray-700 text-sm font-semibold mb-2">
                Order Date: {order.order_date}
              </p>
              <p className="text-gray-700 text-sm font-semibold mb-2">
                Total Amount: ${order.total_amount}
              </p>
            
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;*/}


import React from 'react';

function Orders({ orderData }) {
  if (!orderData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Order Details</h2>
      <div>
        <h3>Ordered Products</h3>
        <ul>
          {orderData.products.map((product) => (
            <li key={product.id}>
              {product.name} x {product.quantity} - ${product.price}
            </li>
          ))}
        </ul>
        <p>Total Amount: ${orderData.total_amount}</p>
      </div>
      <div>
        <h3>Order Date</h3>
        <p>{orderData.order_date}</p>
      </div>
    </div>
  );
}

export default Orders;


