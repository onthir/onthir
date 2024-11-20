import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
  <div class="footer-container">
    <div class="footer-vision">
      <p>
        "We envision a world where creativity knows no bounds, where every
        individual has the tools, support, and inspiration they need to share
        their unique voice and leave a lasting impact through their art."
      </p>
    </div>

    <div class="footer-columns">
      <div class="footer-column">
        <h3>Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/posts">Blog</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Follow Us</h3>
        <ul class="social-links">
          <li><a href="https://www.facebook.com/onthir13/" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="https://x.com/Bbk1Jny" target="_blank" rel="noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/__onthir__/" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/bhandarib/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Stay Connected</h3>
        <p>
          Subscribe to our newsletter to stay updated on our latest news and
          events.
        </p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2024 Onthir. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
