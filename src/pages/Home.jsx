import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiMapPin,
  FiChevronLeft,
  FiChevronRight,
  FiStar,
} from "react-icons/fi";

import "./Home.css";

/* ============================================================
   IMAGES
============================================================ */

import hero4 from "../assets/hero4.jpg";
import wildlife from "../assets/wildlife.jpg";
import gorilla from "../assets/gorilla.jpg";
import jinja from "../assets/Jinja.jpg";

/*
  If you have these files, you can uncomment them and use them
  for the dedicated Rwanda experiences.

  import volcanoes from "../assets/volcanoes.jpg";
  import goldenMonkey from "../assets/golden-monkey.jpg";
*/


/* ============================================================
   HERO SLIDES
============================================================ */

const heroSlides = [
  {
    id: 1,

    image: hero4,

    eyebrow:
      "UGANDA · QUEEN ELIZABETH NATIONAL PARK",

    title: (
      <>
        Where the wild
        <br />
        still feels untouched.
      </>
    ),

    description:
      "Encounter extraordinary wildlife across Uganda's vast savannahs, ancient forests and beautifully preserved wilderness.",

    destination:
      "Queen Elizabeth National Park",

    experience:
      "Wildlife & Savannah",

    duration:
      "4 — 7 DAYS",

    tag:
      "WILDLIFE",
  },


  {
    id: 2,

    image: wildlife,

    eyebrow:
      "UGANDA · MURCHISON FALLS",

    title: (
      <>
        Africa in its
        <br />
        most powerful form.
      </>
    ),

    description:
      "Watch elephants cross golden plains, search for lions beneath the acacias and experience the Nile as it thunders through Murchison Falls.",

    destination:
      "Murchison Falls National Park",

    experience:
      "Wildlife & River Safari",

    duration:
      "3 — 6 DAYS",

    tag:
      "SAFARI",
  },


  {
    id: 3,

    image: gorilla,

    eyebrow:
      "UGANDA · BWINDI IMPENETRABLE FOREST",

    title: (
      <>
        Meet the guardians
        <br />
        of the ancient forest.
      </>
    ),

    description:
      "Step quietly into Bwindi's mist-covered forest for one of Africa's most extraordinary wildlife encounters — meeting a mountain gorilla family in its natural habitat.",

    destination:
      "Bwindi Impenetrable Forest",

    experience:
      "Gorilla Trekking",

    duration:
      "3 — 5 DAYS",

    tag:
      "GORILLAS",
  },


  {
    id: 4,

    image: jinja,

    eyebrow:
      "UGANDA · JINJA & THE NILE",

    title: (
      <>
        A different side
        <br />
        of East Africa.
      </>
    ),

    description:
      "Slow down beside the Nile with beautiful landscapes, adventure, river experiences and carefully selected boutique stays.",

    destination:
      "Jinja & The Nile",

    experience:
      "Adventure & Escape",

    duration:
      "2 — 4 DAYS",

    tag:
      "ESCAPE",
  },


  {
    id: 5,

    image: gorilla,

    eyebrow:
      "RWANDA · VOLCANOES NATIONAL PARK",

    title: (
      <>
        Sleep beautifully.
        <br />
        Wake up wild.
      </>
    ),

    description:
      "Discover Rwanda's volcanic landscapes, extraordinary primates and intimate luxury lodges designed to bring you closer to the wild.",

    destination:
      "Volcanoes National Park",

    experience:
      "Gorillas & Luxury",

    duration:
      "4 — 7 DAYS",

    tag:
      "RWANDA",
  },
];


/* ============================================================
   FEATURED EXPERIENCES
============================================================ */

const experiences = [
  {
    number: "01",

    title:
      "Gorilla Trekking",

    location:
      "UGANDA · RWANDA",

    text:
      "Enter the misty forests of East Africa and spend an unforgettable hour in the presence of a mountain gorilla family.",

    image:
      gorilla,

    link:
      "/gorilla-trekking",
  },


  {
    number: "02",

    title:
      "Big Five Safaris",

    location:
      "UGANDA",

    text:
      "Track lions, elephants, buffalo and leopard across Uganda's most remarkable wildlife landscapes, from open savannah to dramatic rift valleys.",

    image:
      wildlife,

    link:
      "/safaris",
  },


  {
    number: "03",

    title:
      "Luxury Lodges",

    location:
      "UGANDA · RWANDA",

    text:
      "From rainforest hideaways to elegant safari camps, every stay is selected for character, location, atmosphere and exceptional hospitality.",

    image:
      hero4,

    link:
      "/safaris",
  },
];


/* ============================================================
   HOME PAGE
============================================================ */

