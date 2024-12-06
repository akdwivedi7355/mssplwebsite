import React from 'react';
import { Link } from 'react-router-dom';


const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen flex flex-col items-center justify-center">
      
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Welcome to MSSPL IT Company</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
        We are committed to delivering top-notch IT solutions tailored to meet your business needs. Explore our services, products, and achievements.
      </p>
      <div className="space-x-4">
        <Link to="/our-processes" className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
          Our Services
        </Link>
        <Link to="/products" className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600">
          Our Products
        </Link>
        <Link to="/about" className="px-4 py-2 bg-purple-500 text-white rounded shadow hover:bg-purple-600">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
