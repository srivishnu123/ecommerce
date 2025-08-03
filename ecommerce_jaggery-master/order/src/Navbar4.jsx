import React from 'react';
import './Navbar4.css';

const Navbar4 = () => {
  return (
    <nav className="navbar4">
      <div className="nav-logo">Jaggery Store</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/orderhere">Order Here</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/login">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar4;
