import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FiArrowUpRight,
  FiClock,
  FiMapPin,
  FiUsers,
  FiCompass,
} from "react-icons/fi";

import "./Safaris.css";

/* =========================================================
   HERO
========================================================= */

import heroImage from "../assets/gorilla.jpg";

/* =========================================================
   UGANDA LODGES
========================================================= */

import bwindiLodge from "../assets/bwindi-lodge.jpg";
import mweyaLodge from "../assets/mweya-lodge.jpg";
import mihingoLodge from "../assets/mihingo-lodge.jpg";
import lakeMburoLodge from "../assets/lake-mburo-lodge.jpg";
import kibaleLodge from "../assets/kibale-lodge.jpg";

/* =========================================================
   RWANDA LODGES
========================================================= */

import bisateLodge from "../assets/bisate-lodge.jpg";

/* =========================================================
   UGANDA EXPERIENCES
========================================================= */

import bwindiGorilla from "../assets/gorilla.jpg";
import kibaleForest from "../assets/kibale.jpg";
import queenElizabeth from "../assets/queen.jpg";
import lakeMburo from "../assets/lake-mburo.jpg";

/* =========================================================
   RWANDA EXPERIENCES
========================================================= */

import volcanoesRwanda from "../assets/volcanoes.jpg";
import goldenMonkeys from "../assets/golden-monkey.jpg";

/* =========================================================
   SAFARI DATA
========================================================= */

const ugandaSafaris = [
  {
    id: "uganda-gorilla",
    number: "01",
    image: bwindiGorilla,
    lodge: bwindiLodge,
    country: "Uganda",
    location: "Bwindi Impenetrable Forest",
    title: "The Gorilla Encounter",
    subtitle: "A private journey into the mist",
    description:
      "Walk beneath the ancient canopy of Bwindi in search of one of the world's last remaining mountain gorilla families, followed by quiet evenings in the forest.",
    duration: "4 Days",
    travelers: "2–8 Guests",
    style: "Ultra Luxury",
    tag: "Signature Experience",
  },

  {
    id: "uganda-queen-elizabeth",
    number: "02",
    image: queenElizabeth,
    lodge: mweyaLodge,
    country: "Uganda",
    location: "Queen Elizabeth National Park",
    title: "Wild Uganda",
    subtitle: "Big game. Open savannah. Still waters.",
    description:
      "Experience Uganda's classic wildlife landscapes with game drives, dramatic scenery and intimate moments along the Kazinga Channel.",
    duration: "5 Days",
    travelers: "2–8 Guests",
    style: "Luxury Safari",
    tag: "Wildlife",
  },

  {
    id: "uganda-kibale",
    number: "03",
    image: kibaleForest,
    lodge: kibaleLodge,
    country: "Uganda",
    location: "Kibale Forest",
    title: "Into the Primate Kingdom",
    subtitle: "Chimpanzees beneath an ancient canopy",
    description:
      "Discover Kibale's extraordinary rainforest, home to chimpanzees and an exceptional diversity of primates, birds and forest life.",
    duration: "4 Days",
    travelers: "2–8 Guests",
    style: "Luxury Nature",
    tag: "Chimpanzee Trekking",
  },

  {
    id: "uganda-lake-mburo",
    number: "04",
    image: lakeMburo,
    lodge: lakeMburoLodge,
    country: "Uganda",
    location: "Lake Mburo National Park",
    title: "The Quiet Wilderness",
    subtitle: "A slower side of Uganda",
    description:
      "Trade the crowds for open plains, acacia woodland and peaceful lakeside landscapes. A refined wilderness escape close to Kampala.",
    duration: "3 Days",
    travelers: "2–6 Guests",
    style: "Private Escape",
    tag: "Short Escape",
  },

  {
    id: "uganda-mihingo",
    number: "05",
    image: mihingoLodge,
    lodge: mihingoLodge,
    country: "Uganda",
    location: "Lake Mburo Region",
    title: "Mihingo Wilderness",
    subtitle: "Luxury above the savannah",
    description:
      "A beautifully secluded wilderness retreat combining exceptional accommodation, wildlife encounters and unforgettable views across the Ugandan landscape.",
    duration: "3–4 Days",
    travelers: "2–6 Guests",
    style: "Boutique Luxury",
    tag: "Lodge Escape",
  },
];

