import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/desc.css';

const Description = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const backPage = () => {
    navigate(-1);
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      cart[productIndex].quantity += 1;
      cart[productIndex].totalPrice = cart[productIndex].quantity * cart[productIndex].price;
    } else {
      cart.push({
        ...product,
        quantity: 1,
        totalPrice: product.price,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    setMessage('Product added to cart successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  if (loading) {
    return <div className="text-center mt-5 loading">Loading product details...</div>;
  }

  if (!product) {
    return <div className="text-center mt-5 not-found">Product not found!</div>;
  }

  const email = localStorage.getItem('email')
  const viewCart = () => {
    if (email) {
      navigate('/cart')
    }
    else {
      navigate('/login')
    }
  }


  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product Description</h1>
      <div className="product-container">

        {message && <div className="alert alert-success text-center">{message}</div>}

        <button className="btn btn-warning mb-3" onClick={backPage}>
          Back to Previous Page
        </button>

        <div className="row align-items-center">

          <div className="col-lg-6 text-center">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3 className="mt-3 product-price">${product.price}</h3>
          </div>


          <div className="col-lg-6">
            <h2>{product.title}</h2>
            <p className="text-muted">{product.description}</p>

            <div className="product-buttons mt-3">
              <button className="btn btn-primary me-2" onClick={addToCart}>
                Add to Cart
              </button>
              <button className="btn btn-secondary" onClick={viewCart}>
                View Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
