import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FiArrowUpRight,
  FiCompass,
  FiHeart,
  FiMapPin,
  FiShield,
  FiStar,
} from "react-icons/fi";

import "./About.css";

import heroImage from "../assets/hero4.jpg";
import storyImage from "../assets/wildlife.jpg";
import gorillaImage from "../assets/gorilla.jpg";
import lodgeImage from "../assets/lodge.jpg";

export default function About() {
  return (
    <>
      <Helmet>
        <title>
          About Nylora Safaris | Luxury Uganda & Rwanda Safaris
        </title>

        <meta
          name="description"
          content="Discover Nylora Safaris, a boutique safari company creating private luxury journeys through Uganda, Rwanda and East Africa."
        />

        <meta
          name="keywords"
          content="Uganda safaris, Rwanda safaris, luxury safari Uganda, gorilla trekking Rwanda, luxury lodges Uganda, private African safari"
        />
      </Helmet>

      <main className="about-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          className="about-hero"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="about-hero-overlay" />

          <div className="about-hero-content">
            <span className="eyebrow">THE NYLORA STORY</span>

            <h1>
              Travel deeper.
              <br />
              Experience Africa differently.
            </h1>

            <p>
              Bespoke journeys through Uganda, Rwanda and the
              wild heart of East Africa.
            </p>
          </div>

          <div className="hero-scroll">
            <span>SCROLL TO DISCOVER</span>
            <div className="scroll-line" />
          </div>
        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="about-intro section-padding">
          <div className="about-container">

            <div className="intro-label">
              <span>01</span>
              <p>ABOUT NYLORA</p>
            </div>

            <div className="intro-content">

              <span className="section-eyebrow">
                MORE THAN A SAFARI
              </span>

              <h2>
                Africa is not simply
                <br />
                somewhere you visit.
              </h2>

              <p className="intro-lead">
                It is somewhere you feel.
              </p>

              <p>
                Nylora Safaris creates private, carefully considered
                journeys for travellers who want to experience Africa
                beyond the ordinary.
              </p>

              <p>
                From the mist-covered mountains of Uganda and Rwanda
                to vast savannahs alive with wildlife, we connect
                extraordinary landscapes with exceptional hospitality,
                thoughtful planning and authentic local experiences.
              </p>

              <Link to="/booking" className="text-link">
                <span>PLAN YOUR JOURNEY</span>
                <FiArrowUpRight />
              </Link>

            </div>

          </div>
        </section>


        {/* =====================================================
            STORY IMAGE
        ===================================================== */}

        <section className="story-image-section">
          <div className="story-image-wrapper">
            <img
              src={storyImage}
              alt="Wildlife experience in Uganda"
            />

            <div className="image-caption">
              <span>UGANDA</span>
              <p>
                Wild landscapes. Quiet moments.
                <br />
                Extraordinary encounters.
              </p>
            </div>
          </div>
        </section>


        {/* =====================================================
            OUR APPROACH
        ===================================================== */}

        <section className="approach-section section-padding">
          <div className="about-container">

            <div className="approach-heading">

              <span className="section-eyebrow">
                OUR APPROACH
              </span>

              <h2>
                Thoughtfully designed.
                <br />
                Personally experienced.
              </h2>

            </div>


            <div className="approach-grid">

              <article className="approach-card">

                <span className="card-number">01</span>

                <div className="card-icon">
                  <FiCompass />
                </div>

                <h3>
                  Bespoke Journeys
                </h3>

                <p>
                  No two travellers are the same. Every Nylora
                  itinerary is shaped around your interests, pace,
                  style and sense of adventure.
                </p>

              </article>


              <article className="approach-card">

                <span className="card-number">02</span>

                <div className="card-icon">
                  <FiHeart />
                </div>

                <h3>
                  Genuine Experiences
                </h3>

                <p>
                  We seek experiences that allow you to connect
                  with wildlife, landscapes, communities and the
                  people who make East Africa extraordinary.
                </p>

              </article>


              <article className="approach-card">

                <span className="card-number">03</span>

                <div className="card-icon">
                  <FiStar />
                </div>

                <h3>
                  Exceptional Stays
                </h3>

                <p>
                  From intimate wilderness camps to elegant
                  lodges, we carefully select places that become
                  part of the journey rather than simply somewhere
                  to sleep.
                </p>

              </article>


              <article className="approach-card">

                <span className="card-number">04</span>

                <div className="card-icon">
                  <FiShield />
                </div>

                <h3>
                  Seamless Planning
                </h3>

                <p>
                  From your first enquiry to your return home,
                  our role is to make your journey feel effortless,
                  considered and beautifully organised.
                </p>

              </article>

            </div>

          </div>
        </section>


        {/* =====================================================
            UGANDA / RWANDA
        ===================================================== */}

        <section className="destinations-story section-padding">

          <div className="about-container">

            <div className="destination-intro">

              <span className="section-eyebrow">
                TWO EXTRAORDINARY COUNTRIES
              </span>

              <h2>
                Uganda & Rwanda
              </h2>

              <p>
                Two destinations. Two distinct personalities.
                One remarkable corner of Africa.
              </p>

            </div>


            <div className="country-grid">

              {/* Uganda */}

              <article className="country-card">

                <div className="country-image">
                  <img
                    src={storyImage}
                    alt="Uganda safari landscape"
                  />
                </div>

                <div className="country-content">

                  <span>01 / UGANDA</span>

                  <h3>
                    The Pearl of Africa
                  </h3>

                  <p>
                    Uganda brings together extraordinary
                    biodiversity, dramatic landscapes and some
                    of Africa's most intimate wildlife encounters.
                  </p>

                  <ul>
                    <li>Gorilla trekking</li>
                    <li>Chimpanzee experiences</li>
                    <li>Big Five safaris</li>
                    <li>Nile adventures</li>
                    <li>Luxury wilderness lodges</li>
                  </ul>

                  <Link
                    to="/destinations"
                    className="country-link"
                  >
                    Explore Uganda
                    <FiArrowUpRight />
                  </Link>

                </div>

              </article>


              {/* Rwanda */}

              <article className="country-card">

                <div className="country-image">
                  <img
                    src={gorillaImage}
                    alt="Gorilla trekking in Rwanda"
                  />
                </div>

                <div className="country-content">

                  <span>02 / RWANDA</span>

                  <h3>
                    Land of a Thousand Hills
                  </h3>

                  <p>
                    Rwanda combines breathtaking mountain
                    scenery, remarkable conservation and some
                    of the world's most memorable primate
                    encounters.
                  </p>

                  <ul>
                    <li>Mountain gorilla trekking</li>
                    <li>Golden monkey experiences</li>
                    <li>Akagera wildlife safaris</li>
                    <li>Nyungwe Forest</li>
                    <li>Luxury mountain retreats</li>
                  </ul>

                  <Link
                    to="/destinations"
                    className="country-link"
                  >
                    Explore Rwanda
                    <FiArrowUpRight />
                  </Link>

                </div>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            LODGE EXPERIENCE
        ===================================================== */}

        <section className="lodge-section">

          <div className="lodge-image">
            <img
              src={lodgeImage}
              alt="Luxury safari lodge"
            />
          </div>

          <div className="lodge-content">

            <span className="section-eyebrow">
              WHERE YOU STAY MATTERS
            </span>

            <h2>
              Your lodge is
              <br />
              part of the story.
            </h2>

            <p>
              Imagine waking to the sounds of the forest,
              watching elephants from a private terrace or
              enjoying dinner beneath an African sky.
            </p>

            <p>
              We choose properties for their setting,
              character, hospitality and ability to transform
              a beautiful safari into an unforgettable one.
            </p>

            <Link
              to="/luxury-lodges"
              className="outline-button"
            >
              <span>DISCOVER OUR LODGES</span>
              <FiArrowUpRight />
            </Link>

          </div>

        </section>


        {/* =====================================================
            VALUES
        ===================================================== */}

        <section className="values-section section-padding">

          <div className="about-container">

            <div className="values-heading">

              <span className="section-eyebrow">
                WHAT WE BELIEVE
              </span>

              <h2>
                Travel should leave
                <br />
                something behind.
              </h2>

            </div>


            <div className="values-list">

              <div className="value-item">

                <span>01</span>

                <div>
                  <h3>
                    Conservation
                  </h3>

                  <p>
                    Wildlife tourism can help protect the
                    places and species that make Africa unique.
                  </p>
                </div>

              </div>


              <div className="value-item">

                <span>02</span>

                <div>
                  <h3>
                    Community
                  </h3>

                  <p>
                    Meaningful travel should create value for
                    the communities that call these landscapes home.
                  </p>
                </div>

              </div>


              <div className="value-item">

                <span>03</span>

                <div>
                  <h3>
                    Authenticity
                  </h3>

                  <p>
                    We believe the most memorable moments
                    are often the simplest and most genuine.
                  </p>
                </div>

              </div>


              <div className="value-item">

                <span>04</span>

                <div>
                  <h3>
                    Excellence
                  </h3>

                  <p>
                    Every detail matters—from the first conversation
                    to the moment your journey comes to an end.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="about-cta">

          <div className="cta-overlay" />

          <div className="cta-content">

            <span className="section-eyebrow">
              YOUR AFRICA AWAITS
            </span>

            <h2>
              Where would you
              <br />
              like to go?
            </h2>

            <p>
              Tell us what you imagine.
              We'll help you turn it into a journey.
            </p>

            <Link
              to="/booking"
              className="cta-button"
            >
              <span>START PLANNING</span>
              <FiArrowUpRight />
            </Link>

          </div>

        </section>

      </main>
    </>
  );
}