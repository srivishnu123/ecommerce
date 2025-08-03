import React from 'react';
import './Navbar3.css';

const Navbar3 = () => {
  return (
    <nav className="navbar3">
      <div className="nav-logo">Jaggery Store</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/ourproduct">Our Products</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/login">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar3;
