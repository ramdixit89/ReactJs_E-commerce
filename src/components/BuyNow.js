import React, { useState } from 'react';

const BuyNow = () => {
const [name, setName] = useState('')
const [address, setAddress] = useState('')
const [phone, setPhoneNumber] = useState('')
const [paymentMethod , setPaymentMethod] = useState('')
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if(name === 'name') setName(value);
    if(name === 'address') setAddress(value);
    if(name === 'phone') setPhoneNumber(value);
    if(name === 'paymentMethod') setPaymentMethod(value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const newOrderPlaced = {
          name : name,
          address : address,
          phoneNumber : phone,
          paymentMethod : paymentMethod
        }
        const response = await fetch('http://localhost:5000/placeorder',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newOrderPlaced)
        });
        const data  =  await response.json();
        console.log("order placed...",data);
    } catch (error) {
        console.log(error);
    }
   
    console.log('Order placed:');
    alert('Your order has been placed successfully!');
  };

  return (
    <div className='mt-5' style={styles.container}>
      <h2 style={styles.header}>Place Your Order</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="address" style={styles.label}>Address</label>
          <textarea
            id="address"
            name="address"
            value={address}
            onChange={handleInputChange}
            style={styles.textarea}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="phone" style={styles.label}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Payment Method</label>
          <div>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="paymentMethod"
                value="COD"
                checked={paymentMethod === 'COD'}
                onChange={handleInputChange}
              />
              Cash on Delivery (COD)
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="paymentMethod"
                value="UPI"
                checked={paymentMethod === 'UPI'}
                onChange={handleInputChange}
              />
              UPI
            </label>
          </div>
        </div>

        <button type="submit" style={styles.button}>Place Order</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    resize: 'vertical',
  },
  radioLabel: {
    display: 'block',
    marginBottom: '5px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default BuyNow;
