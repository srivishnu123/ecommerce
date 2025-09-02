import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>PureJaggery</strong> – your trusted source for fresh, organic jaggery straight from the farm.
          We are committed to delivering traditional, chemical-free sweetness to your doorstep with love and care.
        </p>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>100% Natural and OrganicJaggery</li>
            <li>Sourced Directly from Local Farmers</li>
            <li>Hygienic Packaging & Timely Delivery</li>
            <li>Perfect for Health-Conscious Families</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to revive the traditional taste of jaggery and support local farmers by creating a
            platform that connects them directly with customers across the country.
          </p>
        </div>

        <div className="about-section">
          <h2>Meet the Team</h2>
          <p>
            We are a passionate team of students and developers who care about health, tradition, and sustainability.
            This platform is part of our vision to make organic living accessible and affordable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
