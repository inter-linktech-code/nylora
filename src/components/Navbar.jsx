import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiChevronDown,
  FiFileText,
  FiShield,
  FiRefreshCw,
  FiGlobe,
  FiCalendar,
  FiHome,
} from "react-icons/fi";

import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [travelServicesOpen, setTravelServicesOpen] = useState(false);

  const [mobileDestinationsOpen, setMobileDestinationsOpen] =
    useState(false);

  const [mobileTravelServicesOpen, setMobileTravelServicesOpen] =
    useState(false);

  /* ==========================================================
     SCROLL EFFECT
  ========================================================== */

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

  /* ==========================================================
     PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  ========================================================== */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ==========================================================
     CLOSE ALL MENUS
  ========================================================== */

  const closeMenu = () => {
    setMenuOpen(false);

    setDestinationsOpen(false);
    setTravelServicesOpen(false);

    setMobileDestinationsOpen(false);
    setMobileTravelServicesOpen(false);
  };

  /* ==========================================================
     DESTINATIONS TOGGLE
  ========================================================== */

  const handleDestinationToggle = () => {
    setDestinationsOpen((previous) => !previous);
    setTravelServicesOpen(false);
  };

  /* ==========================================================
     TRAVEL SERVICES TOGGLE
  ========================================================== */

  const handleTravelServicesToggle = () => {
    setTravelServicesOpen((previous) => !previous);
    setDestinationsOpen(false);
  };

  return (
    <>
      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <header
        className={`nylora-navbar ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="nylora-navbar-inner">

          {/* ==================================================
              BRAND
          ================================================== */}

          <Link
            to="/"
            className="nylora-brand"
            onClick={closeMenu}
            aria-label="Nylora Safaris - The Light Of The Nile"
          >
            <span className="nylora-brand-mark">
              N
            </span>

            <span className="nylora-brand-text">

              <strong>
                NYLORA
              </strong>

              <small>
                SAFARIS
              </small>

              <em>
                The Light Of The Nile
              </em>

            </span>
          </Link>

          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

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

            {/* ==================================================
                DESTINATIONS DROPDOWN
            ================================================== */}

            <div
              className="nylora-nav-dropdown"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <button
                type="button"
                className="nylora-nav-dropdown-trigger"
                onClick={handleDestinationToggle}
                aria-expanded={destinationsOpen}
              >
                <span>
                  Destinations
                </span>

                <FiChevronDown
                  className={
                    destinationsOpen ? "rotate" : ""
                  }
                />
              </button>

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
                    Uganda and Rwanda.
                  </p>

                </div>

                <Link
                  to="/destinations"
                  onClick={closeMenu}
                  className="nylora-dropdown-overview"
                >
                  <span>
                    <strong>
                      All Destinations
                    </strong>

                    <small>
                      Explore Uganda & Rwanda
                    </small>
                  </span>

                  <FiArrowUpRight />
                </Link>

                <Link
                  to="/destinations/uganda"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>
                      Uganda
                    </strong>

                    <small>
                      Gorillas · Wildlife · Wilderness
                    </small>
                  </span>

                  <FiArrowUpRight />
                </Link>

                <Link
                  to="/destinations/rwanda"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>
                      Rwanda
                    </strong>

                    <small>
                      Gorillas · Volcanoes · Luxury
                    </small>
                  </span>

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

            {/* ==================================================
                TRAVEL SERVICES DROPDOWN
            ================================================== */}

            <div
              className="nylora-nav-dropdown"
              onMouseEnter={() => setTravelServicesOpen(true)}
              onMouseLeave={() => setTravelServicesOpen(false)}
            >
              <button
                type="button"
                className="nylora-nav-dropdown-trigger"
                onClick={handleTravelServicesToggle}
                aria-expanded={travelServicesOpen}
              >
                <span>
                  Travel Services
                </span>

                <FiChevronDown
                  className={
                    travelServicesOpen ? "rotate" : ""
                  }
                />
              </button>

              <div
                className={`nylora-dropdown-menu nylora-services-dropdown ${
                  travelServicesOpen ? "show" : ""
                }`}
              >
                <div className="nylora-dropdown-heading">

                  <span>
                    TRAVEL SUPPORT
                  </span>

                  <p>
                    Everything you need before
                    and during your journey.
                  </p>

                </div>

                <Link
                  to="/travel-services"
                  onClick={closeMenu}
                  className="nylora-dropdown-overview"
                >
                  <span>
                    <strong>
                      All Travel Services
                    </strong>

                    <small>
                      Explore our complete travel support
                    </small>
                  </span>

                  <FiArrowUpRight />
                </Link>

                <Link
                  to="/travel-services"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>
                      Passport Application
                    </strong>

                    <small>
                      Application assistance
                    </small>
                  </span>

                  <FiFileText />
                </Link>

                <Link
                  to="/travel-services"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>
                      Lost Passport Recovery
                    </strong>

                    <small>
                      Replacement guidance
                    </small>
                  </span>

                  <FiShield />
                </Link>

                <Link
                  to="/travel-services"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>
                      Passport Renewal
                    </strong>

                    <small>
                      Renewal assistance
                    </small>
                  </span>

                  <FiRefreshCw />
                </Link>

                <Link
                  to="/travel-services"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>
                      Visa Applications
                    </strong>

                    <small>
                      Visa preparation support
                    </small>
                  </span>

                  <FiGlobe />
                </Link>

                <Link
                  to="/travel-services"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>
                      Flight Ticket Booking
                    </strong>

                    <small>
                      International & regional flights
                    </small>
                  </span>

                  <FiCalendar />
                </Link>

                <Link
                  to="/travel-services"
                  onClick={closeMenu}
                >
                  <span>
                    <strong>
                      Hotel Bookings
                    </strong>

                    <small>
                      Accommodation arrangements
                    </small>
                  </span>

                  <FiHome />
                </Link>
              </div>
            </div>

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

          {/* ==================================================
              DESKTOP CTA
          ================================================== */}

          <div className="nylora-navbar-actions">

            <Link
              to="/booking"
              className="nylora-enquire-btn"
              onClick={closeMenu}
            >
              <span>
                Plan Your Safari
              </span>

              <FiArrowUpRight />
            </Link>

          </div>

          {/* ==================================================
              MOBILE TOGGLE
          ================================================== */}

          <button
            type="button"
            className="nylora-mobile-toggle"
            onClick={() =>
              setMenuOpen((previous) => !previous)
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

      {/* ======================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`nylora-mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <div className="nylora-mobile-menu-inner">

          {/* MOBILE BRAND */}

          <div className="nylora-mobile-brand">

            <span className="nylora-mobile-brand-mark">
              N
            </span>

            <div className="nylora-mobile-brand-text">

              <strong>
                NYLORA
              </strong>

              <span>
                SAFARIS
              </span>

              <em>
                The Light Of The Nile
              </em>

            </div>

          </div>

          {/* MOBILE INTRO */}

          <div className="nylora-mobile-intro">

            <span>
              NYLORA SAFARIS
            </span>

            <p>
              Bespoke journeys through the wild
              heart of Uganda and Rwanda.
            </p>

          </div>

          {/* MOBILE NAVIGATION */}

          <nav className="nylora-mobile-nav">

            {/* 01 HOME */}

            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <span>
                01
              </span>

              Home
            </NavLink>

            {/* 02 ABOUT */}

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <span>
                02
              </span>

              About
            </NavLink>

            {/* ==================================================
                03 DESTINATIONS
            ================================================== */}

            <div className="nylora-mobile-destinations">

              <button
                type="button"
                className="nylora-mobile-destination-toggle"
                onClick={() =>
                  setMobileDestinationsOpen(
                    (previous) => !previous
                  )
                }
                aria-expanded={
                  mobileDestinationsOpen
                }
              >
                <span>
                  03
                </span>

                <strong>
                  Destinations
                </strong>

                <FiChevronDown
                  className={
                    mobileDestinationsOpen
                      ? "rotate"
                      : ""
                  }
                />
              </button>

              <div
                className={`nylora-mobile-destination-submenu ${
                  mobileDestinationsOpen
                    ? "open"
                    : ""
                }`}
              >
                <Link
                  to="/destinations"
                  onClick={closeMenu}
                  className="nylora-mobile-destination-row"
                >
                  <span>
                    <strong>
                      All Destinations
                    </strong>

                    <small>
                      Uganda & Rwanda
                    </small>
                  </span>

                  <FiArrowUpRight />
                </Link>

                <Link
                  to="/destinations/uganda"
                  onClick={closeMenu}
                  className="nylora-mobile-destination-row"
                >
                  <span>
                    <strong>
                      Uganda
                    </strong>

                    <small>
                      Wildlife · Gorillas · Adventure
                    </small>
                  </span>

                  <FiArrowUpRight />
                </Link>

                <Link
                  to="/destinations/rwanda"
                  onClick={closeMenu}
                  className="nylora-mobile-destination-row"
                >
                  <span>
                    <strong>
                      Rwanda
                    </strong>

                    <small>
                      Gorillas · Volcanoes · Luxury
                    </small>
                  </span>

                  <FiArrowUpRight />
                </Link>
              </div>
            </div>

            {/* 04 SAFARIS */}

            <NavLink
              to="/safaris"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <span>
                04
              </span>

              Safaris
            </NavLink>

            {/* 05 GORILLA TREKKING */}

            <NavLink
              to="/gorilla-trekking"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <span>
                05
              </span>

              Gorilla Trekking
            </NavLink>

            {/* ==================================================
                06 TRAVEL SERVICES
            ================================================== */}

            <div className="nylora-mobile-destinations nylora-mobile-services">

              <button
                type="button"
                className="nylora-mobile-destination-toggle"
                onClick={() =>
                  setMobileTravelServicesOpen(
                    (previous) => !previous
                  )
                }
                aria-expanded={
                  mobileTravelServicesOpen
                }
              >
                <span>
                  06
                </span>

                <strong>
                  Travel Services
                </strong>

                <FiChevronDown
                  className={
                    mobileTravelServicesOpen
                      ? "rotate"
                      : ""
                  }
                />
              </button>

              <div
                className={`nylora-mobile-destination-submenu ${
                  mobileTravelServicesOpen
                    ? "open"
                    : ""
                }`}
              >

                <Link
                  to="/travel-services"
                  onClick={closeMenu}
                  className="nylora-mobile-destination-row"
                >
                  <span>
                    <strong>
                      All Travel Services
                    </strong>

                    <small>
                      Complete travel support
                    </small>
                  </span>

                  <FiArrowUpRight />
                </Link>

                <Link
                  to="/travel-services"
                  onClick={closeMenu}
                  className="nylora-mobile-destination-row"
                >
                  <span>
                    <strong>
                      Passport Application
                    </strong>

                    <small>
                      Application assistance
                    </small>
                  </span>

                  <FiFileText />
                </Link>

                <Link
                  to="/travel-services"
                  onClick={closeMenu}
                  className="nylora-mobile-destination-row"
                >
                  <span>
                    <strong>
                      Lost Passport Recovery
                    </strong>

                    <small>
                      Replacement guidance
                    </small>
                  </span>

                  <FiShield />
                </Link>

                <Link
                  to="/travel-services"
                  onClick={closeMenu}
                  className="nylora-mobile-destination-row"
                >
                  <span>
                    <strong>
                      Passport Renewal
                    </strong>

                    <small>
                      Renewal assistance
                    </small>
                  </span>

                  <FiRefreshCw />
                </Link>

                <Link
                  to="/travel-services"
                  onClick={closeMenu}
                  className="nylora-mobile-destination-row"
                >
                  <span>
                    <strong>
                      Visa Applications
                    </strong>

                    <small>
                      Visa preparation
                    </small>
                  </span>

                  <FiGlobe />
                </Link>

                <Link
                  to="/travel-services"
                  onClick={closeMenu}
                  className="nylora-mobile-destination-row"
                >
                  <span>
                    <strong>
                      Flight Ticket Booking
                    </strong>

                    <small>
                      International & regional
                    </small>
                  </span>

                  <FiCalendar />
                </Link>

                <Link
                  to="/travel-services"
                  onClick={closeMenu}
                  className="nylora-mobile-destination-row"
                >
                  <span>
                    <strong>
                      Hotel Bookings
                    </strong>

                    <small>
                      Accommodation arrangements
                    </small>
                  </span>

                  <FiHome />
                </Link>

              </div>
            </div>

            {/* 07 CONTACT */}

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <span>
                07
              </span>

              Contact
            </NavLink>

          </nav>

          {/* ==================================================
              MOBILE BOTTOM
          ================================================== */}

          <div className="nylora-mobile-bottom">

            <Link
              to="/booking"
              className="nylora-mobile-cta"
              onClick={closeMenu}
            >
              <span>
                Begin Your Journey
              </span>

              <FiArrowUpRight />
            </Link>

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