import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import back from '../assets/images/ecommerce-3640321_1920.jpg';
import '../styles/products.css';

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setFeaturedProducts(data.slice(0, 5));
    };
    fetchProducts();
  }, []);

  const handleSeeMore = (productID) => {
    navigate(`/product/${productID}`);
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className='container-fluid'>

      <div className='back-div'>
        <img src={back} alt='Background_Ecommerce' />
      </div>


      <div className='carousel-container'>
        <h2 className='section-title'>Featured Products</h2>
        <Slider {...carouselSettings}>
          {featuredProducts.map((product) => (
            <div key={product.id} className='carousel-item'>
              <img src={product.image} alt={product.title} />
              <h5 className='product-title'>{product.title}</h5>
            </div>
          ))}
        </Slider>
      </div>
      <div className='product-grid'>
        <h2 className='section-title'>All Products</h2>
        <div className='card-container'>
          {products.map((product) => (
            <div key={product.id} className='card-details'>
              <div className='main-card'>
                <img src={product.image} alt={product.title} />
                <div className='card-body'>
                  <h5 className='card-title'>{product.title}</h5>
                  <p className='card-price'>${product.price}</p>
                  <button
                    onClick={() => handleSeeMore(product.id)}
                    className='btn btn-primary'
                  >
                    See more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
