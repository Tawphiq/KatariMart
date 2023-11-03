import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Account() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const closeDropdown = () => {
      setIsOpen(false);
    };

  return (
    <div className="relative group">
      <button
        className="group absolute ml-9 -top-8 w-10 h-10 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400 rounded-full"
        onMouseEnter={toggleDropdown}
        onClick={toggleDropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 m-2 text-gray-600 group-hover:text-gray-800"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.293 5.293a1 1 0 011.414 0L10 10.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 py-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg"
          onMouseLeave={closeDropdown}
        >
          <Link
            to="/signin"
            className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
          >
            Register
          </Link>
          <Link
            to="/orders"
            className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
          >
            Orders
          </Link>
        </div>
      )}
    </div>
  );
}

export default Account;
