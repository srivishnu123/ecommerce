import React from 'react';
import './Navbar2.css';

const Navbar2 = () => {
  return (
    <nav className="navbar2">
      <div className="nav-logo">PureJaggery</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/ourproduct">Our Products</a></li>
        <li><a href="orderhere">Order Here</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/login">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar2;
