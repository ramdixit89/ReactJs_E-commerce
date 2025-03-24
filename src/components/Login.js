import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };
    try {
      setIsLoading(true); 
      setErrorMessage(''); 
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      localStorage.setItem('email',email);
      alert('Login successful!');
      navigate('/product');
      setEmail('');
      setPassword('');

    } catch (error) {
      console.error('Error during login:', error.message);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false); 
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="login-box p-4">
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={handleChange}
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter your E-mail"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={handleChange}
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter your Password"
              required
            />
          </div>
          {errorMessage && (
            <div className="alert alert-danger text-center mt-2">{errorMessage}</div>
          )}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary w-100 mt-3"
              disabled={isLoading}
            >
              {isLoading ? 'Logging In...' : 'Log In'}
            </button>
          </div>
          <div className='text-center mt-2'>
          <a className='' href="/register">Don't have an account?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
