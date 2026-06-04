import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLink = (href, label) =>
    isHome ? (
      <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
    ) : (
      <Link to={`/${href}`} onClick={() => setMenuOpen(false)}>{label}</Link>
    );

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="nav-logo">rasikaa<span>.</span></Link>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>{navLink("#about", "About")}</li>
        <li>{navLink("#services", "Services")}</li>
        <li>{navLink("#work", "Work")}</li>
        <li>{navLink("#blog", "Blog")}</li>
        <li>{navLink("#contact", "Contact")}</li>
      </ul>

      <button className="nav-cta" onClick={() => {
        if (isHome) document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        else window.location.href = "/#contact";
      }}>
        Hire me
      </button>

      <button className="menu-toggle" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
