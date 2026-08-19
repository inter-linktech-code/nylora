import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiUsers,
} from "react-icons/fi";

import "./Booking.css";

import safariHero from "../assets/hero4.jpg";

export default function Booking() {
  const location = useLocation();
  const { id } = useParams();

  const selectedTour = location.state?.tour || null;

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    tour: "",
    date: "",
    people: 2,
    travelStyle: "",
    budget: "",
    message: "",
  });

  const budgetRanges = [
    "$3,000 – $5,000",
    "$5,000 – $8,000",
    "$8,000 – $12,000",
    "$12,000 – $15,000",
    "$15,000+",
  ];

  useEffect(() => {
    if (selectedTour) {
      setForm((previous) => ({
        ...previous,
        tour: selectedTour.title || "",
      }));
    }
  }, [selectedTour]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((previous) => Math.min(previous + 1, 3));
  };

  const previousStep = () => {
    setStep((previous) => Math.max(previous - 1, 1));
  };

  const selectBudget = (budget) => {
    setForm((previous) => ({
      ...previous,
      budget,
    }));
  };

  const submitBooking = (event) => {
    event.preventDefault();

    /*
      At this stage we are not saving anything to Firebase.

      Instead, the enquiry is prepared and sent through WhatsApp.
      This allows the website to work while the database is
      intentionally left out of the project.
    */

    const message = `
Hello Nylora Safaris,

I would like to enquire about a safari.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Country: ${form.country}

Safari: ${form.tour || "Not selected"}
Travel date: ${form.date || "Flexible"}
Travelers: ${form.people}
Travel style: ${form.travelStyle || "Not specified"}
Budget: ${form.budget || "Not specified"}

Additional information:
${form.message || "None"}

Safari reference:
${selectedTour?.id || id || "N/A"}
    `.trim();

    const whatsappUrl =
      `https://wa.me/256786349505?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="booking-page">
        <section
          className="booking-success-hero"
          style={{ backgroundImage: `url(${safariHero})` }}
        >
          <div className="booking-success-overlay"></div>

          <div className="booking-success-content">
            <div className="success-icon">
              <FiCheck />
            </div>

            <span className="eyebrow">ENQUIRY RECEIVED</span>

            <h1>
              Your African
              <br />
              Journey Begins Here.
            </h1>

            <p>
              Thank you for choosing Nylora Safaris. Your enquiry has been
              prepared for our safari team on WhatsApp. We will be in touch
              to begin shaping your journey.
            </p>

            <div className="success-actions">
              <Link to="/" className="booking-primary-button">
                Return Home
                <FiArrowRight />
              </Link>

              <Link to="/safaris" className="booking-secondary-button">
                Explore Safaris
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="booking-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="booking-hero"
        style={{ backgroundImage: `url(${safariHero})` }}
      >
        <div className="booking-hero-overlay"></div>

        <div className="booking-hero-content">

          <span className="eyebrow">NYLORA SAFARIS</span>

          <h1>
            Begin Your
            <br />
            African Journey
          </h1>

          <p>
            Tell us how you would like to experience Uganda and Rwanda.
            Our safari specialists will create a journey around you.
          </p>

        </div>

        <div className="hero-scroll">
          <span>PLAN YOUR JOURNEY</span>
          <div></div>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="booking-intro">

        <div className="booking-intro-inner">

          <div className="booking-intro-label">
            <span>01</span>
            <div></div>
            <span>ENQUIRE</span>
          </div>

          <div className="booking-intro-copy">

            <span className="eyebrow dark-eyebrow">
              YOUR SAFARI, YOUR WAY
            </span>

            <h2>
              A journey designed
              <br />
              around <em>you.</em>
            </h2>

            <p>
              Every Nylora journey begins with a conversation. Tell us what
              inspires you, when you would like to travel and how you want
              to experience East Africa.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOOKING AREA
      ===================================================== */}

      <section className="booking-section">

        <div className="booking-layout">

          {/* LEFT INFORMATION */}

          <aside className="booking-sidebar">

            <span className="eyebrow dark-eyebrow">
              YOUR JOURNEY
            </span>

            <h2>
              Let's create
              <br />
              something <em>special.</em>
            </h2>

            <p>
              Whether you are dreaming of gorilla trekking in Rwanda,
              encountering Uganda's mountain gorillas, following the Big
              Five or simply escaping into the wild, we will help you build
              an unforgettable journey.
            </p>

            <div className="sidebar-divider"></div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FiPhone />
              </div>

              <div>
                <span>CALL US</span>
                <a href="tel:+256786349505">
                  +256 786 349505
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FiMail />
              </div>

              <div>
                <span>EMAIL</span>
                <a href="mailto:info@nylora.com">
                  info@nylora.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FiMapPin />
              </div>

              <div>
                <span>DESTINATIONS</span>
                <strong>Uganda · Rwanda</strong>
              </div>
            </div>

          </aside>


          {/* FORM */}

          <div className="booking-card">

            {/* PROGRESS */}

            <div className="booking-progress">

              <div className={`booking-progress-item ${step >= 1 ? "active" : ""}`}>
                <span>01</span>
                <small>ABOUT YOU</small>
              </div>

              <div className={`booking-progress-line ${step >= 2 ? "active" : ""}`}></div>

              <div className={`booking-progress-item ${step >= 2 ? "active" : ""}`}>
                <span>02</span>
                <small>YOUR SAFARI</small>
              </div>

              <div className={`booking-progress-line ${step >= 3 ? "active" : ""}`}></div>

              <div className={`booking-progress-item ${step >= 3 ? "active" : ""}`}>
                <span>03</span>
                <small>FINAL DETAILS</small>
              </div>

            </div>


            <form onSubmit={submitBooking}>

              {/* =================================================
                  STEP 1
              ================================================= */}

              {step === 1 && (
                <div className="booking-step">

                  <div className="step-heading">
                    <span className="step-number">01</span>

                    <div>
                      <span className="eyebrow dark-eyebrow">
                        FIRST, TELL US ABOUT YOU
                      </span>

                      <h3>
                        Who are we
                        <br />
                        planning for?
                      </h3>
                    </div>
                  </div>


                  <div className="form-grid">

                    <div className="form-field full">
                      <label>FULL NAME</label>

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>


                    <div className="form-field">
                      <label>EMAIL ADDRESS</label>

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>


                    <div className="form-field">
                      <label>PHONE NUMBER</label>

                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+256..."
                        required
                      />
                    </div>


                    <div className="form-field full">
                      <label>COUNTRY OF RESIDENCE</label>

                      <input
                        type="text"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="Where are you travelling from?"
                        required
                      />
                    </div>

                  </div>


                  <div className="form-actions single-action">

                    <button
                      type="button"
                      className="booking-primary-button"
                      onClick={nextStep}
                    >
                      Continue
                      <FiArrowRight />
                    </button>

                  </div>

                </div>
              )}


              {/* =================================================
                  STEP 2
              ================================================= */}

              {step === 2 && (
                <div className="booking-step">

                  <div className="step-heading">

                    <span className="step-number">02</span>

                    <div>
                      <span className="eyebrow dark-eyebrow">
                        DESIGN YOUR EXPERIENCE
                      </span>

                      <h3>
                        Tell us about
                        <br />
                        your <em>safari.</em>
                      </h3>
                    </div>

                  </div>


                  <div className="form-grid">

                    <div className="form-field full">
                      <label>SAFARI EXPERIENCE</label>

                      {selectedTour ? (
                        <div className="selected-tour">

                          <div>
                            <span>SELECTED JOURNEY</span>

                            <h4>{selectedTour.title}</h4>

                            {selectedTour.location && (
                              <p>
                                {selectedTour.location}
                                {selectedTour.days
                                  ? ` · ${selectedTour.days} days`
                                  : ""}
                              </p>
                            )}
                          </div>

                          <FiCheck />

                        </div>
                      ) : (
                        <input
                          type="text"
                          name="tour"
                          value={form.tour}
                          onChange={handleChange}
                          placeholder="Which safari are you interested in?"
                        />
                      )}
                    </div>


                    <div className="form-field">
                      <label>PREFERRED TRAVEL DATE</label>

                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                      />
                    </div>


                    <div className="form-field">
                      <label>NUMBER OF TRAVELERS</label>

                      <div className="input-with-icon">

                        <FiUsers />

                        <input
                          type="number"
                          name="people"
                          min="1"
                          max="30"
                          value={form.people}
                          onChange={handleChange}
                        />

                      </div>

                    </div>


                    <div className="form-field full">

                      <label>TRAVEL STYLE</label>

                      <div className="style-options">

                        {[
                          "Mid-Range Luxury",
                          "Luxury Lodges",
                          "Ultra Luxury",
                        ].map((style) => (
                          <button
                            type="button"
                            key={style}
                            className={
                              form.travelStyle === style
                                ? "style-option selected"
                                : "style-option"
                            }
                            onClick={() =>
                              setForm((previous) => ({
                                ...previous,
                                travelStyle: style,
                              }))
                            }
                          >
                            {style}

                            {form.travelStyle === style && (
                              <FiCheck />
                            )}
                          </button>
                        ))}

                      </div>

                    </div>


                    <div className="form-field full">

                      <label>APPROXIMATE BUDGET</label>

                      <div className="budget-grid">

                        {budgetRanges.map((budget) => (
                          <button
                            type="button"
                            key={budget}
                            className={
                              form.budget === budget
                                ? "budget-option selected"
                                : "budget-option"
                            }
                            onClick={() => selectBudget(budget)}
                          >
                            {budget}
                          </button>
                        ))}

                      </div>

                    </div>

                  </div>


                  <div className="form-actions">

                    <button
                      type="button"
                      className="booking-outline-button"
                      onClick={previousStep}
                    >
                      <FiArrowLeft />
                      Back
                    </button>

                    <button
                      type="button"
                      className="booking-primary-button"
                      onClick={nextStep}
                    >
                      Continue
                      <FiArrowRight />
                    </button>

                  </div>

                </div>
              )}


              {/* =================================================
                  STEP 3
              ================================================= */}

              {step === 3 && (
                <div className="booking-step">

                  <div className="step-heading">

                    <span className="step-number">03</span>

                    <div>
                      <span className="eyebrow dark-eyebrow">
                        ONE LAST THING
                      </span>

                      <h3>
                        Tell us what
                        <br />
                        you're <em>dreaming of.</em>
                      </h3>
                    </div>

                  </div>


                  <div className="form-field">

                    <label>
                      ANYTHING WE SHOULD KNOW?
                    </label>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your interests, special occasions, preferred activities, accommodation preferences or anything else you would like us to know..."
                      rows="8"
                    />

                  </div>


                  {/* SUMMARY */}

                  <div className="booking-summary">

                    <div className="summary-heading">
                      <span>YOUR ENQUIRY</span>
                      <FiSend />
                    </div>

                    <div className="summary-grid">

                      <div>
                        <span>NAME</span>
                        <strong>{form.name || "—"}</strong>
                      </div>

                      <div>
                        <span>TRAVELERS</span>
                        <strong>{form.people || "—"}</strong>
                      </div>

                      <div>
                        <span>SAFARI</span>
                        <strong>
                          {form.tour || "To be discussed"}
                        </strong>
                      </div>

                      <div>
                        <span>TRAVEL STYLE</span>
                        <strong>
                          {form.travelStyle || "Flexible"}
                        </strong>
                      </div>

                    </div>

                  </div>


                  <div className="form-actions">

                    <button
                      type="button"
                      className="booking-outline-button"
                      onClick={previousStep}
                    >
                      <FiArrowLeft />
                      Back
                    </button>

                    <button
                      type="submit"
                      className="booking-primary-button"
                    >
                      Send Enquiry
                      <FiSend />
                    </button>

                  </div>

                  <p className="booking-note">
                    Your enquiry will open WhatsApp so you can communicate
                    directly with the Nylora Safaris team.
                  </p>

                </div>
              )}

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="booking-bottom">

        <div className="booking-bottom-inner">

          <span className="eyebrow">
            UGANDA · RWANDA · EAST AFRICA
          </span>

          <h2>
            Wild places.
            <br />
            <em>Beautifully experienced.</em>
          </h2>

          <Link to="/safaris" className="booking-bottom-button">
            Explore Our Safaris
            <FiArrowRight />
          </Link>

        </div>

      </section>

    </main>
  );
}