const rwandaSafaris = [
  {
    id: "rwanda-gorilla",
    number: "01",
    image: volcanoesRwanda,
    lodge: bisateLodge,
    country: "Rwanda",
    location: "Volcanoes National Park",
    title: "The Volcanoes Journey",
    subtitle: "Gorillas beneath the Virungas",
    description:
      "Journey into Rwanda's dramatic volcanic highlands for an intimate gorilla trekking experience surrounded by mist-covered peaks and extraordinary hospitality.",
    duration: "4 Days",
    travelers: "2–6 Guests",
    style: "Ultra Luxury",
    tag: "Signature Experience",
  },

  {
    id: "rwanda-golden-monkeys",
    number: "02",
    image: goldenMonkeys,
    lodge: bisateLodge,
    country: "Rwanda",
    location: "Volcanoes National Park",
    title: "Golden Forest",
    subtitle: "A rare encounter in the Virungas",
    description:
      "Explore the bamboo forests of Volcanoes National Park in search of Rwanda's playful golden monkeys, with time to experience the landscapes around the Virunga range.",
    duration: "3 Days",
    travelers: "2–6 Guests",
    style: "Luxury Nature",
    tag: "Golden Monkeys",
  },

  {
    id: "rwanda-gorilla-luxury",
    number: "03",
    image: bisateLodge,
    lodge: bisateLodge,
    country: "Rwanda",
    location: "Volcanoes National Park",
    title: "Bisate & The Mountain Gorillas",
    subtitle: "A refined Rwanda wilderness retreat",
    description:
      "Pair an extraordinary gorilla trekking experience with one of Rwanda's most celebrated forest settings for a journey built around privacy, conservation and comfort.",
    duration: "4–5 Days",
    travelers: "2–6 Guests",
    style: "Ultra Luxury",
    tag: "Lodge & Gorilla",
  },
];

/* =========================================================
   SAFARI CARD
========================================================= */

