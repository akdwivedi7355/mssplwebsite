import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Services</h2>
      <ul className="space-y-4">
        <li className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Minimal Design</h3>
          <p>
            Successfully completed projects like Nursing Home Software and Hotel Management Software.
          </p>
        </li>
        <li className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Love Our Clients</h3>
          <p>
            We ensure our clients feel good about technology with solutions that meet their needs.
          </p>
        </li>
        <li className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Powerful & Flexible</h3>
          <p>
            Top-of-the-line website development to ensure the best return on investment.
          </p>
        </li>
        <li className="p-4 bg-white shadow rounded">
          <h3 className="text-xl font-semibold">Premium Support</h3>
          <p>
            Offering professional website maintenance and affordable support.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ServicesPage;
