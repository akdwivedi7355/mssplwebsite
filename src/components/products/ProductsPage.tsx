import React from 'react';

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Our Products</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <li className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-bold">Vehicle Tracking System</h3>
          <p>Uses GPS to monitor location, status, and real-time insights for efficiency and security.</p>
        </li>
        <li className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-bold">E-Library</h3>
          <p>Borrow e-books, audiobooks, and magazines from your e-library.</p>
        </li>
        <li className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-bold">Smart Class</h3>
          <p>Transform classrooms into collaborative hubs with interactive boards.</p>
        </li>
        {/* Add more products here */}
      </ul>
    </div>
  );
};

export default ProductsPage;
