import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiInstagram,
  FiFacebook,
  FiMail,
  FiPhone,
} from "react-icons/fi";

import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="nylora-footer">

      {/* =====================================================
          FOOTER INTRO
      ===================================================== */}

      <div className="nylora-footer-main">

        <div className="footer-container">

          <div className="footer-intro">

            <div className="footer-brand">

              <Link
                to="/"
                className="footer-logo"
                aria-label="Nylora Safaris Home"
              >
                <span className="footer-logo-mark">
                  N
                </span>

                <span className="footer-logo-text">
                  <strong>NYLORA</strong>
                  <small>SAFARIS</small>
                </span>
              </Link>

            </div>

            <p className="footer-intro-text">
              Thoughtfully crafted journeys through Uganda and Rwanda,
              connecting travellers with extraordinary wildlife,
              remarkable landscapes and places that stay with you long
              after you return home.
            </p>

            <a
              href="https://wa.me/256786349505"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-plan-button"
            >
              <span>Plan Your Safari</span>
              <FiArrowUpRight />
            </a>

          </div>


          {/* =====================================================
              EXPLORE
          ===================================================== */}

          <div className="footer-column">

            <span className="footer-column-label">
              EXPLORE
            </span>

            <Link to="/safaris">
              Safaris
            </Link>

            <Link to="/destinations">
              Destinations
            </Link>

            <Link to="/destinations/uganda">
              Uganda
            </Link>

            <Link to="/destinations/rwanda">
              Rwanda
            </Link>

            <Link to="/gorilla-trekking">
              Gorilla & Golden Monkey Trekking
            </Link>

          </div>


          {/* =====================================================
              JOURNEY
          ===================================================== */}

          <div className="footer-column">

            <span className="footer-column-label">
              YOUR JOURNEY
            </span>

            <Link to="/about">
              About Nylora
            </Link>

            <Link to="/booking">
              Plan Your Safari
            </Link>

            <Link to="/contact">
              Contact Us
            </Link>

            <a
              href="https://wa.me/256786349505"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>

          </div>


          {/* =====================================================
              CONTACT
          ===================================================== */}

          <div className="footer-column footer-contact">

            <span className="footer-column-label">
              SPEAK WITH US
            </span>

            <p>
              Tell us where you would like to go.
              We will help shape the journey around you.
            </p>

            <a
              href="tel:+256786349505"
              className="footer-contact-link"
            >
              <FiPhone />

              <span>
                +256 786 349505
              </span>
            </a>

            <a
              href="mailto:info@nylora.com"
              className="footer-contact-link"
            >
              <FiMail />

              <span>
                info@nylora.com
              </span>
            </a>

            <span className="footer-location">
              Uganda · Rwanda · East Africa
            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          FOOTER STATEMENT
      ===================================================== */}

      <div className="footer-statement">

        <div className="footer-container">

          <div className="footer-statement-line" />

          <div className="footer-statement-content">

            <span>
              THE WILD HEART OF EAST AFRICA
            </span>

            <p>
              Uganda & Rwanda
            </p>

          </div>

          <div className="footer-statement-line" />

        </div>

      </div>


      {/* =====================================================
          FOOTER BOTTOM
      ===================================================== */}

      <div className="footer-bottom">

        <div className="footer-container">

          <div className="footer-bottom-inner">

            {/* COPYRIGHT */}

            <div className="footer-copyright">

              <span>
                © {year} Nylora Safaris.
              </span>

              <span>
                All rights reserved.
              </span>

            </div>


            {/* SOCIAL */}

            <div className="footer-socials">

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nylora Safaris on Instagram"
              >
                <FiInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nylora Safaris on Facebook"
              >
                <FiFacebook />
              </a>

            </div>


            {/* POWERED BY */}

            <div className="footer-powered">

              <span>
                Powered by
              </span>

              <a
                href="https://inter-linktech.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                INTER-LINK TECH
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}