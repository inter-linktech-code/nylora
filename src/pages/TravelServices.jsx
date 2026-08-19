import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiFileText,
  FiShield,
  FiRefreshCw,
  FiGlobe,
  FiCalendar,
  FiHome,
  FiCheck,
  FiPhone,
} from "react-icons/fi";

import "./TravelServices.css";

/* ============================================================
   IMAGES
   All images are located directly inside src/assets/
   Rename these files to match your actual assets.
============================================================ */

import passportImage from "../assets/passport-service.jpg";
import lostPassportImage from "../assets/lost-passport.jpg";
import passportRenewalImage from "../assets/passport-renewal.jpg";
import visaImage from "../assets/visa-application.jpg";
import hotelImage from "../assets/hotel-booking.jpg";
import flightImage from "../assets/flight-booking.jpg";
import travelHero from "../assets/Jinja.jpg";

/* ============================================================
   SERVICES DATA
============================================================ */

const services = [
  {
    id: "passport",
    number: "01",
    icon: FiFileText,
    category: "PASSPORT SERVICES",
    title: "Passport Application",
    shortTitle: "Apply for your passport with confidence.",
    description:
      "Preparing for your first international journey starts with having the right travel documents. Nylora Safaris provides practical assistance to travellers preparing their passport applications, helping you understand the process and organize the documentation required before submission.",
    image: passportImage,
    points: [
      "Guidance on passport application requirements",
      "Assistance preparing supporting documentation",
      "Application preparation guidance",
      "Travel document checklist",
      "Support throughout the preparation process",
    ],
  },

  {
    id: "lost-passport",
    number: "02",
    icon: FiShield,
    category: "PASSPORT SERVICES",
    title: "Lost Passport Recovery",
    shortTitle: "Travel support when the unexpected happens.",
    description:
      "Losing a passport can be stressful, especially when you are travelling or preparing for an important journey. Our team can guide you through the practical steps involved in reporting a lost passport and preparing for replacement documentation.",
    image: lostPassportImage,
    points: [
      "Guidance following passport loss",
      "Information on replacement procedures",
      "Documentation preparation support",
      "Travel assistance during the recovery process",
      "Practical guidance for travellers abroad",
    ],
  },

  {
    id: "passport-renewal",
    number: "03",
    icon: FiRefreshCw,
    category: "PASSPORT SERVICES",
    title: "Passport Renewal",
    shortTitle: "Keep your travel documents ready for your next journey.",
    description:
      "An expired or soon-to-expire passport should never become the reason your travel plans are delayed. Nylora helps travellers prepare for passport renewal by providing guidance on requirements, supporting documents and the steps involved in the renewal process.",
    image: passportRenewalImage,
    points: [
      "Passport renewal preparation",
      "Documentation guidance",
      "Application process assistance",
      "Travel document checks",
      "Planning support before international travel",
    ],
  },

  {
    id: "visa",
    number: "04",
    icon: FiGlobe,
    category: "VISA SERVICES",
    title: "Visa Applications",
    shortTitle: "Navigate your visa preparation with greater confidence.",
    description:
      "Different destinations have different entry requirements. We help travellers understand the visa preparation process, organize supporting documents and prepare for applications according to the requirements of their intended destination.",
    image: visaImage,
    points: [
      "Visa requirement guidance",
      "Application preparation assistance",
      "Supporting document checklist",
      "Travel documentation review",
      "Destination-specific preparation guidance",
    ],
  },

  {
    id: "flights",
    number: "05",
    icon: FiCalendar,
    category: "FLIGHT SERVICES",
    title: "Flight Ticket Booking",
    shortTitle: "From Kampala to wherever your journey takes you.",
    description:
      "Whether you are travelling for a safari, business, family visit or international holiday, we can assist with arranging flight tickets that fit your itinerary. Our team helps travellers explore suitable routes and coordinate flights with their wider travel plans.",
    image: flightImage,
    points: [
      "Domestic flight arrangements",
      "Regional East African flights",
      "International flight bookings",
      "Travel itinerary coordination",
      "Departure and arrival planning",
    ],
  },

  {
    id: "hotels",
    number: "06",
    icon: FiHome,
    category: "ACCOMMODATION",
    title: "Hotel Bookings",
    shortTitle: "Beautiful places to stay, wherever you travel.",
    description:
      "Accommodation is an important part of every journey. From luxury safari lodges and intimate forest retreats to city hotels and convenient airport stays, we help travellers arrange accommodation that complements their itinerary.",
    image: hotelImage,
    points: [
      "Safari lodge reservations",
      "Luxury hotel bookings",
      "City accommodation",
      "Pre- and post-safari stays",
      "Accommodation planning around your itinerary",
    ],
  },
];


