import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from 'react';
import "../../styles/footer.css";


const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero">
        <h1>Welcome to Our Application!</h1>
        <p>Your journey to better management starts here.</p>
        <a href="/register" className="cta-button">Get Started</a>
      </header>
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Task Scheduling</h3>
            <p> Visualize and manage tasks on an interactive calendar.</p>
          </div>
          <div className="feature-item">
            <h3>User-Friendly Interface</h3>
            <p>Responsive and easy-to-use components for efficient workflows.</p>
          </div>
          <div className="feature-item">
            <h3>Interactive UI</h3>
            <p>Features such as modals and animations enhance user experience.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div className="socialmedia">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;