import { useState, useEffect } from "react";
import "./Booking.css";
import { useLocation, useParams } from "react-router-dom";

import { generateSafariBrochureV2 } from "../utils/generateSafariBrochureV2";
import { db } from "../firebase";
import { push, ref } from "firebase/database";

export default function Booking() {
  const location = useLocation();
  const { id } = useParams();

  const selectedTour = location.state?.tour || null;

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    tour: "",
    budget: "",
    date: "",
    people: 2,
    travelStyle: "",
    message: "",
  });

  const budgetRanges = [
    "$3,000 - $5,000",
    "$5,000 - $8,000",
    "$8,000 - $12,000",
    "$12,000 - $15,000",
    "$15,000+",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleBudgetSelect = (budget) => {
    setForm((prev) => ({ ...prev, budget }));
  };

  /* =========================
     AUTO FILL SELECTED TOUR
  ========================= */
  useEffect(() => {
    if (selectedTour) {
      setForm((prev) => ({
        ...prev,
        tour: selectedTour.title,
      }));
    }
  }, [selectedTour]);

  /* =========================
     SUBMIT BOOKING
  ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bookingData = {
        ...form,
        selectedTourId: selectedTour?.id || id || null,
        createdAt: new Date().toISOString(),
      };

      // 1. Save to Firebase
      await push(ref(db, "bookings"), bookingData);

      // 2. Generate LUXURY BROCHURE PDF (IMPORTANT FIX)
      await generateSafariBrochureV2({
        ...form,
        id: selectedTour?.id || id,
      });

      // 3. WhatsApp message
      const message = `
🦁 LUXURY SAFARI CONFIRMED

Name: ${form.name}
Tour: ${form.tour}
Date: ${form.date}
Travelers: ${form.people}
Budget: ${form.budget}

✔ Your luxury safari brochure has been generated
      `;

      window.open(
        `https://wa.me/256708610067?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      alert("Success! Your luxury safari brochure has been downloaded.");

      // reset
      setForm({
        name: "",
        email: "",
        phone: "",
        country: "",
        tour: "",
        budget: "",
        date: "",
        people: 2,
        travelStyle: "",
        message: "",
      });

      setStep(1);
    } catch (err) {
      console.error(err);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <section className="booking-page">

      <section className="booking-hero">
        <div className="booking-overlay"></div>

        <div className="booking-hero-content">
          <span>LUXURY SAFARI COLLECTION</span>

          <h1>
            Design Your Private<br />
            African Safari Experience
          </h1>

          <p>
            Exclusive gorilla trekking, Big Five safaris, and luxury lodge experiences.
          </p>
        </div>
      </section>

      <section className="booking-section">
        <div className="booking-container">

          <div className="booking-progress">
            <div className={`progress-step ${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`progress-line ${step >= 2 ? "active" : ""}`}></div>
            <div className={`progress-step ${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`progress-line ${step >= 3 ? "active" : ""}`}></div>
            <div className={`progress-step ${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="step-content">
                <h2>Personal Details</h2>

                <input name="name" placeholder="Full Name" onChange={handleChange} value={form.name} required />
                <input name="email" placeholder="Email" onChange={handleChange} value={form.email} required />
                <input name="phone" placeholder="Phone" onChange={handleChange} value={form.phone} required />
                <input name="country" placeholder="Country" onChange={handleChange} value={form.country} required />

                <button type="button" className="primary-btn" onClick={next}>
                  Continue →
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="step-content">

                <h2>Safari Preferences</h2>

                {selectedTour ? (
                  <div className="selected-tour-box">
                    <h3>{selectedTour.title}</h3>
                    <small>{selectedTour.location} • {selectedTour.days} Days</small>
                  </div>
                ) : (
                  <input name="tour" value={form.tour} onChange={handleChange} placeholder="Select Tour" />
                )}

                <input type="date" name="date" onChange={handleChange} value={form.date} />
                <input type="number" name="people" onChange={handleChange} value={form.people} />

                <select name="travelStyle" onChange={handleChange} value={form.travelStyle}>
                  <option>Travel Style</option>
                  <option>Mid-Range Luxury</option>
                  <option>Luxury Lodges</option>
                  <option>Ultra Luxury</option>
                </select>

                <h3>Budget</h3>

                <div className="budget-grid">
                  {budgetRanges.map((b) => (
                    <div
                      key={b}
                      className={`budget-card ${form.budget === b ? "selected" : ""}`}
                      onClick={() => handleBudgetSelect(b)}
                    >
                      {b}
                    </div>
                  ))}
                </div>

                <button type="button" onClick={back} className="secondary-btn">Back</button>
                <button type="button" onClick={next} className="primary-btn">Continue</button>

              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="step-content">

                <h2>Final Details</h2>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                />

                <button type="button" onClick={back} className="secondary-btn">
                  Back
                </button>

                <button type="submit" className="primary-btn">
                  Confirm & Generate Luxury Brochure
                </button>

              </div>
            )}

          </form>

        </div>
      </section>

    </section>
  );
}