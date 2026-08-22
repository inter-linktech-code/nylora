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
============================================================ */

import passportImage from "../assets/passport-service.jpg";
import lostPassportImage from "../assets/lost-passport.jpg";
import passportRenewalImage from "../assets/passport-renewal.jpg";
import visaImage from "../assets/visa-application.jpg";
import hotelImage from "../assets/hotel-booking.jpg";
import flightImage from "../assets/flight-booking.jpg";
import travelHero from "../assets/Jinja.jpg";

/* ============================================================
   WHATSAPP CONFIGURATION
============================================================ */

const WHATSAPP_NUMBER = "256752932498";

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
    shortTitle:
      "Professional assistance with your passport application.",
    description:
      "Preparing for international travel starts with having the right travel documents. Nylora Safaris offers a professional passport application assistance service, helping clients prepare the required documentation and navigate the application process with greater confidence.",
    image: passportImage,
    points: [
      "Passport application preparation",
      "Supporting documentation assistance",
      "Application requirements guidance",
      "Travel document checklist",
      "Professional application support",
    ],
  },

  {
    id: "lost-passport",
    number: "02",
    icon: FiShield,
    category: "PASSPORT SERVICES",
    title: "Lost Passport Recovery",
    shortTitle:
      "Professional assistance when your passport is lost.",
    description:
      "Losing a passport can be stressful, particularly when you have upcoming travel plans. Our paid passport recovery service provides practical assistance with the steps required to report the loss, prepare replacement documentation and move forward with the recovery process.",
    image: lostPassportImage,
    points: [
      "Lost passport recovery assistance",
      "Replacement procedure guidance",
      "Supporting documentation preparation",
      "Application process assistance",
      "Travel document recovery support",
    ],
  },

  {
    id: "passport-renewal",
    number: "03",
    icon: FiRefreshCw,
    category: "PASSPORT SERVICES",
    title: "Passport Renewal",
    shortTitle:
      "Professional support for your passport renewal.",
    description:
      "An expired or soon-to-expire passport can interfere with carefully planned travel. Nylora provides a professional passport renewal service, assisting clients with document preparation, application requirements and the renewal process.",
    image: passportRenewalImage,
    points: [
      "Passport renewal preparation",
      "Supporting documentation assistance",
      "Application process assistance",
      "Travel document checks",
      "Professional renewal support",
    ],
  },

  {
    id: "visa",
    number: "04",
    icon: FiGlobe,
    category: "VISA SERVICES",
    title: "Visa Applications",
    shortTitle:
      "Professional visa application preparation and support.",
    description:
      "Visa requirements vary from one destination to another. Our visa application service provides professional assistance with understanding requirements, preparing supporting documents and organizing the information required for your intended destination.",
    image: visaImage,
    points: [
      "Visa application preparation",
      "Destination requirement guidance",
      "Supporting document preparation",
      "Application information review",
      "Professional visa support",
    ],
  },

  {
    id: "flights",
    number: "05",
    icon: FiCalendar,
    category: "FLIGHT SERVICES",
    title: "Flight Ticket Booking",
    shortTitle:
      "Professional flight booking for local and international journeys.",
    description:
      "Whether you are travelling for a safari, business, family visit or international holiday, Nylora provides a flight booking service designed around your itinerary. We assist with arranging suitable routes and coordinating your flights with the wider journey.",
    image: flightImage,
    points: [
      "Domestic flight bookings",
      "Regional East African flights",
      "International flight bookings",
      "Itinerary coordination",
      "Departure and arrival planning",
    ],
  },

  {
    id: "hotels",
    number: "06",
    icon: FiHome,
    category: "ACCOMMODATION",
    title: "Hotel Bookings",
    shortTitle:
      "Professional accommodation arrangements for your journey.",
    description:
      "Accommodation is an important part of every journey. Nylora provides a professional hotel and accommodation booking service, helping clients arrange suitable stays ranging from luxury safari lodges and forest retreats to city hotels and convenient airport accommodation.",
    image: hotelImage,
    points: [
      "Safari lodge reservations",
      "Luxury hotel bookings",
      "City accommodation arrangements",
      "Pre- and post-safari stays",
      "Accommodation planning",
    ],
  },
];

/* ============================================================
   WHATSAPP SERVICE REQUEST
============================================================ */

