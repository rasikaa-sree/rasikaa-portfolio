import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer-bg">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">rasikaa<span>.</span></Link>
          <p>Crafting digital experiences that look beautiful and work flawlessly. Based in Salem, Tamil Nadu.</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/rasikaasree/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/#about">Home</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#resume">Resume</a></li>
            <li><a href="/#work">Projects</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-nav">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:rasikaasantharaman@gmail.com">rasikaasantharaman@gmail.com</a></li>
            <li><a href="tel:+918610748818">+91 86107 48818</a></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>Copyright © 2026 Rasikaa Sree S. All Rights Reserved.</p>
        <p>
          <a href="/#contact">Terms & Conditions</a> | <a href="/#contact">Privacy Policy</a>
        </p>
      </div>
    </>
  );
}
