import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 text-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-2xl font-bold">Multifacet Software Solutions</h1>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav>
          <ul
            className={`flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/our-processes" className="hover:text-yellow-400">
                Our Processes
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-yellow-400">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
