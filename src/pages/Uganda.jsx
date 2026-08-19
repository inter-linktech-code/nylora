import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FiArrowUpRight,
  FiMapPin,
  FiCompass,
  FiCamera,
  FiUsers,
} from "react-icons/fi";

import "./Uganda.css";

import heroImage from "../assets/hero4.jpg";
import gorillaImage from "../assets/gorilla.jpg";
import kibaleImage from "../assets/kibale.jpg";
import queenImage from "../assets/queen.jpg";
import lakeMburoImage from "../assets/lake-mburo.jpg";

import bwindiLodge from "../assets/bwindi-lodge.jpg";
import mweyaLodge from "../assets/mweya-lodge.jpg";
import mihingoLodge from "../assets/mihingo-lodge.jpg";
import kibaleLodge from "../assets/kibale-lodge.jpg";

export default function Uganda() {
  const experiences = [
    {
      image: gorillaImage,
      number: "01",
      title: "Gorilla Trekking",
      location: "Bwindi Impenetrable Forest",
      text: "Step quietly into one of Africa's oldest forests for an extraordinary encounter with a mountain gorilla family.",
    },
    {
      image: kibaleImage,
      number: "02",
      title: "Chimpanzee Tracking",
      location: "Kibale Forest",
      text: "Follow expert trackers through ancient rainforest in search of chimpanzees and the remarkable primates of Kibale.",
    },
    {
      image: queenImage,
      number: "03",
      title: "Classic Safari",
      location: "Queen Elizabeth National Park",
      text: "Explore open savannah, crater lakes and wildlife-rich plains where elephants, lions and buffalo roam.",
    },
    {
      image: lakeMburoImage,
      number: "04",
      title: "Wild Uganda",
      location: "Lake Mburo",
      text: "Slow down among rolling landscapes, zebras and antelope on an intimate safari experience away from the crowds.",
    },
  ];

  const lodges = [
    {
      image: bwindiLodge,
      title: "Bwindi Forest Lodge",
      location: "Bwindi",
      text: "A peaceful forest retreat designed around the extraordinary landscape of southwestern Uganda.",
    },
    {
      image: mweyaLodge,
      title: "Mweya Safari Lodge",
      location: "Queen Elizabeth",
      text: "A classic safari base overlooking the Kazinga Channel and the wildlife-rich plains beyond.",
    },
    {
      image: mihingoLodge,
      title: "Mihingo Lodge",
      location: "Lake Mburo",
      text: "An atmospheric lodge surrounded by wilderness, rock formations and the quiet beauty of Lake Mburo.",
    },
    {
      image: kibaleLodge,
      title: "Kibale Forest Lodge",
      location: "Kibale",
      text: "A refined rainforest retreat perfectly positioned for chimpanzee tracking and forest exploration.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Uganda Safaris | Gorilla Trekking & Luxury Wildlife Journeys |
          Nylora Safaris
        </title>

        <meta
          name="description"
          content="Discover Uganda through bespoke luxury safaris, mountain gorilla trekking, chimpanzee tracking, wildlife adventures and exceptional lodges with Nylora Safaris."
        />

        <meta
          name="keywords"
          content="Uganda safari, Uganda safaris, gorilla trekking Uganda, Bwindi gorilla trekking, luxury Uganda safari, Uganda wildlife safari, Kibale chimpanzee trekking, Queen Elizabeth safari"
        />
      </Helmet>

      <main className="uganda-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="uganda-hero">

          <img
            src={heroImage}
            alt="Luxury safari landscape in Uganda"
            className="uganda-hero-image"
          />

          <div className="uganda-hero-overlay" />

          <div className="uganda-hero-content">

            <div className="uganda-hero-kicker">
              <span />
              UGANDA · EAST AFRICA
              <span />
            </div>

            <h1>
              The Pearl
              <br />
              <em>of Africa.</em>
            </h1>

            <p>
              A country of ancient forests, extraordinary wildlife,
              dramatic landscapes and some of Africa's most intimate
              safari experiences.
            </p>

            <div className="uganda-hero-actions">

              <Link
                to="/booking"
                className="uganda-primary-button"
              >
                Plan Your Uganda Safari
                <FiArrowUpRight />
              </Link>

              <a
                href="#uganda-experiences"
                className="uganda-text-link"
              >
                Explore Uganda
                <span>↓</span>
              </a>

            </div>

          </div>

          <div className="uganda-hero-caption">
            <span>01</span>
            <p>
              Wild landscapes.
              <br />
              Remarkable encounters.
            </p>
          </div>

        </section>

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}

        <section className="uganda-introduction">

          <div className="uganda-container">

            <div className="uganda-intro-grid">

              <div className="uganda-intro-label">
                <span>WHY UGANDA</span>
                <div />
              </div>

              <div className="uganda-intro-content">

                <p className="uganda-eyebrow">
                  Meet the mountain gorillas.
                </p>

                <h2>
                  Wild Africa,
                  <br />
                  <em>beautifully untamed.</em>
                </h2>

                <p className="uganda-lead">
                  Uganda is a destination for travellers who want
                  something deeper than a traditional safari.
                </p>

                <p>
                  Here, rainforest gives way to savannah, mist-covered
                  mountains rise above ancient forests and waterways
                  carry life through some of East Africa's most
                  spectacular landscapes.
                </p>

                <p>
                  From the quiet intensity of a gorilla encounter in
                  Bwindi to chimpanzees calling through the forests of
                  Kibale and elephants moving across Queen Elizabeth
                  National Park, Uganda rewards those who take the time
                  to look closer.
                </p>

                <Link
                  to="/booking"
                  className="uganda-inline-link"
                >
                  Begin planning
                  <FiArrowUpRight />
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            STATS
        ===================================================== */}

        <section className="uganda-facts">

          <div className="uganda-container">

            <div className="uganda-facts-grid">

              <div className="uganda-fact">
                <FiMapPin />
                <strong>10+</strong>
                <span>National Parks</span>
              </div>

              <div className="uganda-fact">
                <FiCompass />
                <strong>4</strong>
                <span>Signature Safari Regions</span>
              </div>

              <div className="uganda-fact">
                <FiCamera />
                <strong>365</strong>
                <span>Days of Discovery</span>
              </div>

              <div className="uganda-fact">
                <FiUsers />
                <strong>1</strong>
                <span>Journey Designed Around You</span>
              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            EXPERIENCES
        ===================================================== */}

        <section
          className="uganda-experiences"
          id="uganda-experiences"
        >

          <div className="uganda-container">

            <div className="uganda-section-heading">

              <div>
                <span className="uganda-section-kicker">
                  SIGNATURE EXPERIENCES
                </span>

                <h2>
                  Discover Uganda
                  <br />
                  <em>your way.</em>
                </h2>
              </div>

              <p>
                Every Nylora journey is carefully shaped around
                the experiences that matter most to you.
              </p>

            </div>

            <div className="uganda-experience-grid">

              {experiences.map((experience) => (
                <article
                  className="uganda-experience-card"
                  key={experience.number}
                >

                  <div className="uganda-experience-image">

                    <img
                      src={experience.image}
                      alt={experience.title}
                    />

                    <span className="uganda-experience-number">
                      {experience.number}
                    </span>

                  </div>

                  <div className="uganda-experience-content">

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

        <section className="uganda-feature">

          <div className="uganda-feature-image">

            <img
              src={gorillaImage}
              alt="Mountain gorilla in Bwindi"
            />

          </div>

          <div className="uganda-feature-content">

            <span className="uganda-section-kicker">
              THE EXPERIENCE
            </span>

            <p className="uganda-feature-eyebrow">
              Meet the mountain gorillas.
            </p>

            <h2>
              A moment you
              <br />
              <em>will never forget.</em>
            </h2>

            <p>
              Deep within Bwindi Impenetrable Forest, a carefully
              guided trek can lead you into the presence of one of
              the world's last populations of mountain gorillas.
            </p>

            <p>
              The experience is intimate, emotional and completely
              different from a conventional wildlife drive.
            </p>

            <Link
              to="/booking"
              className="uganda-primary-button"
            >
              Plan a Gorilla Trek
              <FiArrowUpRight />
            </Link>

          </div>

        </section>

        {/* =====================================================
            LODGES
        ===================================================== */}

        <section className="uganda-lodges">

          <div className="uganda-container">

            <div className="uganda-section-heading">

              <div>

                <span className="uganda-section-kicker">
                  STAY IN THE WILD
                </span>

                <h2>
                  Places to
                  <br />
                  <em>slow down.</em>
                </h2>

              </div>

              <p>
                We pair extraordinary landscapes with carefully
                selected lodges and intimate camps where the
                experience continues long after the day's safari.
              </p>

            </div>

            <div className="uganda-lodge-grid">

              {lodges.map((lodge) => (
                <article
                  className="uganda-lodge-card"
                  key={lodge.title}
                >

                  <div className="uganda-lodge-image">

                    <img
                      src={lodge.image}
                      alt={lodge.title}
                    />

                  </div>

                  <div className="uganda-lodge-content">

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
            ITINERARY
        ===================================================== */}

        <section className="uganda-itinerary">

          <div className="uganda-container">

            <div className="uganda-itinerary-grid">

              <div>

                <span className="uganda-section-kicker">
                  A SAMPLE JOURNEY
                </span>

                <h2>
                  Forests,
                  <br />
                  <em>savannah & soul.</em>
                </h2>

              </div>

              <div className="uganda-itinerary-list">

                <div>
                  <span>01</span>
                  <strong>Bwindi</strong>
                  <p>
                    Gorilla trekking and forest immersion.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <strong>Queen Elizabeth</strong>
                  <p>
                    Wildlife drives and the Kazinga Channel.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <strong>Kibale</strong>
                  <p>
                    Chimpanzee tracking through ancient rainforest.
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <strong>Lake Mburo</strong>
                  <p>
                    A slower safari among plains and woodland.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="uganda-final-cta">

          <div className="uganda-final-cta-overlay" />

          <div className="uganda-final-cta-content">

            <span>
              YOUR UGANDA JOURNEY STARTS HERE
            </span>

            <h2>
              Come for the wildlife.
              <br />
              <em>Leave with a story.</em>
            </h2>

            <p>
              Tell us what you imagine. We will create the journey
              around you.
            </p>

            <Link
              to="/booking"
              className="uganda-light-button"
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