import { Link } from "react-router-dom";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";

import "./GorillaTrekking.css";

import gorillaHero from "../assets/gorilla.jpg";

export default function GorillaTrekking() {
  return (
    <main className="gorilla-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="gorilla-hero"
        style={{ backgroundImage: `url(${gorillaHero})` }}
      >

        <div className="gorilla-hero-overlay"></div>

        <div className="gorilla-hero-content">

          <span className="gorilla-eyebrow">
            GORILLA & GOLDEN MONKEY TREKKING
          </span>

          <h1>
            Into the wild.
            <br />
            <em>Closer to nature.</em>
          </h1>

          <p>
            Journey into the ancient forests of Uganda and Rwanda
            for intimate encounters with mountain gorillas and
            golden monkeys in their natural habitat.
          </p>

          <div className="gorilla-hero-actions">

            <Link
              to="/booking"
              className="gorilla-primary-btn"
            >
              Plan Your Trek
              <FiArrowUpRight />
            </Link>

            <a
              href="#choose-destination"
              className="gorilla-secondary-btn"
            >
              Explore Trekking
              <FiChevronDown />
            </a>

          </div>

        </div>

        <div className="gorilla-hero-location">
          <span>UGANDA</span>
          <span>RWANDA</span>
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="gorilla-intro">

        <div className="gorilla-container">

          <div className="gorilla-intro-label">
            <span>01</span>
            <span>THE EXPERIENCE</span>
          </div>

          <div className="gorilla-intro-content">

            <h2>
              An encounter you
              <br />
              <em>never forget.</em>
            </h2>

            <div className="gorilla-intro-copy">

              <p>
                Few wildlife experiences compare with standing quietly
                in the forest as a family of mountain gorillas emerges
                from the vegetation.
              </p>

              <p>
                Nylora creates carefully considered trekking journeys
                through Uganda and Rwanda, combining exceptional guiding,
                beautiful lodges and time in some of East Africa's most
                remarkable landscapes.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DESTINATION CHOICE
      ===================================================== */}

      <section
        className="gorilla-destination-section"
        id="choose-destination"
      >

        <div className="gorilla-container">

          <div className="gorilla-section-heading">

            <span>CHOOSE YOUR FOREST</span>

            <h2>
              Two countries.
              <br />
              <em>One extraordinary encounter.</em>
            </h2>

            <p>
              Trekking in Uganda and Rwanda offers different landscapes,
              styles of travel and safari experiences. We help you choose
              the destination that best fits your journey.
            </p>

          </div>


          <div className="gorilla-destination-grid">

            {/* UGANDA */}

            <article className="gorilla-destination-card uganda-card">

              <div className="gorilla-card-image">

                <img
                  src={gorillaHero}
                  alt="Mountain gorilla in Uganda"
                />

                <div className="gorilla-card-image-overlay"></div>

                <span className="gorilla-card-number">
                  01
                </span>

              </div>

              <div className="gorilla-card-content">

                <span className="gorilla-card-country">
                  UGANDA
                </span>

                <h3>
                  Bwindi
                  <br />
                  Impenetrable Forest
                </h3>

                <p>
                  A deeply immersive trekking experience through one
                  of Africa's oldest forests, with opportunities to
                  combine gorilla trekking with wildlife, primates,
                  community experiences and longer safari journeys.
                </p>

                <div className="gorilla-card-details">

                  <div>
                    <span>REGION</span>
                    <strong>Southwestern Uganda</strong>
                  </div>

                  <div>
                    <span>EXPERIENCE</span>
                    <strong>Gorilla Trekking</strong>
                  </div>

                </div>

                <Link
                  to="/destinations/uganda"
                  className="gorilla-card-link"
                >
                  Explore Uganda
                  <FiArrowUpRight />
                </Link>

              </div>

            </article>


            {/* RWANDA */}

            <article className="gorilla-destination-card rwanda-card">

              <div className="gorilla-card-image">

                <img
                  src={gorillaHero}
                  alt="Mountain gorilla in Rwanda"
                />

                <div className="gorilla-card-image-overlay"></div>

                <span className="gorilla-card-number">
                  02
                </span>

              </div>

              <div className="gorilla-card-content">

                <span className="gorilla-card-country">
                  RWANDA
                </span>

                <h3>
                  Volcanoes
                  <br />
                  National Park
                </h3>

                <p>
                  Trek beneath the dramatic Virunga volcanoes in
                  Rwanda's celebrated gorilla country, ideal for
                  travellers seeking a refined short safari combined
                  with exceptional lodges and seamless travel.
                </p>

                <div className="gorilla-card-details">

                  <div>
                    <span>REGION</span>
                    <strong>Northern Rwanda</strong>
                  </div>

                  <div>
                    <span>EXPERIENCE</span>
                    <strong>Gorilla Trekking</strong>
                  </div>

                </div>

                <Link
                  to="/destinations/rwanda"
                  className="gorilla-card-link"
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
          GOLDEN MONKEY
      ===================================================== */}

      <section className="golden-monkey-section">

        <div className="gorilla-container">

          <div className="golden-monkey-grid">

            <div className="golden-monkey-content">

              <span className="gorilla-eyebrow">
                BEYOND GORILLAS
              </span>

              <h2>
                Meet the
                <br />
                <em>golden monkeys.</em>
              </h2>

              <p>
                The forests of the Virunga region are also home to
                the charismatic golden monkey, an endangered primate
                found among the bamboo-covered slopes of the mountains.
              </p>

              <p>
                Add a golden monkey trek to your Rwanda or Uganda
                journey for another intimate encounter with the
                extraordinary wildlife of the Albertine Rift.
              </p>

              <Link
                to="/booking"
                className="gorilla-text-link"
              >
                Build a primate journey
                <FiArrowUpRight />
              </Link>

            </div>

            <div className="golden-monkey-stat">

              <span>01</span>

              <strong>
                Gorilla
                <br />
                trekking
              </strong>

              <small>
                Uganda & Rwanda
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY NYLORA
      ===================================================== */}

      <section className="gorilla-why">

        <div className="gorilla-container">

          <div className="gorilla-section-heading">

            <span>THE NYLORA APPROACH</span>

            <h2>
              Your trek,
              <br />
              <em>beautifully considered.</em>
            </h2>

          </div>


          <div className="gorilla-features">

            <div className="gorilla-feature">

              <span>01</span>

              <h3>
                Expert local guides
              </h3>

              <p>
                Experienced guides who understand the forests,
                wildlife and rhythms of the region.
              </p>

            </div>


            <div className="gorilla-feature">

              <span>02</span>

              <h3>
                Exceptional lodges
              </h3>

              <p>
                Stay in carefully selected properties that make
                the journey as memorable as the trek itself.
              </p>

            </div>


            <div className="gorilla-feature">

              <span>03</span>

              <h3>
                Tailored journeys
              </h3>

              <p>
                Combine trekking with wildlife, landscapes,
                culture and relaxation across Uganda and Rwanda.
              </p>

            </div>


            <div className="gorilla-feature">

              <span>04</span>

              <h3>
                Responsible travel
              </h3>

              <p>
                Travel with respect for wildlife, communities
                and the fragile ecosystems that make these
                encounters possible.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="gorilla-final-cta">

        <div className="gorilla-final-overlay"></div>

        <div className="gorilla-final-content">

          <span>
            YOUR FOREST IS WAITING
          </span>

          <h2>
            Where would you
            <br />
            <em>like to trek?</em>
          </h2>

          <p>
            Tell us what you want to experience and we'll design
            a private journey through Uganda or Rwanda around you.
          </p>

          <Link
            to="/booking"
            className="gorilla-primary-btn"
          >
            Begin Your Journey
            <FiArrowUpRight />
          </Link>

        </div>

      </section>

    </main>
  );
}