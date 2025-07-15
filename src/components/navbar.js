import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo Section */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img 
            src="/images/arsenal-fc-seeklogo.png" 
            alt="Arsenal FC Logo" 
            className="nav-logo-img"
          />
          <span className="nav-logo-text">Arsenal FC</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'nav-link-active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item nav-dropdown">
            <span className="nav-link nav-dropdown-toggle">
              Club
              <i className="nav-arrow">▼</i>
            </span>
            <ul className="nav-dropdown-menu">
              <li>
                <Link to="/about" className="nav-dropdown-link" onClick={closeMenu}>
                  About Arsenal
                </Link>
              </li>
              <li>
                <Link to="/history" className="nav-dropdown-link" onClick={closeMenu}>
                  History
                </Link>
              </li>
              <li>
                <Link to="/stadium" className="nav-dropdown-link" onClick={closeMenu}>
                  Emirates Stadium
                </Link>
              </li>
              <li>
                <Link to="/honours" className="nav-dropdown-link" onClick={closeMenu}>
                  Honours
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item nav-dropdown">
            <span className="nav-link nav-dropdown-toggle">
              Team
              <i className="nav-arrow">▼</i>
            </span>
            <ul className="nav-dropdown-menu">
              <li>
                <Link to="/team" className="nav-dropdown-link" onClick={closeMenu}>
                  First Team
                </Link>
              </li>
              <li>
                <Link to="/staff" className="nav-dropdown-link" onClick={closeMenu}>
                  Coaching Staff
                </Link>
              </li>
              <li>
                <Link to="/academy" className="nav-dropdown-link" onClick={closeMenu}>
                  Academy
                </Link>
              </li>
              <li>
                <Link to="/women" className="nav-dropdown-link" onClick={closeMenu}>
                  Women's Team
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link 
              to="/fixtures" 
              className={`nav-link ${location.pathname === '/fixtures' ? 'nav-link-active' : ''}`}
              onClick={closeMenu}
            >
              Fixtures
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/news" 
              className={`nav-link ${location.pathname === '/news' ? 'nav-link-active' : ''}`}
              onClick={closeMenu}
            >
              News
            </Link>
          </li>
          <li className="nav-item nav-dropdown">
            <span className="nav-link nav-dropdown-toggle">
              Fans
              <i className="nav-arrow">▼</i>
            </span>
            <ul className="nav-dropdown-menu">
              <li>
                <Link to="/tickets" className="nav-dropdown-link" onClick={closeMenu}>
                  Tickets
                </Link>
              </li>
              <li>
                <Link to="/membership" className="nav-dropdown-link" onClick={closeMenu}>
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/fanzone" className="nav-dropdown-link" onClick={closeMenu}>
                  Fan Zone
                </Link>
              </li>
              <li>
                <Link to="/shop" className="nav-dropdown-link" onClick={closeMenu}>
                  Official Shop
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'nav-link-active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Search and User Actions */}
        <div className="nav-actions">
          <button className="nav-search-btn">
            <i className="search-icon">🔍</i>
          </button>
          <Link to="/membership" className="nav-cta-btn">
            Join Arsenal
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`nav-toggle ${isMenuOpen ? 'nav-toggle-active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;