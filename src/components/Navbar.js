import React from 'react'
import logo from '../images/logo.svg'
import Social from './Social';
import PageLinks from './PageLinks';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks classCss="nav-links" item="nav-link" />
        <Social parentClass="nav-icons" subClass="nav-icon"/>
      </div>
    </nav>
  );
}

export default Navbar