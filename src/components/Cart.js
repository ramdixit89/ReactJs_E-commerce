import React, { useEffect, useState } from 'react';
import '../styles/cart.css';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const navigate = useNavigate();
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItem(cart);
  }, []);

  localStorage.getItem('email');

  const logOut = () => {
    localStorage.removeItem('email');
    console.log('user remved...');
    navigate('/product');
  }
  const buyNow = () => {
    navigate('/placeorder');
  }

  const handleRemove = (id) => {
    const cart = cartItem.filter((item) => item.id !== id);
    setCartItem(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className="cart-container">
      <div className='d-flex align-items-center justify-content-between'>
        <h1 className="text-center">Items in the Cart</h1>
        <div className='d-flex gap-4'>
          <button onClick={logOut} className='btn-sm btn-danger'>Logout</button>
        </div>
      </div>
      {cartItem.length === 0 ? (
        <h1 className="text-center mt-5">No items in the cart!</h1>
      ) : (
        <table className="table text-center">
          <thead>
            <tr>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((item) => (
              <tr key={item.id}>
                <td>
                  <img width={100} src={item.image} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>${item.totalPrice}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={buyNow} className="btn-small btn-warning">Buy Now</button>
                </td>
                <td>
                  <button
                    className="btn-small btn-danger"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
