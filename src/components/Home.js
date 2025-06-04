import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Import images
import frontPicture from '../assets/shoes/front-picture.jpg';
import nike5 from '../assets/shoes/nike5.png';
import puma3 from '../assets/shoes/puma3.jpeg';
import ad7 from '../assets/shoes/ad7.jpeg';
import newNike from '../assets/shoes/new-nike.jpg';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${frontPicture})` }}>
        <div className="hero-content">
          <h1>TURN OFF SEASON ON</h1>
          <p>Get set for summer with gear that can take the heat.</p>
          <div className="hero-buttons"></div>
        </div>
      </div>

      {/* ASAP Rocky x Puma Collection */}
      <div className="collection-section">
        <div className="collection-content">
          <h3>ASAP ROCKY X PUMA</h3>
          <h2>BRAND NEW CAPSULE COLLECTION</h2>
          <Link to="/register" className="collection-button">SHOP NOW</Link>
        </div>
      </div>

      {/* Trending in Style Section */}
      <div className="trending-section">
        <h2>TRENDING IN STYLE</h2>
        <div className="trending-grid">
          <div className="trending-item">
            <img src={nike5} alt="Speed cat" />
            <h4>Speed cat</h4>
            <h3>SPEED CAT</h3>
            <Link to="/register" className="trending-link">SHOP NOW</Link>
          </div>
          <div className="trending-item">
            <img src={puma3} alt="Suede-XL" />
            <h4>Suede-XL</h4>
            <h3>SUEDE-XL</h3>
            <Link to="/register" className="trending-link">SHOP NOW</Link>
          </div>
          <div className="trending-item">
            <img src={ad7} alt="East Rider" />
            <h4>East Rider</h4>
            <h3>EAST RIDER</h3>
            <Link to="/register" className="trending-link">SHOP NOW</Link>
          </div>
          <div className="trending-item">
            <img src={newNike} alt="Palermo" />
            <h4>Palermo</h4>
            <h3>PALERMO</h3>
            <Link to="/register" className="trending-link">SHOP NOW</Link>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>READY TO GET STARTED?</h2>
        <p>Join thousands of happy customers and find your perfect pair today.</p>
        <div className="auth-buttons">
          <Link to="/register" className="auth-button">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
