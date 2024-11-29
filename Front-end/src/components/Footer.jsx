import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section company-info">
        <h4>About Us</h4>
        <p>
          Discover the beauty of Pakistan with our exclusive travel packages and
          expert guides. Whether you seek adventure, cultural experiences, or a
          tranquil getaway, we are here to make your journey unforgettable.
          Explore the rich heritage, scenic landscapes, and vibrant cities with
          us!
        </p>
      </div>
      <div className="footer-section contact-info">
        <h4>Contact Us</h4>
        <p>Address: 123 Pakistan Street, Karachi, Pakistan</p>
        <p>Phone: +92 123 456 7890</p>
        <p>Email: info@pakistantravel.com</p>
      </div>
      <div className="footer-section quick-links">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/faqs">FAQs</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-section social-share">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2023 Pakistan Travel. All rights reserved. Designed and developed by{" "}
          <a href="https://suavesolutions.com">Suave Solutions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;