function requestServiceOnWhatsApp(service) {
  const message = `Hello Nylora Safaris,

I would like to request your ${service.title} service.

Please share the requirements, applicable service fee, and the next steps.

Thank you.`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

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
              Beyond unforgettable safaris, Nylora provides
              professional travel services designed to make your
              journey from Uganda to the world simpler, more
              organized and more seamless.
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
              Professional travel services
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
                visas to process, flights to arrange and places
                to stay.
              </p>

              <p>
                Nylora Safaris combines professional travel services
                with our safari expertise, giving clients one
                experienced team to turn to when preparing for
                their next journey.
              </p>

              <div className="travel-paid-service-note">

                <FiCheck />

                <span>
                  <strong>
                    Professional services, arranged for you.
                  </strong>

                  <small>
                    Service fees and applicable third-party
                    charges are confirmed before your service
                    begins.
                  </small>
                </span>

              </div>

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
                PROFESSIONAL TRAVEL SERVICES
              </span>

              <h2>
                Designed around
                <br />
                <em>your journey.</em>
              </h2>

            </div>

            <p>
              From travel documentation and visa preparation to
              flights and accommodation, our professional services
              are designed to take care of the practical details
              surrounding your journey.
            </p>

          </div>


          {/* ====================================================
              SERVICE CARDS
          ==================================================== */}

          <div className="travel-service-cards">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="travel-service-card"
                >

                  {/* IMAGE */}

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


                  {/* CONTENT */}

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


                    {/* SERVICE INCLUDES */}

                    <div className="travel-service-includes">

                      <span>
                        OUR SERVICE INCLUDES
                      </span>

                      <ul>

                        {service.points.map((point) => (

                          <li key={point}>

                            <FiCheck />

                            <span>
                              {point}
                            </span>

                          </li>

                        ))}

                      </ul>

                    </div>


                    {/* PAID SERVICE NOTICE */}

                    <div className="travel-service-fee-note">

                      <span>
                        PROFESSIONAL SERVICE
                      </span>

                      <p>
                        This is a paid service. Our team will
                        confirm the applicable service fee and
                        any third-party charges with you before
                        proceeding.
                      </p>

                    </div>


                    {/* =================================================
                        WHATSAPP REQUEST BUTTON
                    ================================================= */}

                    <button
                      type="button"
                      className="travel-service-link"
                      onClick={() =>
                        requestServiceOnWhatsApp(service)
                      }
                    >

                      <span>
                        Request This Service
                      </span>

                      <FiArrowUpRight />

                    </button>

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
                Our team can coordinate the practical elements of
                your trip alongside your safari itinerary, creating
                a more connected travel experience from departure
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
              OUR SERVICE PROCESS
            </span>

            <h2>
              Tell us what you need.
              <br />
              <em>We'll take it from there.</em>
            </h2>

            <p>
              Every service begins with understanding what you need.
              Before any work begins, we explain the service,
              applicable fees and any additional charges involved.
            </p>

          </div>


          <div className="travel-process-grid">

            <div className="travel-process-item">

              <span>01</span>

              <h3>
                Tell us what you need
              </h3>

              <p>
                Share your destination, travel dates and the
                service you would like us to arrange.
              </p>

            </div>


            <div className="travel-process-item">

              <span>02</span>

              <h3>
                Receive your quotation
              </h3>

              <p>
                We explain the applicable service fee and any
                relevant third-party costs before proceeding.
              </p>

            </div>


            <div className="travel-process-item">

              <span>03</span>

              <h3>
                We arrange the service
              </h3>

              <p>
                Once you approve the service, our team proceeds
                with the agreed travel arrangements on your behalf.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          TRANSPARENT PRICING
      ====================================================== */}

      <section className="travel-service-terms">

        <div className="travel-services-container">

          <div className="travel-service-terms-inner">

            <div className="travel-service-terms-icon">
              <FiFileText />
            </div>

            <div>

              <span className="travel-kicker">
                TRANSPARENT PRICING
              </span>

              <h3>
                Clear service fees.
                <br />
                No surprises.
              </h3>

              <p>
                Nylora Safaris provides travel services on a paid
                basis. Service fees vary depending on the type and
                complexity of the service requested. Where a service
                involves third-party charges such as government,
                embassy, airline or accommodation fees, these costs
                are separate and will be communicated before
                proceeding.
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
                NEED A TRAVEL SERVICE?
              </span>

              <h2>
                Let's make your next journey
                <br />
                <em>beautifully simple.</em>
              </h2>

              <p>
                Tell us what service you need. Our team will
                discuss your requirements and provide the
                applicable service fee before proceeding.
              </p>

            </div>


            <div className="travel-cta-actions">

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Hello Nylora Safaris,

I would like to speak with your travel services team.

Please share the available services, applicable fees, and the next steps.

Thank you.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="travel-cta-primary"
              >
                Speak With Nylora
                <FiArrowUpRight />
              </a>


              <a
                href="tel:+256752932498"
                className="travel-cta-phone"
              >

                <FiPhone />

                <span>

                  <small>
                    CALL OUR TEAM
                  </small>

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