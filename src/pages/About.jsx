import "./About.css";
import { Helmet } from "react-helmet-async";

import safariHero from "../assets/hero4.jpg";
import storyImg from "../assets/wildlife.jpg";

export default function About() {
  return (
    <section className="about-page">

      {/* =========================
         SEO (GOOGLE RANKING)
      ========================= */}
      <Helmet>
        <title>
          About Nylora Safaris | Uganda, Rwanda, Kenya & Tanzania Safari Experts
        </title>

        <meta
          name="description"
          content="Learn about Nylora Safaris, a premium East Africa tour company specializing in Uganda gorilla trekking, Rwanda safaris, Kenya wildlife safaris, and Tanzania Serengeti tours."
        />

        <meta
          name="keywords"
          content="
            luxury safari company Africa,
            Uganda safari company,
            Rwanda gorilla trekking tours,
            Kenya wildlife safaris,
            Tanzania Serengeti safaris,
            East Africa luxury safaris,
            Bwindi gorilla trekking tours,
            African safari experts
          "
        />
      </Helmet>

      {/* HERO */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${safariHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <div className="hero-content">

          <small>ABOUT Nylora SAFARIS</small>

          <h1>Luxury Safari Experts in East Africa</h1>

          <p>
            We design premium Uganda safaris, Rwanda gorilla trekking tours,
            Kenya wildlife safaris, and Tanzania Serengeti experiences.
          </p>

        </div>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="container">

          <div className="story-grid">

            <div className="story-image">
              <img src={storyImg} alt="East Africa safari wildlife experience" />
            </div>

            <div className="story-content">

              <small>OUR STORY</small>

              <h2>Passion for Luxury African Safaris</h2>

              <p>
                Nylora Safaris is a trusted East Africa tour operator
                specializing in tailor-made safari experiences across Uganda,
                Rwanda, Kenya, and Tanzania.
              </p>

              <p>
                From gorilla trekking in Bwindi Impenetrable Forest to the Great
                Migration in Serengeti, we deliver unforgettable luxury travel.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* MISSION */}
      <section className="mission-section">
        <div className="container">

          <div className="mission-grid">

            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>Deliver world-class luxury safari experiences in East Africa.</p>
            </div>

            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>To be Africa’s most trusted luxury safari brand.</p>
            </div>

          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <div className="container">

          <div className="section-title">
            <small>WHY CHOOSE US</small>
            <h2>Trusted Luxury Safari Company</h2>
          </div>

          <div className="why-grid">

            <div className="why-card">
              <h3>🦍 Gorilla Trekking Experts</h3>
              <p>Specialists in Bwindi & Volcanoes National Park safaris.</p>
            </div>

            <div className="why-card">
              <h3>🦁 Big Five Safaris</h3>
              <p>Kenya Masai Mara & Tanzania Serengeti safari experts.</p>
            </div>

            <div className="why-card">
              <h3>🌍 Local East Africa Knowledge</h3>
              <p>Professional guides across Uganda, Rwanda, Kenya & Tanzania.</p>
            </div>

            <div className="why-card">
              <h3>⭐ Luxury Custom Safaris</h3>
              <p>Tailor-made itineraries for premium travel experiences.</p>
            </div>

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">

        <div className="stat-card">
          <span>500+</span>
          <h3>Happy Safari Travelers</h3>
        </div>

        <div className="stat-card">
          <span>20+</span>
          <h3>Luxury Safari Packages</h3>
        </div>

        <div className="stat-card">
          <span>4</span>
          <h3>East Africa Countries</h3>
        </div>

        <div className="stat-card">
          <span>24/7</span>
          <h3>Safari Support</h3>
        </div>

      </section>

      {/* CTA */}
      <section className="about-cta">

        <div className="container">

          <h2>Plan Your Luxury East Africa Safari Today</h2>

          <p>
            Speak to our safari experts for Uganda, Rwanda, Kenya or Tanzania safari packages.
          </p>

          <a
            href="https://wa.me/25670000000"
            target="_blank"
            rel="noreferrer"
            className="cta-btn"
          >
            Contact Us on WhatsApp
          </a>

        </div>

      </section>

    </section>
  );
}