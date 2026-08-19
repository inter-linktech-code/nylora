import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiChevronDown,
} from "react-icons/fi";

import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);

  /* =====================================================
     SCROLL EFFECT
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  ===================================================== */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =====================================================
     CLOSE MENU
  ===================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
    setDestinationsOpen(false);
  };

  /* =====================================================
     DESTINATION TOGGLE
  ===================================================== */

  const toggleDestinations = () => {
    setDestinationsOpen((prev) => !prev);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN NAVBAR
      ===================================================== */}

      <header
        className={`nylora-navbar ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="nylora-navbar-inner">

          {/* =================================================
              BRAND
          ================================================= */}

          <Link
            to="/"
            className="nylora-brand"
            onClick={closeMenu}
            aria-label="Nylora Safaris Home"
          >
            <span className="nylora-brand-mark">
              N
            </span>

            <span className="nylora-brand-text">
              <strong>NYLORA</strong>
              <small>SAFARIS</small>
            </span>
          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="nylora-desktop-nav"
            aria-label="Main navigation"
          >

            {/* HOME */}

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nylora-nav-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              Home
            </NavLink>


            {/* ABOUT */}

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nylora-nav-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              About
            </NavLink>


            {/* =================================================
                DESTINATIONS DROPDOWN
            ================================================= */}

            <div
              className="nylora-nav-dropdown"
              onMouseEnter={() =>
                setDestinationsOpen(true)
              }
              onMouseLeave={() =>
                setDestinationsOpen(false)
              }
            >

              <div className="nylora-destination-trigger">

                {/* DESTINATIONS IS NOW CLICKABLE */}

                <NavLink
                  to="/destinations"
                  className={({ isActive }) =>
                    `nylora-nav-link nylora-destination-link ${
                      isActive ||
                      window.location.pathname.startsWith(
                        "/destinations/"
                      )
                        ? "active"
                        : ""
                    }`
                  }
                >
                  Destinations
                </NavLink>


                {/* CHEVRON */}

                <button
                  type="button"
                  className="nylora-destination-arrow"
                  onClick={toggleDestinations}
                  aria-label="Open destinations menu"
                  aria-expanded={destinationsOpen}
                >
                  <FiChevronDown
                    className={
                      destinationsOpen
                        ? "rotate"
                        : ""
                    }
                  />
                </button>

              </div>


              {/* =================================================
                  DESKTOP DROPDOWN
              ================================================= */}

              <div
                className={`nylora-dropdown-menu ${
                  destinationsOpen ? "show" : ""
                }`}
              >

                <div className="nylora-dropdown-heading">

                  <span>
                    EXPLORE EAST AFRICA
                  </span>

                  <p>
                    Exceptional journeys through
                    Uganda & Rwanda.
                  </p>

                </div>


                {/* UGANDA */}

                <Link
                  to="/destinations/uganda"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>Uganda</strong>

                    <small>
                      Gorillas · Wildlife · Wilderness
                    </small>
                  </span>

                  <FiArrowUpRight />
                </Link>


                {/* RWANDA */}

                <Link
                  to="/destinations/rwanda"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>Rwanda</strong>

                    <small>
                      Gorillas · Volcanoes · Luxury
                    </small>
                  </span>

                  <FiArrowUpRight />
                </Link>


                {/* ALL DESTINATIONS */}

                <Link
                  to="/destinations"
                  onClick={closeMenu}
                  className="dropdown-view-all"
                >
                  View all destinations

                  <FiArrowUpRight />
                </Link>

              </div>

            </div>


            {/* SAFARIS */}

            <NavLink
              to="/safaris"
              className={({ isActive }) =>
                `nylora-nav-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              Safaris
            </NavLink>


            {/* GORILLA TREKKING */}

            <NavLink
              to="/gorilla-trekking"
              className={({ isActive }) =>
                `nylora-nav-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              Gorilla Trekking
            </NavLink>


            {/* CONTACT */}

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nylora-nav-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              Contact
            </NavLink>

          </nav>


          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <div className="nylora-navbar-actions">

            <a
              href="https://wa.me/256786349505"
              target="_blank"
              rel="noopener noreferrer"
              className="nylora-enquire-btn"
            >
              <span>
                Plan Your Safari
              </span>

              <FiArrowUpRight />
            </a>

          </div>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            className="nylora-mobile-toggle"
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <FiX />
            ) : (
              <FiMenu />
            )}
          </button>

        </div>
      </header>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`nylora-mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        <div className="nylora-mobile-menu-inner">

          {/* =================================================
              MOBILE INTRO
          ================================================= */}

          <div className="nylora-mobile-intro">

            <span>
              NYLORA SAFARIS
            </span>

            <p>
              Bespoke journeys through the wild
              heart of Uganda and Rwanda.
            </p>

          </div>


          {/* =================================================
              MOBILE NAVIGATION
          ================================================= */}

          <nav className="nylora-mobile-nav">

            {/* HOME */}

            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <span>01</span>

              <strong>
                Home
              </strong>
            </NavLink>


            {/* ABOUT */}

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <span>02</span>

              <strong>
                About
              </strong>
            </NavLink>


            {/* =================================================
                MOBILE DESTINATIONS
            ================================================= */}

            <div
              className={`nylora-mobile-destinations ${
                destinationsOpen
                  ? "open"
                  : ""
              }`}
            >

              {/* MAIN DESTINATIONS ROW */}

              <div className="nylora-mobile-destination-row">

                {/* DESTINATIONS LINK */}

                <NavLink
                  to="/destinations"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ||
                    window.location.pathname.startsWith(
                      "/destinations/"
                    )
                      ? "active"
                      : ""
                  }
                >
                  <span>03</span>

                  <strong>
                    Destinations
                  </strong>
                </NavLink>


                {/* EXPAND BUTTON */}

                <button
                  type="button"
                  className="nylora-mobile-destination-toggle"
                  onClick={toggleDestinations}
                  aria-label="Expand destinations"
                  aria-expanded={
                    destinationsOpen
                  }
                >
                  <FiChevronDown
                    className={
                      destinationsOpen
                        ? "rotate"
                        : ""
                    }
                  />
                </button>

              </div>


              {/* =================================================
                  MOBILE DESTINATION SUBMENU
              ================================================= */}

              <div className="nylora-mobile-destination-submenu">

                {/* ALL DESTINATIONS */}

                <Link
                  to="/destinations"
                  onClick={closeMenu}
                >
                  <span>
                    <small>
                      EXPLORE
                    </small>

                    All Destinations
                  </span>

                  <FiArrowUpRight />
                </Link>


                {/* UGANDA */}

                <Link
                  to="/destinations/uganda"
                  onClick={closeMenu}
                >
                  <span>
                    <small>
                      DESTINATION 01
                    </small>

                    Uganda
                  </span>

                  <FiArrowUpRight />
                </Link>


                {/* RWANDA */}

                <Link
                  to="/destinations/rwanda"
                  onClick={closeMenu}
                >
                  <span>
                    <small>
                      DESTINATION 02
                    </small>

                    Rwanda
                  </span>

                  <FiArrowUpRight />
                </Link>

              </div>

            </div>


            {/* SAFARIS */}

            <NavLink
              to="/safaris"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <span>04</span>

              <strong>
                Safaris
              </strong>
            </NavLink>


            {/* GORILLA TREKKING */}

            <NavLink
              to="/gorilla-trekking"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <span>05</span>

              <strong>
                Gorilla Trekking
              </strong>
            </NavLink>


            {/* CONTACT */}

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <span>06</span>

              <strong>
                Contact
              </strong>
            </NavLink>

          </nav>


          {/* =================================================
              MOBILE BOTTOM
          ================================================= */}

          <div className="nylora-mobile-bottom">

            <a
              href="https://wa.me/256786349505"
              target="_blank"
              rel="noopener noreferrer"
              className="nylora-mobile-cta"
              onClick={closeMenu}
            >
              <span>
                Begin Your Journey
              </span>

              <FiArrowUpRight />
            </a>


            <div className="nylora-mobile-contact">

              <small>
                Speak with our safari team
              </small>

              <a href="tel:+256786349505">
                +256 786 349505
              </a>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}