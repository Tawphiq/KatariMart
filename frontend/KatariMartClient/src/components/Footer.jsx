// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Katari Watch</h2>
          <p className="mt-2">Falcon Close 33</p>
          <p>Tema, Greater Accra</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Customer Service</h2>
          <ul className="mt-2">
            <li className="mb-2">
              <a href="#">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="#">Shipping Information</a>
            </li>
            <li>
              <a href="#">Returns & Exchanges</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-red-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;