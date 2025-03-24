import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleSeeProducts = () => {
    navigate('/product');
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our E-Commerce Store</h1>
          <p>Find the best deals and top-quality products at unbeatable prices.</p>
          <button className="btn btn-primary" onClick={handleSeeProducts}>
            Explore Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
