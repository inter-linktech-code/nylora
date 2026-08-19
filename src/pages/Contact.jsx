import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FiArrowUpRight,
  FiCheck,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiMessageCircle,
} from "react-icons/fi";

import "./Contact.css";

import contactHero from "../assets/hero4.jpg";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    destination: "",
    safariType: "",
    travelDate: "",
    travellers: "",
    accommodation: "",
    budget: "",
    gorillaTrekking: "",
    duration: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 7000);
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Nylora Safaris | Plan Your Uganda & Rwanda Safari
        </title>

        <meta
          name="description"
          content="Speak with Nylora Safaris about your private Uganda or Rwanda safari. Plan gorilla trekking, wildlife safaris, luxury lodge stays and bespoke East African journeys."
        />

        <meta
          name="keywords"
          content="Uganda safari booking, Rwanda safari booking, gorilla trekking Uganda, Rwanda gorilla trekking, Uganda safari company, Rwanda safari company, luxury safari Uganda, Nylora Safaris"
        />
      </Helmet>

      <main className="contact-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          className="contact-hero"
          style={{
            backgroundImage: `url(${contactHero})`,
          }}
        >
          <div className="contact-hero-overlay" />

          <div className="contact-hero-content">

            <span className="contact-eyebrow">
              PLAN YOUR JOURNEY
            </span>

            <h1>
              Let's plan something
              <em> unforgettable.</em>
            </h1>

            <p>
              Tell us how you would like to experience Uganda,
              Rwanda and the wild heart of East Africa. Our safari
              team will shape your journey around you.
            </p>

          </div>

          <div className="contact-hero-bottom">
            <span>UGANDA</span>
            <span>RWANDA</span>
            <span>EAST AFRICA</span>
          </div>
        </section>


        {/* =====================================================
            INTRO / CONTACT DETAILS
        ===================================================== */}

        <section className="contact-intro section-container">

          <div className="contact-intro-copy">

            <span className="section-kicker">
              START WITH A CONVERSATION
            </span>

            <h2>
              Your safari should feel
              <span> entirely yours.</span>
            </h2>

            <p>
              Every Nylora journey begins with a conversation.
              Whether you already know where you want to go or
              simply know that you want to see gorillas, elephants,
              lions and the landscapes of East Africa, we can help
              turn that idea into a considered journey.
            </p>

            <p>
              Share as much or as little as you know below. Our team
              will use your preferences to create a safari proposal
              around your interests, travel style and time available.
            </p>

          </div>


          <div className="contact-details">

            <div className="contact-detail-card">

              <div className="contact-detail-icon">
                <FiPhone />
              </div>

              <div>
                <span>CALL US</span>

                <a href="tel:+256786349505">
                  +256 786 349505
                </a>

                <small>
                  Speak directly with our safari team.
                </small>
              </div>

            </div>


            <div className="contact-detail-card">

              <div className="contact-detail-icon">
                <FiMessageCircle />
              </div>

              <div>
                <span>WHATSAPP</span>

                <a
                  href="https://wa.me/256786349505"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start a conversation
                  <FiArrowUpRight />
                </a>

                <small>
                  The quickest way to reach us.
                </small>
              </div>

            </div>


            <div className="contact-detail-card">

              <div className="contact-detail-icon">
                <FiMail />
              </div>

              <div>
                <span>EMAIL</span>

                <a href="mailto:info@nylora.com">
                  info@nylora.com
                </a>

                <small>
                  Send us your safari ideas.
                </small>
              </div>

            </div>


            <div className="contact-detail-card">

              <div className="contact-detail-icon">
                <FiMapPin />
              </div>

              <div>
                <span>BASED IN</span>

                <strong>
                  Uganda · East Africa
                </strong>

                <small>
                  Journeys across Uganda and Rwanda.
                </small>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            BOOKING FORM
        ===================================================== */}

        <section className="contact-booking">

          <div className="section-container">

            <div className="booking-heading">

              <span className="section-kicker">
                SAFARI ENQUIRY
              </span>

              <h2>
                Tell us about
                <span> your journey.</span>
              </h2>

              <p>
                Complete the form below and we'll use your answers
                to understand what kind of safari would suit you.
                You don't need to have everything figured out.
              </p>

            </div>


            <div className="booking-layout">

              {/* =================================================
                  FORM
              ================================================= */}

              <div className="booking-form-wrapper">

                {submitted ? (

                  <div className="form-success">

                    <div className="success-icon">
                      <FiCheck />
                    </div>

                    <span>ENQUIRY RECEIVED</span>

                    <h3>
                      Thank you for reaching out.
                    </h3>

                    <p>
                      Your safari enquiry has been received.
                      Our team will review your preferences and
                      get back to you to begin shaping your journey.
                    </p>

                    <a
                      href="https://wa.me/256786349505"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="success-whatsapp"
                    >
                      <span>
                        Prefer WhatsApp?
                      </span>

                      <FiArrowUpRight />
                    </a>

                  </div>

                ) : (

                  <form
                    className="safari-form"
                    onSubmit={handleSubmit}
                  >

                    {/* =========================================
                        PERSONAL DETAILS
                    ========================================= */}

                    <div className="form-section">

                      <div className="form-section-heading">

                        <span>01</span>

                        <div>
                          <h3>
                            About you
                          </h3>

                          <p>
                            Tell us who we'll be planning for.
                          </p>
                        </div>

                      </div>


                      <div className="form-grid two-columns">

                        <div className="form-field">

                          <label htmlFor="firstName">
                            First name
                          </label>

                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Your first name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />

                        </div>


                        <div className="form-field">

                          <label htmlFor="lastName">
                            Last name
                          </label>

                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Your last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />

                        </div>


                        <div className="form-field">

                          <label htmlFor="email">
                            Email address
                          </label>

                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />

                        </div>


                        <div className="form-field">

                          <label htmlFor="phone">
                            Phone / WhatsApp
                          </label>

                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+256..."
                            value={formData.phone}
                            onChange={handleChange}
                          />

                        </div>


                        <div className="form-field">

                          <label htmlFor="country">
                            Country of residence
                          </label>

                          <input
                            id="country"
                            name="country"
                            type="text"
                            placeholder="Where are you travelling from?"
                            value={formData.country}
                            onChange={handleChange}
                          />

                        </div>

                      </div>

                    </div>


                    {/* =========================================
                        JOURNEY
                    ========================================= */}

                    <div className="form-section">

                      <div className="form-section-heading">

                        <span>02</span>

                        <div>
                          <h3>
                            Your journey
                          </h3>

                          <p>
                            Help us understand where you'd like to go.
                          </p>
                        </div>

                      </div>


                      <div className="form-grid two-columns">

                        <div className="form-field">

                          <label htmlFor="destination">
                            Preferred destination
                          </label>

                          <select
                            id="destination"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                          >
                            <option value="">
                              Select destination
                            </option>

                            <option value="uganda">
                              Uganda
                            </option>

                            <option value="rwanda">
                              Rwanda
                            </option>

                            <option value="both">
                              Uganda & Rwanda
                            </option>

                            <option value="unsure">
                              I'm not sure yet
                            </option>
                          </select>

                        </div>


                        <div className="form-field">

                          <label htmlFor="safariType">
                            Safari experience
                          </label>

                          <select
                            id="safariType"
                            name="safariType"
                            value={formData.safariType}
                            onChange={handleChange}
                          >
                            <option value="">
                              Select experience
                            </option>

                            <option value="gorilla">
                              Gorilla trekking
                            </option>

                            <option value="wildlife">
                              Wildlife safari
                            </option>

                            <option value="gorilla-wildlife">
                              Gorillas & wildlife
                            </option>

                            <option value="primates">
                              Primates & rainforest
                            </option>

                            <option value="luxury">
                              Luxury safari
                            </option>

                            <option value="family">
                              Family safari
                            </option>

                            <option value="honeymoon">
                              Honeymoon / romantic
                            </option>

                            <option value="custom">
                              Bespoke journey
                            </option>
                          </select>

                        </div>


                        <div className="form-field">

                          <label htmlFor="travelDate">
                            Preferred travel date
                          </label>

                          <input
                            id="travelDate"
                            name="travelDate"
                            type="date"
                            value={formData.travelDate}
                            onChange={handleChange}
                          />

                        </div>


                        <div className="form-field">

                          <label htmlFor="duration">
                            Approximate duration
                          </label>

                          <select
                            id="duration"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                          >
                            <option value="">
                              Select duration
                            </option>

                            <option value="1-3">
                              1–3 days
                            </option>

                            <option value="4-6">
                              4–6 days
                            </option>

                            <option value="7-10">
                              7–10 days
                            </option>

                            <option value="11-14">
                              11–14 days
                            </option>

                            <option value="15+">
                              15+ days
                            </option>

                            <option value="flexible">
                              I'm flexible
                            </option>
                          </select>

                        </div>


                        <div className="form-field">

                          <label htmlFor="travellers">
                            Number of travellers
                          </label>

                          <select
                            id="travellers"
                            name="travellers"
                            value={formData.travellers}
                            onChange={handleChange}
                          >
                            <option value="">
                              Select number
                            </option>

                            <option value="1">
                              1 traveller
                            </option>

                            <option value="2">
                              2 travellers
                            </option>

                            <option value="3-4">
                              3–4 travellers
                            </option>

                            <option value="5-6">
                              5–6 travellers
                            </option>

                            <option value="7+">
                              7+ travellers
                            </option>
                          </select>

                        </div>


                        <div className="form-field">

                          <label htmlFor="accommodation">
                            Accommodation style
                          </label>

                          <select
                            id="accommodation"
                            name="accommodation"
                            value={formData.accommodation}
                            onChange={handleChange}
                          >
                            <option value="">
                              Select preference
                            </option>

                            <option value="luxury">
                              Luxury lodges & camps
                            </option>

                            <option value="premium">
                              Premium / boutique
                            </option>

                            <option value="midrange">
                              Comfortable mid-range
                            </option>

                            <option value="mixed">
                              A mix of styles
                            </option>

                            <option value="unsure">
                              Recommend for me
                            </option>
                          </select>

                        </div>

                      </div>

                    </div>


                    {/* =========================================
                        BUDGET & INTERESTS
                    ========================================= */}

                    <div className="form-section">

                      <div className="form-section-heading">

                        <span>03</span>

                        <div>
                          <h3>
                            Your preferences
                          </h3>

                          <p>
                            These details help us make the right recommendations.
                          </p>
                        </div>

                      </div>


                      <div className="form-grid two-columns">

                        <div className="form-field">

                          <label htmlFor="budget">
                            Approximate budget per person
                          </label>

                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                          >
                            <option value="">
                              Select budget
                            </option>

                            <option value="under-2000">
                              Under USD 2,000
                            </option>

                            <option value="2000-4000">
                              USD 2,000–4,000
                            </option>

                            <option value="4000-7000">
                              USD 4,000–7,000
                            </option>

                            <option value="7000-10000">
                              USD 7,000–10,000
                            </option>

                            <option value="10000+">
                              USD 10,000+
                            </option>

                            <option value="unsure">
                              Not sure yet
                            </option>
                          </select>

                        </div>


                        <div className="form-field">

                          <label htmlFor="gorillaTrekking">
                            Gorilla trekking
                          </label>

                          <select
                            id="gorillaTrekking"
                            name="gorillaTrekking"
                            value={formData.gorillaTrekking}
                            onChange={handleChange}
                          >
                            <option value="">
                              Select preference
                            </option>

                            <option value="yes">
                              Yes, definitely
                            </option>

                            <option value="maybe">
                              I'd like to know more
                            </option>

                            <option value="no">
                              No
                            </option>
                          </select>

                        </div>

                      </div>


                      <div className="form-field full-field">

                        <label htmlFor="message">
                          Tell us about your dream safari
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          rows="7"
                          placeholder="Tell us what you'd love to see, who you're travelling with, places you've always wanted to visit, special occasions, interests or anything else you'd like us to know..."
                          value={formData.message}
                          onChange={handleChange}
                        />

                      </div>

                    </div>


                    {/* =========================================
                        SUBMIT
                    ========================================= */}

                    <div className="form-submit-area">

                      <div className="form-note">
                        <span>
                          PRIVATE & PERSONAL
                        </span>

                        <p>
                          Your information is used only to
                          understand and prepare your safari enquiry.
                        </p>
                      </div>


                      <button
                        type="submit"
                        className="form-submit"
                      >
                        <span>
                          Send Safari Enquiry
                        </span>

                        <FiSend />
                      </button>

                    </div>

                  </form>

                )}

              </div>


              {/* =================================================
                  SIDE PANEL
              ================================================= */}

              <aside className="booking-sidebar">

                <div className="sidebar-sticky">

                  <span className="sidebar-kicker">
                    WHY NYLORA
                  </span>

                  <h3>
                    Your journey.
                    <br />
                    Your pace.
                    <br />
                    <em>Your Africa.</em>
                  </h3>

                  <p>
                    We don't believe in simply selling itineraries.
                    We listen first, then build a journey around
                    the experience you want to have.
                  </p>


                  <div className="sidebar-points">

                    <div>
                      <span>01</span>

                      <div>
                        <strong>
                          Personal planning
                        </strong>

                        <p>
                          Your safari is designed around your
                          interests and travel style.
                        </p>
                      </div>
                    </div>


                    <div>
                      <span>02</span>

                      <div>
                        <strong>
                          Uganda & Rwanda
                        </strong>

                        <p>
                          Specialist journeys across two of
                          East Africa's most extraordinary destinations.
                        </p>
                      </div>
                    </div>


                    <div>
                      <span>03</span>

                      <div>
                        <strong>
                          Thoughtful stays
                        </strong>

                        <p>
                          From intimate forest lodges to exceptional
                          wilderness camps.
                        </p>
                      </div>
                    </div>


                    <div>
                      <span>04</span>

                      <div>
                        <strong>
                          Local knowledge
                        </strong>

                        <p>
                          Advice grounded in the places and
                          experiences that make Uganda and Rwanda special.
                        </p>
                      </div>
                    </div>

                  </div>


                  <div className="sidebar-cta">

                    <span>
                      READY TO TALK?
                    </span>

                    <a
                      href="https://wa.me/256786349505"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp our team
                      <FiArrowUpRight />
                    </a>

                    <a href="tel:+256786349505">
                      +256 786 349505
                    </a>

                  </div>

                </div>

              </aside>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="contact-final">

          <div className="contact-final-overlay" />

          <div className="contact-final-content">

            <span>
              THE WILD HEART OF EAST AFRICA
            </span>

            <h2>
              Your next great
              <em> journey starts here.</em>
            </h2>

            <p>
              Uganda and Rwanda are waiting.
              Let's create something extraordinary.
            </p>

            <a
              href="https://wa.me/256786349505"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-final-button"
            >
              <span>Talk to Nylora</span>
              <FiArrowUpRight />
            </a>

          </div>

        </section>

      </main>
    </>
  );
}