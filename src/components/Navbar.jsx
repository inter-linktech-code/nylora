import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "2567000000000";

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          <img src={logo} alt="Nylora Safaris" />
        </Link>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

          <Link onClick={() => setMenuOpen(false)} to="/">
            Home
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/itineraries">
            Itineraries
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/destinations">
            Destinations
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/travel-guide">
            Travel Guide
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/about">
            About
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/contact">
            Contact
          </Link>

          {/* LUXURY PRIMARY CTA (IMPORTANT) */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello Nylora Safaris, I would like to plan a luxury safari.`}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Plan Safari
          </a>

        </nav>

      </div>
    </header>
  );
}