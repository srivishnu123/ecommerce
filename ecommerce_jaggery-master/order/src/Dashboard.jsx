import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Navbar from './Navbar';

const Dashboard = () => {
  const [showBenefits, setShowBenefits] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBenefits(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <header className="hero-section">
        <h1>Welcome to Jaggery Stores</h1>
      </header>

      {/* Benefits Section */}
      <section className={`benefits-section ${showBenefits ? 'show' : ''}`}>
        <h2>Benefits of Jaggery</h2>
        <ul>
          <li>🌿 Detoxifies the liver and boosts immunity</li>
          <li>💪 Improves digestion and relieves constipation</li>
          <li>🔥 Natural body warmer, perfect for winter</li>
          <li>🩸 Rich in iron — helps prevent anemia</li>
          <li>🧠 Provides long-lasting energy without a crash</li>
        </ul>
      </section>
    </>
  );
};

export default Dashboard;
