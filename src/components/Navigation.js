import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand fw-bold">
          <span className="">RajWada</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-item">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/product" className="nav-link-item">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/category" className="nav-link-item">
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-link-item">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="nav-link-item">
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="nav-link-item">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