export default function Home() {

  const [activeSlide, setActiveSlide] =
    useState(0);

  const [isPaused, setIsPaused] =
    useState(false);


  const currentSlide =
    heroSlides[activeSlide];


  /* ==========================================================
     AUTOPLAY
  ========================================================== */

  useEffect(() => {

    if (isPaused) {
      return;
    }

    const timer =
      setInterval(() => {

        setActiveSlide((current) =>
          current === heroSlides.length - 1
            ? 0
            : current + 1
        );

      }, 7000);


    return () => {
      clearInterval(timer);
    };

  }, [isPaused]);


  /* ==========================================================
     SLIDE NAVIGATION
  ========================================================== */

  const nextSlide = () => {

    setActiveSlide((current) =>
      current === heroSlides.length - 1
        ? 0
        : current + 1
    );

  };


  const previousSlide = () => {

    setActiveSlide((current) =>
      current === 0
        ? heroSlides.length - 1
        : current - 1
    );

  };


  const goToSlide = (index) => {

    setActiveSlide(index);

  };


  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <main className="nylora-home">


      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="home-hero"

        onMouseEnter={() =>
          setIsPaused(true)
        }

        onMouseLeave={() =>
          setIsPaused(false)
        }
      >


        {/* HERO BACKGROUNDS */}

        <div className="hero-background">

          {heroSlides.map(
            (slide, index) => (

              <div
                key={slide.id}

                className={`hero-slide ${
                  index === activeSlide
                    ? "active"
                    : ""
                }`}

                style={{
                  backgroundImage:
                    `url(${slide.image})`,
                }}
              />

            )
          )}

        </div>


        {/* HERO OVERLAYS */}

        <div className="hero-dark-overlay" />

        <div className="hero-bottom-fade" />


        {/* HERO CONTENT */}

        <div className="home-section-container hero-container">


          <div className="hero-content">


            <div className="hero-eyebrow">

              <span className="eyebrow-line" />

              <span>
                {currentSlide.eyebrow}
              </span>

            </div>


            <h1 key={currentSlide.id}>
              {currentSlide.title}
            </h1>


            <p
              key={`description-${currentSlide.id}`}
            >
              {currentSlide.description}
            </p>


            <div className="hero-actions">


              <Link
                to="/safaris"
                className="hero-primary-button"
              >
                Explore Safaris

                <FiArrowUpRight />

              </Link>


              <Link
                to="/booking"
                className="hero-secondary-button"
              >
                Plan Your Journey
              </Link>


            </div>

          </div>


          {/* HERO INFORMATION */}

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


        {/* HERO CONTROLS */}

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

            {heroSlides.map(
              (slide, index) => (

                <button
                  key={slide.id}

                  type="button"

                  className={`hero-dot ${
                    index === activeSlide
                      ? "active"
                      : ""
                  }`}

                  onClick={() =>
                    goToSlide(index)
                  }

                  aria-label={
                    `Go to slide ${index + 1}`
                  }
                >

                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                </button>

              )
            )}

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


        {/* SCROLL INDICATOR */}

        <div className="hero-scroll">

          <span>
            SCROLL TO EXPLORE
          </span>

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

                Nylora creates private safari
                journeys through Uganda and Rwanda
                for travellers who want more than
                simply seeing Africa.

              </p>


              <p>

                We combine extraordinary wildlife
                encounters with exceptional places
                to stay, thoughtful local knowledge
                and journeys designed around you.

              </p>


              <Link
                to="/about"
                className="text-link"
              >

                Discover Nylora

                <FiArrowRight />

              </Link>

            </div>


          </div>

        </div>

      </section>


      {/* ======================================================
          FEATURED EXPERIENCES
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


            <Link
              to="/safaris"
              className="outline-link"
            >

              View All Safaris

              <FiArrowUpRight />

            </Link>


          </div>


          <div className="experience-grid">


            {experiences.map(
              (experience) => (

                <article
                  className="experience-card"

                  key={experience.number}
                >


                  {/* IMAGE */}

                  <div
                    className="experience-image"

                    style={{
                      backgroundImage:
                        `url(${experience.image})`,
                    }}
                  />


                  {/* OVERLAY */}

                  <div className="experience-overlay" />


                  {/* NUMBER */}

                  <div className="experience-number">

                    {experience.number}

                  </div>


                  {/* CONTENT */}

                  <div className="experience-content">


                    <span className="experience-location">

                      {experience.location}

                    </span>


                    <h3>

                      {experience.title}

                    </h3>


                    <p>

                      {experience.text}

                    </p>


                    <Link
                      to={experience.link}
                      className="experience-link"
                    >

                      Explore Experience

                      <FiArrowUpRight />

                    </Link>


                  </div>


                </article>

              )
            )}


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

                TWO COUNTRIES · ONE
                EXTRAORDINARY REGION

              </span>


              <h2>

                Uganda & Rwanda.

                <br />

                <em>
                  Wild by nature.
                </em>

              </h2>


              <p>

                From Uganda's vast savannahs and
                ancient rainforests to Rwanda's
                volcanic mountains, East Africa
                offers extraordinary contrasts
                within remarkably short distances.

              </p>


              <p>

                Whether your dream is tracking
                mountain gorillas through misty
                rainforest, watching elephants
                gather at a waterhole or waking
                beneath a canopy of stars, we design
                journeys around the experiences
                that matter most to you.

              </p>


              <div className="destination-facts">


                <div>

                  <strong>
                    01
                  </strong>

                  <span>
                    Mountain Gorillas
                  </span>

                </div>


                <div>

                  <strong>
                    02
                  </strong>

                  <span>
                    Big Five Wildlife
                  </span>

                </div>


                <div>

                  <strong>
                    03
                  </strong>

                  <span>
                    Private Lodges
                  </span>

                </div>


              </div>


              <div className="destination-buttons">


                <Link
                  to="/destinations/uganda"
                  className="dark-link"
                >

                  Explore Uganda

                  <FiArrowRight />

                </Link>


                <Link
                  to="/destinations/rwanda"
                  className="dark-link"
                >

                  Explore Rwanda

                  <FiArrowRight />

                </Link>


              </div>


            </div>


            {/* DESTINATION VISUAL */}

            <div className="destination-visual">


              <div
                className="destination-image main-image"

                style={{
                  backgroundImage:
                    `url(${wildlife})`,
                }}
              />


              <div
                className="destination-image small-image"

                style={{
                  backgroundImage:
                    `url(${gorilla})`,
                }}
              />


              <div className="destination-caption">

                <FiMapPin />

                <span>
                  UGANDA · RWANDA
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

                by <em>
                  wilderness.
                </em>

              </h2>

            </div>


            <p>

              The right lodge can become part
              of the journey itself. We select
              intimate camps and lodges where
              architecture, service and landscape
              come together.

            </p>


          </div>


          <div className="lodge-feature">


            <div
              className="lodge-feature-image"

              style={{
                backgroundImage:
                  `url(${hero4})`,
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

                Hand-selected stays in Uganda
                and Rwanda, chosen for their
                setting, character and exceptional
                hospitality.

              </p>


              <Link
                to="/destinations"
              >

                Explore Safari Stays

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

                <em>
                  around you.
                </em>

              </h2>


              <p>

                We believe a safari should feel
                personal. Not rushed, predictable
                or built from a standard itinerary.

              </p>


            </div>


            <div className="why-list">


              <div className="why-item">

                <span>
                  01
                </span>

                <div>

                  <h3>
                    Private & Personal
                  </h3>

                  <p>

                    Your safari is shaped around
                    your pace, interests and travel
                    style.

                  </p>

                </div>

              </div>


              <div className="why-item">

                <span>
                  02
                </span>

                <div>

                  <h3>
                    Local Knowledge
                  </h3>

                  <p>

                    We know the landscapes,
                    communities and experiences
                    that make Uganda and Rwanda
                    special.

                  </p>

                </div>

              </div>


              <div className="why-item">

                <span>
                  03
                </span>

                <div>

                  <h3>
                    Exceptional Stays
                  </h3>

                  <p>

                    Every property is selected
                    for location, character and
                    genuine hospitality.

                  </p>

                </div>

              </div>


              <div className="why-item">

                <span>
                  04
                </span>

                <div>

                  <h3>
                    Seamless Planning
                  </h3>

                  <p>

                    From your first enquiry to
                    your final transfer, every
                    detail is carefully considered.

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

              “The kind of journey that stays
              with you long after you have
              returned home.”

            </blockquote>


            <span>
              A Nylora guest
            </span>


          </div>

        </div>

      </section>


      {/* ======================================================
          FINAL CALL TO ACTION
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

              <em>
                extraordinary journey.
              </em>

            </h2>


            <p>

              Tell us what inspires you.
              We'll take care of the rest.

            </p>


            <div className="cta-buttons">


              <Link
                to="/booking"
                className="cta-primary"
              >

                Start Planning

                <FiArrowUpRight />

              </Link>


              <Link
                to="/contact"
                className="cta-secondary"
              >

                Speak With Nylora

              </Link>


            </div>


          </div>

        </div>

      </section>


    </main>
  );
}