import React from 'react';
import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; mbishu{year} | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
