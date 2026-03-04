import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>MyBrand</h2>
          <p>Modern & Professional React Website</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: info@mybrand.com</p>
          <p>Phone: +998 90 123 45 67</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