/* ============================================================
   TRAVEL SERVICES PAGE
============================================================ */

export default function TravelServices() {
  return (
    <main className="travel-services-page">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="travel-services-hero">

        <div
          className="travel-services-hero-image"
          style={{
            backgroundImage: `url(${travelHero})`,
          }}
        />

        <div className="travel-services-hero-overlay" />

        <div className="travel-services-container">

          <div className="travel-services-hero-content">

            <div className="travel-services-eyebrow">
              <span />
              NYLORA TRAVEL SERVICES
            </div>

            <h1>
              Everything you need
              <br />
              <em>to go further.</em>
            </h1>

            <p>
              Beyond unforgettable safaris, Nylora provides practical
              travel support to help make your journey from Uganda
              to the world simpler, more organized and more seamless.
            </p>

            <div className="travel-services-hero-actions">

              <Link
                to="/booking"
                className="travel-primary-button"
              >
                Plan Your Journey
                <FiArrowUpRight />
              </Link>

              <a
                href="#services"
                className="travel-secondary-button"
              >
                Explore Services
                <FiArrowRight />
              </a>

            </div>

          </div>

          <div className="travel-services-hero-note">

            <span>01</span>

            <p>
              Travel assistance
              <br />
              beyond the safari.
            </p>

          </div>

        </div>

      </section>


      {/* ======================================================
          INTRODUCTION
      ====================================================== */}

      <section className="travel-introduction">

        <div className="travel-services-container">

          <div className="travel-introduction-grid">

            <div className="travel-section-label">

              <span>WHY NYLORA</span>

              <strong>01</strong>

            </div>

            <div className="travel-introduction-content">

              <span className="travel-kicker">
                MORE THAN A SAFARI COMPANY
              </span>

              <h2>
                Your journey should feel
                <br />
                <em>seamless from the beginning.</em>
              </h2>

              <p className="travel-lead">
                A great journey involves more than choosing where
                you want to go. There are passports to prepare,
                visas to understand, flights to arrange and places
                to stay.
              </p>

              <p>
                Nylora Safaris brings these practical travel services
                together with our safari expertise, giving travellers
                one experienced team to turn to when preparing for
                their next adventure.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          SERVICES
      ====================================================== */}

      <section
        id="services"
        className="travel-services-list"
      >

        <div className="travel-services-container">

          <div className="travel-services-heading">

            <div>

              <span className="travel-kicker">
                TRAVEL SUPPORT
              </span>

              <h2>
                Designed around
                <br />
                <em>your journey.</em>
              </h2>

            </div>

            <p>
              Whether you are travelling across East Africa or
              preparing for an international journey, our services
              are designed to remove unnecessary complications
              from your travel planning.
            </p>

          </div>


          <div className="travel-service-cards">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="travel-service-card"
                >

                  <div className="travel-service-image">

                    <img
                      src={service.image}
                      alt={service.title}
                    />

                    <div className="travel-service-image-overlay" />

                    <span className="travel-service-number">
                      {service.number}
                    </span>

                  </div>


                  <div className="travel-service-card-content">

                    <div className="travel-service-icon">
                      <Icon />
                    </div>

                    <span className="travel-service-category">
                      {service.category}
                    </span>

                    <h3>
                      {service.title}
                    </h3>

                    <h4>
                      {service.shortTitle}
                    </h4>

                    <p>
                      {service.description}
                    </p>


                    <div className="travel-service-divider" />


                    <div className="travel-service-includes">

                      <span>
                        WHAT WE HELP WITH
                      </span>

                      <ul>

                        {service.points.map((point) => (
                          <li key={point}>
                            <FiCheck />
                            <span>{point}</span>
                          </li>
                        ))}

                      </ul>

                    </div>


                    <Link
                      to="/contact"
                      className="travel-service-link"
                    >
                      Enquire About This Service
                      <FiArrowUpRight />
                    </Link>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* ======================================================
          SAFARI + SERVICES
      ====================================================== */}

      <section className="travel-combination-section">

        <div className="travel-services-container">

          <div className="travel-combination-grid">

            <div className="travel-combination-content">

              <span className="travel-kicker">
                ONE JOURNEY · ONE TEAM
              </span>

              <h2>
                Combine travel services
                <br />
                with your <em>safari.</em>
              </h2>

              <p>
                Planning a gorilla trekking adventure in Uganda?
                Flying into Kigali for a Rwanda safari? Or arranging
                a longer East African journey?
              </p>

              <p>
                Our team can help coordinate the practical elements
                of your trip alongside your safari itinerary, giving
                you a more connected travel experience from departure
                to arrival.
              </p>

              <Link
                to="/booking"
                className="travel-dark-button"
              >
                Start Planning
                <FiArrowUpRight />
              </Link>

            </div>


            <div className="travel-combination-stats">

              <div className="travel-stat">
                <strong>01</strong>
                <span>Travel Documentation</span>
              </div>

              <div className="travel-stat">
                <strong>02</strong>
                <span>Flights & Transfers</span>
              </div>

              <div className="travel-stat">
                <strong>03</strong>
                <span>Hotels & Lodges</span>
              </div>

              <div className="travel-stat">
                <strong>04</strong>
                <span>Safari Experiences</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="travel-process-section">

        <div className="travel-services-container">

          <div className="travel-process-heading">

            <span className="travel-kicker">
              SIMPLE PROCESS
            </span>

            <h2>
              Tell us where you're going.
              <br />
              <em>We'll help with the rest.</em>
            </h2>

          </div>


          <div className="travel-process-grid">

            <div className="travel-process-item">

              <span>01</span>

              <h3>
                Tell us your plans
              </h3>

              <p>
                Share your destination, travel dates and what
                you need help arranging.
              </p>

            </div>


            <div className="travel-process-item">

              <span>02</span>

              <h3>
                We help organize
              </h3>

              <p>
                Our team guides you through the relevant travel
                service and preparation requirements.
              </p>

            </div>


            <div className="travel-process-item">

              <span>03</span>

              <h3>
                Travel with confidence
              </h3>

              <p>
                With the practical details taken care of, you can
                focus on enjoying the journey itself.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          CONTACT CTA
      ====================================================== */}

      <section className="travel-services-cta">

        <div className="travel-services-container">

          <div className="travel-services-cta-inner">

            <div>

              <span className="travel-kicker">
                NEED TRAVEL ASSISTANCE?
              </span>

              <h2>
                Let's make your next journey
                <br />
                <em>beautifully simple.</em>
              </h2>

              <p>
                Tell us what you need and our travel team
                will help you take the next step.
              </p>

            </div>


            <div className="travel-cta-actions">

              <Link
                to="/contact"
                className="travel-cta-primary"
              >
                Speak With Nylora
                <FiArrowUpRight />
              </Link>

              <a
                href="tel:+256786349505"
                className="travel-cta-phone"
              >
                <FiPhone />

                <span>
                  <small>CALL OUR TEAM</small>
                  +256 786 349505
                </span>

              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}