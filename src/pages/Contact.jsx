import "./Contact.css";
import heroImg from "../assets/bwindi.jpg";

export default function Contact() {
  return (
    <section className="contact-page">

      {/* =========================
          HERO
      ========================= */}
      <section
        className="contact-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg})`,
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">

            <small>CONTACT NYLORA SAFARIS</small>

            <h1>Plan Your Luxury East African Safari</h1>

            <p>
              Speak directly with our safari specialists for bespoke Uganda,
              Rwanda, Kenya & Tanzania safari experiences, including gorilla trekking
              and luxury wildlife journeys.
            </p>

          </div>
        </div>
      </section>

      {/* =========================
          CONTACT INFO
      ========================= */}
      <section className="contact-info">
        <div className="container">

          <div className="info-grid">

            <div className="info-card">
              <h3>📞 Call Us</h3>
              <p>+256 700000000</p>
            </div>

            <div className="info-card">
              <h3>💬 WhatsApp</h3>
              <p>+256 70000000</p>
            </div>

            <div className="info-card">
              <h3>📧 Email</h3>
              <p>info@nylorasafaris.com</p>
            </div>

            <div className="info-card">
              <h3>📍 Location</h3>
              <p>Kampala, Uganda</p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          FORM SECTION
      ========================= */}
      <section className="contact-form-section">
        <div className="container">

          <div className="contact-grid">

            <div className="form-content">
              <small>TAILOR-MADE SAFARIS</small>
              <h2>Request Your Custom Safari Itinerary</h2>

              <p>
                Tell us your travel dreams and we will design a private luxury safari
                experience across East Africa tailored just for you.
              </p>
            </div>

            <form className="contact-form">

              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <input type="text" placeholder="Destination (Uganda, Rwanda, Kenya...)" />

              <textarea
                rows="6"
                placeholder="Describe your dream safari experience..."
              />

              <button type="submit">Send Inquiry</button>

            </form>

          </div>

        </div>
      </section>

      {/* =========================
          MAP
      ========================= */}
      <section className="map-section">
        <iframe
          title="Nylora Safaris Location"
          src="https://maps.google.com/maps?q=Kampala%20Uganda&t=&z=11&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
        />
      </section>

      {/* =========================
          FAQ
      ========================= */}
      <section className="faq-section">
        <div className="container">

          <div className="section-title">
            <small>TRAVEL INFORMATION</small>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-grid">

            <div className="faq-card">
              <h3>Do you organize gorilla trekking permits?</h3>
              <p>Yes, we handle all Uganda and Rwanda gorilla permit bookings.</p>
            </div>

            <div className="faq-card">
              <h3>Can I customize my safari?</h3>
              <p>Every safari is fully tailor-made based on your travel style.</p>
            </div>

            <div className="faq-card">
              <h3>What countries do you cover?</h3>
              <p>Uganda, Rwanda, Kenya, and Tanzania across East Africa.</p>
            </div>

            <div className="faq-card">
              <h3>Do you offer luxury lodges?</h3>
              <p>Yes, we work with premium lodges and boutique safari camps.</p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================= */}
      <section className="contact-cta">
        <div className="container">

          <h2>Ready to Begin Your Safari Journey?</h2>

          <p>
            Connect with our experts and start planning your luxury East African adventure today.
          </p>

          <a
            href="https://wa.me/256700000000?text=Hello%20Nylora%20Luxury%20Safaris,%20I%20want%20to%20plan%20a%20luxury%20safari."
            target="_blank"
            rel="noreferrer"
            className="cta-btn"
          >
            Chat on WhatsApp
          </a>

        </div>
      </section>

    </section>
  );
}