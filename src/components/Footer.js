import React from 'react'
import Social from './Social';
import PageLinks from './PageLinks';

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks classCss = "footer-links" item="footer-link"/>
      <Social parentClass="footer-icons" subClass="footer-icon"/>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer