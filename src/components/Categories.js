import React from 'react';
import { Link } from 'react-router-dom';
import electronics from '../assets/images/electronics.jpg';
import mensClothing from '../assets/images/mensClothing.jpg';
import womensClothing from '../assets/images/womensClothing.jpg';
import jewelery from '../assets/images/jewellery.jpg';
import '../styles/category.css';

const Categories = () => {
  return (
    <div className="category-container">
      <div className="category-row">
        <div className="category-column">
          <Link to="/electronics" className="category-card">
            <img src={electronics} alt="electronics_image" className="category-image" />
            <h5 className="category-title">Electronics</h5>
          </Link>
        </div>


        <div className="category-column">
          <Link to="/jewelery" className="category-card">
            <img src={jewelery} alt="jewelery_image" className="category-image" />
            <h5 className="category-title">Jewelery</h5>
          </Link>
        </div>

   
        <div className="category-column">
          <Link to="/mensClothing" className="category-card">
            <img src={mensClothing} alt="mens_clothing_image" className="category-image" />
            <h5 className="category-title">Men's Clothing</h5>
          </Link>
        </div>

        <div className="category-column">
          <Link to="/womensClothing" className="category-card">
            <img src={womensClothing} alt="womens_clothing_image" className="category-image" />
            <h5 className="category-title">Women's Clothing</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
