import React, { useState } from 'react';
import '../styles/register.css';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [username, setUserName] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [userpassword, setUserPassword] = useState('');
 
  const navigate = useNavigate();

  const userData = async (newUser) => {
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const data = await response.json();
      console.log('User registered successfully:', data);
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error.message);
      alert('Registration failed. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: username,
      email: useremail,
      password: userpassword,
    };
    // Send data to the backend
    userData(newUser);

    // Reset form inputs
    setUserName('');
    setUserEmail('');
    setUserPassword('');
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === 'name') setUserName(value);
    if (name === 'email') setUserEmail(value);
    if (name === 'password') setUserPassword(value);
  };

  return (
    <div className="register-container d-flex justify-content-center align-items-center">
      <div className="register-box p-4">
        <h1 className="text-center mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={username}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={useremail}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={userpassword}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
            <div className='text-center mt-2'>
          <a className='' href="/login">Already have an account?</a>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
