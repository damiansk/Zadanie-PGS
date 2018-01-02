import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './navigation/Navigation';


const Header = () => (
  <header className="header">
    <nav className="nav-extended">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/about" className="brand-logo">
            <img className="brand-logo-img" src="logo.png" alt="logo" />
          </Link>
        </div>
        <div className="nav-content">
          <Navigation />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;