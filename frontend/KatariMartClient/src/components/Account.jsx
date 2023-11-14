
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Account() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative group" ref={dropdownRef}>
      <div
        className="group flex w-20 h-10"
        onClick={toggleDropdown}
      >
        <p>Account</p>
        {!isOpen ? (
          <p className='-mt-4 -ml-4'>
            <svg width="64px" height="64px" viewBox="-18.72 -18.72 61.44 61.44" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0000" stroke-width="0.00024000000000000003" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"> 
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"></path> </g></svg>
          </p>
        ) : (
          <p className='-mt-4 -ml-4'>
            <svg width="64px" height="64px" viewBox="-18.72 -18.72 61.44 61.44" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0000" stroke-width="0.00024000000000000003" transform="rotate(0)matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"> 
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"></path> </g></svg>
          </p>
        )}
      </div>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 py-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg"
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

