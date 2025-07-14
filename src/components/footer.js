import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Arsenal FC</h3>
          <p>The official Arsenal Football Club website.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/news">News</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@arsenal.com</p>
          <p>Phone: +44 20 7619 5003</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Arsenal FC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;