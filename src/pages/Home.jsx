import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiMapPin,
  FiCompass,
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
  FiStar,
} from "react-icons/fi";

import "./Home.css";

// ============================================================
// IMAGES
// Make sure these files exist inside src/assets/
// ============================================================

import hero4 from "../assets/hero4.jpg";
import wildlife from "../assets/wildlife.jpg";
import gorilla from "../assets/gorilla.jpg";
import jinja from "../assets/Jinja.jpg";


// ============================================================
// HERO SLIDES
// ============================================================

const heroSlides = [
  {
    id: 1,
    image: hero4,
    eyebrow: "UGANDA · QUEEN ELIZABETH NATIONAL PARK",
    title: "Where the wild\nstill feels untouched.",
    description:
      "Encounter Africa's most extraordinary wildlife across vast savannah, ancient forests and beautiful private reserves.",
    destination: "Queen Elizabeth National Park",
    experience: "Big Five & Savannah",
    duration: "4 — 7 DAYS",
    tag: "WILDLIFE",
  },

  {
    id: 2,
    image: wildlife,
    eyebrow: "UGANDA · MURCHISON FALLS",
    title: "Africa in its\nmost powerful form.",
    description:
      "Watch elephants cross golden plains, lions disappear into tall grass and the Nile carve its way through one of Uganda's wildest landscapes.",
    destination: "Murchison Falls National Park",
    experience: "Wildlife & River Safari",
    duration: "3 — 6 DAYS",
    tag: "SAFARI",
  },

  {
    id: 3,
    image: gorilla,
    eyebrow: "UGANDA · BWINDI IMPENETRABLE FOREST",
    title: "Meet the guardians\nof the ancient forest.",
    description:
      "Step quietly into Bwindi's mist-covered forest for an intimate encounter with endangered mountain gorillas.",
    destination: "Bwindi Impenetrable Forest",
    experience: "Gorilla Trekking",
    duration: "3 — 5 DAYS",
    tag: "GORILLAS",
  },

  {
    id: 4,
    image: jinja,
    eyebrow: "UGANDA · THE NILE",
    title: "A different side\nof East Africa.",
    description:
      "Slow down beside the Nile with private river experiences, beautiful landscapes and carefully selected boutique stays.",
    destination: "Jinja & The Nile",
    experience: "Adventure & Escape",
    duration: "2 — 4 DAYS",
    tag: "ESCAPE",
  },

  {
    id: 5,
    image: hero4,
    eyebrow: "RWANDA · VOLCANOES NATIONAL PARK",
    title: "Sleep beautifully.\nWake up wild.",
    description:
      "Pair unforgettable wildlife encounters with exceptional lodges, refined service and extraordinary views across Rwanda.",
    destination: "Volcanoes National Park",
    experience: "Gorillas & Luxury Lodges",
    duration: "4 — 7 DAYS",
    tag: "LUXURY",
  },
];


// ============================================================
// FEATURED EXPERIENCES
// ============================================================

const experiences = [
  {
    number: "01",
    title: "Gorilla Trekking",
    location: "Uganda · Rwanda",
    text:
      "Enter the misty forests of East Africa and spend an unforgettable hour in the presence of a mountain gorilla family.",
    image: gorilla,
  },

  {
    number: "02",
    title: "Big Five Safaris",
    location: "Uganda",
    text:
      "Track lions, elephants, buffalo and leopard across Uganda's most remarkable wildlife landscapes.",
    image: wildlife,
  },

  {
    number: "03",
    title: "Luxury Lodges",
    location: "Uganda · Rwanda",
    text:
      "From forest hideaways to elegant safari camps, every stay is selected for character, location and exceptional hospitality.",
    image: hero4,
  },
];


