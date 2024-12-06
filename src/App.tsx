import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import ServicesPage from './components/services/ServicesPage';
import ProductsPage from './components/products/ProductsPage';
import AboutPage from './components/about/AboutPage';
import Header from './Header';
import Footer from './Footer';
// import NotFoundPage from './components/notfound/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      
      <div className="min-h-hea">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-processes" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
