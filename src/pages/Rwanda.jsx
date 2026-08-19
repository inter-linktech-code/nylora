import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FiArrowUpRight,
  FiMapPin,
  FiCompass,
  FiCamera,
  FiStar,
} from "react-icons/fi";

import "./Rwanda.css";

import heroImage from "../assets/volcanoes.jpg";
import gorillaImage from "../assets/gorilla.jpg";
import volcanoesImage from "../assets/volcanoes.jpg";
import goldenMonkeyImage from "../assets/golden-monkey.jpg";
import lakeImage from "../assets/hero4.jpg";

import bisateLodge from "../assets/bisate-lodge.jpg";
import bwindiLodge from "../assets/bwindi-lodge.jpg";
import lakeMburoLodge from "../assets/lake-mburo-lodge.jpg";

export default function Rwanda() {
  const experiences = [
    {
      image: gorillaImage,
      number: "01",
      title: "Gorilla Trekking",
      location: "Volcanoes National Park",
      text: "Enter the misty Virunga landscape for one of Africa's most profound wildlife encounters.",
    },
    {
      image: volcanoesImage,
      number: "02",
      title: "Volcano Country",
      location: "Virunga Mountains",
      text: "Explore dramatic volcanic landscapes where forested mountains rise above the Rwandan countryside.",
    },
    {
      image: goldenMonkeyImage,
      number: "03",
      title: "Golden Monkeys",
      location: "Volcanoes National Park",
      text: "Meet Rwanda's charismatic golden monkeys as they move through the bamboo forests of the Virungas.",
    },
    {
      image: lakeImage,
      number: "04",
      title: "The Quiet Rwanda",
      location: "Lakes & Highlands",
      text: "Discover a slower side of Rwanda through beautiful lakes, green hills and intimate countryside experiences.",
    },
  ];

  const lodges = [
    {
      image: bisateLodge,
      title: "Bisate Lodge",
      location: "Volcanoes",
      text: "An extraordinary forest retreat overlooking the volcanic peaks of northern Rwanda.",
    },
    {
      image: bwindiLodge,
      title: "Forest Retreat",
      location: "Gorilla Country",
      text: "A tranquil base for travellers seeking privacy, comfort and proximity to the forest.",
    },
    {
      image: lakeMburoLodge,
      title: "Lakeside Escape",
      location: "Rwanda",
      text: "A relaxed wilderness stay for those wanting to combine adventure with time to simply breathe.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Rwanda Safaris | Gorilla Trekking & Luxury Rwanda Journeys |
          Nylora Safaris
        </title>

        <meta
          name="description"
          content="Explore Rwanda with Nylora Safaris. Discover mountain gorillas, Volcanoes National Park, golden monkeys, luxury lodges and bespoke journeys through Rwanda."
        />

        <meta
          name="keywords"
          content="Rwanda safari, Rwanda safaris, gorilla trekking Rwanda, Volcanoes National Park, luxury Rwanda safari, Bisate Lodge, Rwanda gorilla safari"
        />
      </Helmet>

      <main className="rwanda-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="rwanda-hero">

          <img
            src={heroImage}
            alt="Volcanoes of Rwanda"
            className="rwanda-hero-image"
          />

          <div className="rwanda-hero-overlay" />

          <div className="rwanda-hero-content">

            <div className="rwanda-hero-kicker">
              <span />
              RWANDA · EAST AFRICA
              <span />
            </div>

            <h1>
              Land of a
              <br />
              <em>thousand hills.</em>
            </h1>

            <p>
              A refined East African escape of volcanic mountains,
              ancient forests, extraordinary primates and beautifully
              intimate experiences.
            </p>

            <div className="rwanda-hero-actions">

              <Link
                to="/booking"
                className="rwanda-primary-button"
              >
                Plan Your Rwanda Safari
                <FiArrowUpRight />
              </Link>

              <a
                href="#rwanda-experiences"
                className="rwanda-text-link"
              >
                Discover Rwanda
                <span>↓</span>
              </a>

            </div>

          </div>

          <div className="rwanda-hero-caption">
            <span>01</span>
            <p>
              Mountain mist.
              <br />
              Extraordinary encounters.
            </p>
          </div>

        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="rwanda-introduction">

          <div className="rwanda-container">

            <div className="rwanda-intro-grid">

              <div className="rwanda-intro-label">
                <span>WHY RWANDA</span>
                <div />
              </div>

              <div className="rwanda-intro-content">

                <p className="rwanda-eyebrow">
                  Safari at a slower pace.
                </p>

                <h2>
                  Small country.
                  <br />
                  <em>Extraordinary depth.</em>
                </h2>

                <p className="rwanda-lead">
                  Rwanda is intimate, elegant and remarkably diverse.
                </p>

                <p>
                  Its green hills, volcanic peaks and ancient forests
                  create a landscape that feels almost cinematic.
                  Yet it is the quality of the encounters that makes
                  Rwanda truly unforgettable.
                </p>

                <p>
                  From gorilla trekking among the Virunga Mountains
                  to golden monkey encounters and peaceful stays in
                  the countryside, Rwanda invites travellers to slow
                  down and experience East Africa differently.
                </p>

                <Link
                  to="/booking"
                  className="rwanda-inline-link"
                >
                  Begin planning
                  <FiArrowUpRight />
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            FACTS
        ===================================================== */}

        <section className="rwanda-facts">

          <div className="rwanda-container">

            <div className="rwanda-facts-grid">

              <div className="rwanda-fact">
                <FiMapPin />
                <strong>1</strong>
                <span>Iconic Gorilla Region</span>
              </div>

              <div className="rwanda-fact">
                <FiCompass />
                <strong>4</strong>
                <span>Distinct Landscapes</span>
              </div>

              <div className="rwanda-fact">
                <FiCamera />
                <strong>365</strong>
                <span>Days to Explore</span>
              </div>

              <div className="rwanda-fact">
                <FiStar />
                <strong>01</strong>
                <span>Journey Designed Around You</span>
              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            EXPERIENCES
        ===================================================== */}

        <section
          className="rwanda-experiences"
          id="rwanda-experiences"
        >

          <div className="rwanda-container">

            <div className="rwanda-section-heading">

              <div>

                <span className="rwanda-section-kicker">
                  SIGNATURE EXPERIENCES
                </span>

                <h2>
                  Rwanda is best
                  <br />
                  <em>experienced slowly.</em>
                </h2>

              </div>

              <p>
                We design journeys around meaningful experiences,
                extraordinary landscapes and time well spent.
              </p>

            </div>

            <div className="rwanda-experience-grid">

              {experiences.map((experience) => (
                <article
                  className="rwanda-experience-card"
                  key={experience.number}
                >

                  <div className="rwanda-experience-image">

                    <img
                      src={experience.image}
                      alt={experience.title}
                    />

                    <span className="rwanda-experience-number">
                      {experience.number}
                    </span>

                  </div>

                  <div className="rwanda-experience-content">

                    <span>
                      {experience.location}
                    </span>

                    <h3>
                      {experience.title}
                    </h3>

                    <p>
                      {experience.text}
                    </p>

                    <Link to="/booking">
                      Explore experience
                      <FiArrowUpRight />
                    </Link>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            GORILLA FEATURE
        ===================================================== */}

        <section className="rwanda-feature">

          <div className="rwanda-feature-content">

            <span className="rwanda-section-kicker">
              THE SIGNATURE EXPERIENCE
            </span>

            <p className="rwanda-feature-eyebrow">
              Meet the mountain gorillas.
            </p>

            <h2>
              Into the
              <br />
              <em>Virunga mist.</em>
            </h2>

            <p>
              Rwanda offers one of the world's most extraordinary
              wildlife experiences: walking through the volcanic
              forests in search of a mountain gorilla family.
            </p>

            <p>
              The journey is physical, intimate and deeply moving.
              There are no shortcuts to the experience — and that
              is precisely what makes it special.
            </p>

            <Link
              to="/booking"
              className="rwanda-primary-button"
            >
              Plan a Gorilla Trek
              <FiArrowUpRight />
            </Link>

          </div>

          <div className="rwanda-feature-image">

            <img
              src={gorillaImage}
              alt="Mountain gorilla in Rwanda"
            />

          </div>

        </section>

        {/* =====================================================
            LODGES
        ===================================================== */}

        <section className="rwanda-lodges">

          <div className="rwanda-container">

            <div className="rwanda-section-heading">

              <div>

                <span className="rwanda-section-kicker">
                  STAY BEAUTIFULLY
                </span>

                <h2>
                  Sleep beside
                  <br />
                  <em>the wilderness.</em>
                </h2>

              </div>

              <p>
                Your accommodation is part of the journey. We
                select places that combine character, comfort,
                setting and exceptional hospitality.
              </p>

            </div>

            <div className="rwanda-lodge-grid">

              {lodges.map((lodge) => (
                <article
                  className="rwanda-lodge-card"
                  key={lodge.title}
                >

                  <div className="rwanda-lodge-image">

                    <img
                      src={lodge.image}
                      alt={lodge.title}
                    />

                  </div>

                  <div className="rwanda-lodge-content">

                    <span>{lodge.location}</span>

                    <h3>{lodge.title}</h3>

                    <p>{lodge.text}</p>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            JOURNEY
        ===================================================== */}

        <section className="rwanda-journey">

          <div className="rwanda-container">

            <div className="rwanda-journey-grid">

              <div>

                <span className="rwanda-section-kicker">
                  A SAMPLE JOURNEY
                </span>

                <h2>
                  Hills,
                  <br />
                  <em>forest & fire.</em>
                </h2>

              </div>

              <div className="rwanda-journey-list">

                <div>
                  <span>01</span>
                  <strong>Kigali</strong>
                  <p>
                    Begin with Rwanda's vibrant capital and
                    discover its culture, cuisine and history.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <strong>Volcanoes National Park</strong>
                  <p>
                    Trek into the Virunga forests for a gorilla
                    encounter.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <strong>Golden Monkey Forest</strong>
                  <p>
                    Explore the bamboo forests and meet the
                    charismatic golden monkeys.
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <strong>Rwandan Highlands</strong>
                  <p>
                    Finish slowly among beautiful hills and
                    peaceful countryside.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="rwanda-final-cta">

          <div className="rwanda-final-cta-overlay" />

          <div className="rwanda-final-cta-content">

            <span>
              YOUR RWANDA JOURNEY STARTS HERE
            </span>

            <h2>
              Come for the mountains.
              <br />
              <em>Stay for the feeling.</em>
            </h2>

            <p>
              Tell us what you want to experience. We will take
              care of the details.
            </p>

            <Link
              to="/booking"
              className="rwanda-light-button"
            >
              Begin Your Journey
              <FiArrowUpRight />
            </Link>

          </div>

        </section>

      </main>
    </>
  );
}