// ============================================================
// HOME PAGE
// ============================================================

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = heroSlides[activeSlide];

  // ----------------------------------------------------------
  // AUTOPLAY
  // ----------------------------------------------------------

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1
      );
    }, 7000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === heroSlides.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <main className="nylora-home">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="home-hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* Background slides */}

        <div className="hero-background">

          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-slide ${
                index === activeSlide ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
          ))}

        </div>

        <div className="hero-dark-overlay" />
        <div className="hero-bottom-fade" />

        {/* Hero content */}

        <div className="home-section-container hero-container">

          <div className="hero-content">

            <div className="hero-eyebrow">

              <span className="eyebrow-line" />

              <span>{currentSlide.eyebrow}</span>

            </div>

            <h1 key={currentSlide.id}>
              {currentSlide.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index <
                    currentSlide.title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p key={`description-${currentSlide.id}`}>
              {currentSlide.description}
            </p>

            <div className="hero-actions">

              <Link to="/safaris" className="hero-primary-button">
                Explore Safaris
                <FiArrowUpRight />
              </Link>

              <Link to="/booking" className="hero-secondary-button">
                Plan Your Journey
              </Link>

            </div>

          </div>


          {/* Slide information */}

          <div className="hero-information">

            <div className="hero-info-item">

              <span className="hero-info-label">
                DESTINATION
              </span>

              <strong>
                <FiMapPin />
                {currentSlide.destination}
              </strong>

            </div>

            <div className="hero-info-item">

              <span className="hero-info-label">
                EXPERIENCE
              </span>

              <strong>
                {currentSlide.experience}
              </strong>

            </div>

            <div className="hero-info-item">

              <span className="hero-info-label">
                JOURNEY
              </span>

              <strong>
                {currentSlide.duration}
              </strong>

            </div>

          </div>

        </div>


        {/* Slide controls */}

        <div className="hero-controls">

          <button
            type="button"
            className="hero-arrow"
            onClick={previousSlide}
            aria-label="Previous slide"
          >
            <FiChevronLeft />
          </button>

          <div className="hero-pagination">

            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`hero-dot ${
                  index === activeSlide ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}

          </div>

          <button
            type="button"
            className="hero-arrow"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <FiChevronRight />
          </button>

        </div>


        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line" />
        </div>

      </section>


      {/* ======================================================
          INTRODUCTION
      ====================================================== */}

      <section className="home-introduction">

        <div className="home-section-container">

          <div className="intro-grid">

            <div className="intro-label">

              <span className="section-number">
                01
              </span>

              <span>
                THE NYLORA WAY
              </span>

            </div>

            <div className="intro-content">

              <h2>
                Africa, experienced
                <em> beautifully.</em>
              </h2>

              <p className="intro-lead">
                Nylora creates private safari journeys through Uganda
                and Rwanda for travellers who want more than simply
                seeing Africa.
              </p>

              <p>
                We combine extraordinary wildlife encounters with
                exceptional places to stay, thoughtful local knowledge
                and journeys designed around you.
              </p>

              <Link to="/about" className="text-link">
                Discover Nylora
                <FiArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          EXPERIENCE SECTION
      ====================================================== */}

      <section className="experience-section">

        <div className="home-section-container">

          <div className="section-heading-row">

            <div>

              <span className="section-kicker">
                CURATED EXPERIENCES
              </span>

              <h2>
                Go beyond the
                <em> ordinary.</em>
              </h2>

            </div>

            <Link to="/safaris" className="outline-link">
              View All Safaris
              <FiArrowUpRight />
            </Link>

          </div>


          <div className="experience-grid">

            {experiences.map((experience) => (

              <article
                className="experience-card"
                key={experience.number}
              >

                <div
                  className="experience-image"
                  style={{
                    backgroundImage: `url(${experience.image})`,
                  }}
                />

                <div className="experience-overlay" />

                <div className="experience-number">
                  {experience.number}
                </div>

                <div className="experience-content">

                  <span>
                    {experience.location}
                  </span>

                  <h3>
                    {experience.title}
                  </h3>

                  <p>
                    {experience.text}
                  </p>

                  <Link to="/safaris">
                    Explore Experience
                    <FiArrowUpRight />
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ======================================================
          UGANDA + RWANDA
      ====================================================== */}

      <section className="destination-section">

        <div className="home-section-container">

          <div className="destination-grid">

            <div className="destination-copy">

              <span className="section-kicker">
                TWO COUNTRIES · ONE EXTRAORDINARY REGION
              </span>

              <h2>
                Uganda & Rwanda.
                <br />
                <em>Wild by nature.</em>
              </h2>

              <p>
                From Uganda's vast savannahs and ancient rainforests
                to Rwanda's volcanic mountains, East Africa offers
                extraordinary contrasts within remarkably short
                distances.
              </p>

              <div className="destination-facts">

                <div>
                  <strong>01</strong>
                  <span>Mountain Gorillas</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Big Five Wildlife</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Private Lodges</span>
                </div>

              </div>

              <Link to="/destinations" className="dark-link">
                Discover Our Destinations
                <FiArrowRight />
              </Link>

            </div>


            <div className="destination-visual">

              <div
                className="destination-image main-image"
                style={{
                  backgroundImage: `url(${wildlife})`,
                }}
              />

              <div
                className="destination-image small-image"
                style={{
                  backgroundImage: `url(${gorilla})`,
                }}
              />

              <div className="destination-caption">

                <FiMapPin />

                <span>
                  Uganda · Rwanda
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          LODGE SECTION
      ====================================================== */}

      <section className="lodge-section">

        <div className="home-section-container">

          <div className="lodge-header">

            <div>

              <span className="section-kicker">
                WHERE YOU WILL STAY
              </span>

              <h2>
                Sleep surrounded
                <br />
                by <em>wilderness.</em>
              </h2>

            </div>

            <p>
              The right lodge can become part of the journey itself.
              We select intimate camps and lodges where architecture,
              service and landscape come together.
            </p>

          </div>


          <div className="lodge-feature">

            <div
              className="lodge-feature-image"
              style={{
                backgroundImage: `url(${hero4})`,
              }}
            />

            <div className="lodge-feature-overlay" />

            <div className="lodge-feature-content">

              <span>
                PRIVATE SAFARI LODGES
              </span>

              <h3>
                Wake up where
                <br />
                the wild begins.
              </h3>

              <p>
                Hand-selected stays in Uganda and Rwanda,
                chosen for their setting, character and
                exceptional hospitality.
              </p>

              <Link to="/luxury-lodges">
                Explore Luxury Lodges
                <FiArrowUpRight />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          WHY NYLORA
      ====================================================== */}

      <section className="why-section">

        <div className="home-section-container">

          <div className="why-grid">

            <div className="why-heading">

              <span className="section-kicker">
                WHY NYLORA
              </span>

              <h2>
                A journey designed
                <br />
                <em>around you.</em>
              </h2>

            </div>


            <div className="why-list">

              <div className="why-item">

                <span>01</span>

                <div>
                  <h3>Private & Personal</h3>
                  <p>
                    Your safari is shaped around your pace,
                    interests and travel style.
                  </p>
                </div>

              </div>


              <div className="why-item">

                <span>02</span>

                <div>
                  <h3>Local Knowledge</h3>
                  <p>
                    We know the landscapes, communities and
                    experiences that make East Africa special.
                  </p>
                </div>

              </div>


              <div className="why-item">

                <span>03</span>

                <div>
                  <h3>Exceptional Stays</h3>
                  <p>
                    Every property is selected for location,
                    character and genuine hospitality.
                  </p>
                </div>

              </div>


              <div className="why-item">

                <span>04</span>

                <div>
                  <h3>Seamless Planning</h3>
                  <p>
                    From your first enquiry to your final
                    transfer, every detail is carefully considered.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          TESTIMONIAL
      ====================================================== */}

      <section className="testimonial-section">

        <div className="home-section-container">

          <div className="testimonial-inner">

            <div className="stars">

              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />

            </div>

            <blockquote>
              “The kind of journey that stays with you long
              after you have returned home.”
            </blockquote>

            <span>
              A Nylora guest
            </span>

          </div>

        </div>

      </section>


      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section className="home-cta">

        <div className="home-section-container">

          <div className="cta-inner">

            <span className="section-kicker">
              YOUR AFRICA AWAITS
            </span>

            <h2>
              Let's design your
              <br />
              <em>extraordinary journey.</em>
            </h2>

            <p>
              Tell us what inspires you. We'll take care of the rest.
            </p>

            <div className="cta-buttons">

              <Link to="/booking" className="cta-primary">
                Start Planning
                <FiArrowUpRight />
              </Link>

              <Link to="/contact" className="cta-secondary">
                Speak With Nylora
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}