function SafariCard({ safari }) {
  return (
    <article className="safari-card">
      <div className="safari-card-image">
        <img src={safari.image} alt={safari.title} />

        <div className="safari-card-overlay" />

        <span className="safari-card-number">
          {safari.number}
        </span>

        <span className="safari-card-tag">
          {safari.tag}
        </span>

        <div className="safari-card-location">
          <FiMapPin />
          <span>{safari.location}</span>
        </div>
      </div>

      <div className="safari-card-content">
        <div className="safari-card-country">
          {safari.country}
        </div>

        <h3>{safari.title}</h3>

        <p className="safari-card-subtitle">
          {safari.subtitle}
        </p>

        <p className="safari-card-description">
          {safari.description}
        </p>

        <div className="safari-card-meta">
          <span>
            <FiClock />
            {safari.duration}
          </span>

          <span>
            <FiUsers />
            {safari.travelers}
          </span>

          <span>
            <FiCompass />
            {safari.style}
          </span>
        </div>

        <div className="safari-card-footer">
          <Link
            to={`/booking?tour=${safari.id}`}
            className="safari-card-link"
          >
            <span>Plan this journey</span>
            <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Safaris() {
  return (
    <>
      <Helmet>
        <title>
          Luxury Safaris in Uganda & Rwanda | Nylora Safaris
        </title>

        <meta
          name="description"
          content="Discover bespoke luxury safaris in Uganda and Rwanda with Nylora Safaris. Gorilla trekking, chimpanzee experiences, Big Five wildlife, private lodges and unforgettable East African journeys."
        />

        <meta
          name="keywords"
          content="Uganda safaris, Rwanda safaris, luxury Uganda safari, luxury Rwanda safari, gorilla trekking Uganda, Rwanda gorilla trekking, Bwindi safari, Volcanoes National Park, Kibale safari, Queen Elizabeth safari"
        />
      </Helmet>

      <main className="safaris-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="safaris-hero">
          <img
            src={heroImage}
            alt="Mountain gorilla in Uganda"
            className="safaris-hero-image"
          />

          <div className="safaris-hero-wash" />

          <div className="safaris-hero-content">

            <div className="safaris-eyebrow">
              <span />
              UGANDA · RWANDA
              <span />
            </div>

            <h1>
              Journeys Worth
              <em> Remembering.</em>
            </h1>

            <p>
              Bespoke safari experiences shaped around
              extraordinary wildlife, remarkable landscapes
              and beautiful places to stay.
            </p>

            <div className="safaris-hero-actions">

              <a
                href="#uganda"
                className="safaris-primary-button"
              >
                Explore the journeys
                <FiArrowUpRight />
              </a>

              <Link
                to="/booking"
                className="safaris-text-button"
              >
                Plan a private safari
              </Link>

            </div>

          </div>

          <div className="safaris-hero-bottom">

            <span>
              DISCOVER EAST AFRICA DIFFERENTLY
            </span>

            <span className="hero-line" />

            <span>
              SCROLL TO EXPLORE
            </span>

          </div>
        </section>

        {/* =================================================
            INTRO
        ================================================= */}

        <section className="safaris-intro">

          <div className="safaris-container">

            <div className="intro-label">
              THE NYLORA COLLECTION
            </div>

            <div className="intro-grid">

              <h2>
                Not simply a safari.
                <br />
                <em>A way of seeing Africa.</em>
              </h2>

              <div className="intro-copy">

                <p>
                  We believe the best journeys are not measured
                  by how many places you visit, but by how deeply
                  you experience them.
                </p>

                <p>
                  Nylora creates private journeys through Uganda
                  and Rwanda where extraordinary wildlife meets
                  thoughtful hospitality, beautiful lodges and
                  the freedom to travel at your own pace.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            UGANDA
        ================================================= */}

        <section
          className="safari-destination-section"
          id="uganda"
        >

          <div className="safaris-container">

            <div className="destination-heading">

              <div>
                <span className="destination-kicker">
                  DESTINATION 01
                </span>

                <h2>
                  Uganda
                </h2>

                <p>
                  The Pearl of Africa
                </p>
              </div>

              <div className="destination-description">

                <p>
                  From mist-covered Bwindi to the open plains
                  of Queen Elizabeth, Uganda rewards travellers
                  who want wildlife, wilderness and genuine
                  encounters far from the ordinary.
                </p>

                <Link to="/booking">
                  Create a Uganda journey
                  <FiArrowUpRight />
                </Link>

              </div>

            </div>

            <div className="safaris-grid">

              {ugandaSafaris.map((safari) => (
                <SafariCard
                  key={safari.id}
                  safari={safari}
                />
              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            UGANDA LODGE FEATURE
        ================================================= */}

        <section className="lodge-feature">

          <div className="lodge-feature-image">
            <img
              src={bwindiLodge}
              alt="Luxury lodge in Bwindi"
            />
          </div>

          <div className="lodge-feature-content">

            <span className="destination-kicker">
              WHERE YOU STAY
            </span>

            <h2>
              Sleep somewhere
              <em> unforgettable.</em>
            </h2>

            <p>
              Your accommodation is part of the journey.
              We select intimate lodges and wilderness
              retreats that allow you to experience Uganda
              and Rwanda without compromising on comfort.
            </p>

            <div className="lodge-feature-details">

              <div>
                <strong>01</strong>
                <span>Private & intimate</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Wildlife-led locations</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Exceptional hospitality</span>
              </div>

            </div>

            <Link
              to="/luxury-lodges"
              className="safaris-outline-button"
            >
              Discover our lodges
              <FiArrowUpRight />
            </Link>

          </div>

        </section>

        {/* =================================================
            RWANDA
        ================================================= */}

        <section
          className="safari-destination-section rwanda-section"
          id="rwanda"
        >

          <div className="safaris-container">

            <div className="destination-heading">

              <div>
                <span className="destination-kicker">
                  DESTINATION 02
                </span>

                <h2>
                  Rwanda
                </h2>

                <p>
                  Land of a Thousand Hills
                </p>
              </div>

              <div className="destination-description">

                <p>
                  Rwanda is intimate, elegant and extraordinary.
                  Journey through volcanic landscapes, ancient
                  forests and some of Africa's most remarkable
                  conservation areas.
                </p>

                <Link to="/booking">
                  Create a Rwanda journey
                  <FiArrowUpRight />
                </Link>

              </div>

            </div>

            <div className="safaris-grid">

              {rwandaSafaris.map((safari) => (
                <SafariCard
                  key={safari.id}
                  safari={safari}
                />
              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="safaris-final-cta">

          <div className="safaris-final-image">
            <img
              src={volcanoesRwanda}
              alt="Volcanoes of Rwanda"
            />
          </div>

          <div className="safaris-final-overlay" />

          <div className="safaris-final-content">

            <span className="destination-kicker">
              YOUR JOURNEY STARTS HERE
            </span>

            <h2>
              Tell us how you
              <br />
              <em>want to experience Africa.</em>
            </h2>

            <p>
              Share your dates, interests and travel style.
              We'll shape the journey around you.
            </p>

            <Link
              to="/booking"
              className="safaris-primary-button"
            >
              Begin your journey
              <FiArrowUpRight />
            </Link>

          </div>

        </section>

      </main>
    </>
  );
}