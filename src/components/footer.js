import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img 
              src="/arsenal-fc-seeklogo.jpeg"
              alt="Arsenal FC Logo" 
              className="footer-logo-img"
            />
            <span className="footer-logo-text">Arsenal FC</span>
          </div>
          <p className="footer-description">
            Arsenal Football Club - North London's Premier Football Club since 1886
          </p>
          <div className="footer-social">
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">📱</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">📺</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Club</h3>
          <ul>
            <li><Link to="/about">About Arsenal</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/stadium">Emirates Stadium</Link></li>
            <li><Link to="/honours">Honours</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Team</h3>
          <ul>
            <li><Link to="/team">First Team</Link></li>
            <li><Link to="/staff">Coaching Staff</Link></li>
            <li><Link to="/academy">Academy</Link></li>
            <li><Link to="/women">Women's Team</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Fans</h3>
          <ul>
            <li><Link to="/tickets">Tickets</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/shop">Official Shop</Link></li>
            <li><Link to="/fanzone">Fan Zone</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Arsenal Football Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;