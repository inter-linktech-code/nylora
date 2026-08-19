import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FiArrowUpRight,
  FiMapPin,
  FiCompass,
  FiCamera,
  FiHome,
} from "react-icons/fi";

import "./Destinations.css";

/* =========================================================
   HERO
   ========================================================= */

import heroImage from "../assets/hero4.jpg";

/* =========================================================
   UGANDA
   ========================================================= */

import ugandaGorilla from "../assets/gorilla.jpg";
import kibaleForest from "../assets/kibale.jpg";
import queenElizabeth from "../assets/queen.jpg";
import lakeMburo from "../assets/lake-mburo.jpg";

/* =========================================================
   RWANDA
   ========================================================= */

import rwandaVolcanoes from "../assets/volcanoes.jpg";
import goldenMonkeys from "../assets/golden-monkey.jpg";
import rwandaAkagera from "../assets/akagera.jpg";
import rwandaNyungwe from "../assets/nyungwe.jpg";

/* =========================================================
   LODGES
   ========================================================= */

import bwindiLodge from "../assets/bwindi-lodge.jpg";
import bisateLodge from "../assets/bisate-lodge.jpg";
import mweyaLodge from "../assets/mweya-lodge.jpg";
import mihingoLodge from "../assets/mihingo-lodge.jpg";
import kibaleLodge from "../assets/kibale-lodge.jpg";


export default function Destinations() {
  return (
    <>
      <Helmet>

        <title>
          Uganda & Rwanda Destinations | Nylora Safaris
        </title>

        <meta
          name="description"
          content="Explore Uganda and Rwanda with Nylora Safaris. Discover mountain gorillas, chimpanzees, Big Five safari, rainforest, volcanic landscapes, luxury lodges and unforgettable East African journeys."
        />

        <meta
          name="keywords"
          content="Uganda safaris, Rwanda safaris, Uganda gorilla trekking, Rwanda gorilla trekking, Bwindi, Volcanoes National Park, Akagera, Nyungwe, Kibale, Queen Elizabeth National Park, luxury safari Uganda, luxury safari Rwanda"
        />

      </Helmet>


      <main className="destinations-page">


        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="destinations-hero">

          <img
            src={heroImage}
            alt="Wild landscapes of East Africa"
            className="destinations-hero-image"
          />

          <div className="destinations-hero-overlay" />

          <div className="destinations-hero-content">

            <span className="eyebrow">
              UGANDA · RWANDA · EAST AFRICA
            </span>

            <h1>
              Two countries.
              <br />
              <em>One extraordinary journey.</em>
            </h1>

            <p>
              From Uganda's ancient forests and sweeping savannahs
              to Rwanda's volcanic mountains and immaculate
              wilderness, discover East Africa through journeys
              designed around the way you want to travel.
            </p>

            <div className="hero-actions">

              <Link
                to="/booking"
                className="destination-primary-button"
              >
                <span>Plan Your Journey</span>
                <FiArrowUpRight />
              </Link>

              <a
                href="#uganda"
                className="destination-text-link"
              >
                Explore destinations
                <FiArrowUpRight />
              </a>

            </div>

          </div>

        </section>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="destinations-introduction">

          <div className="destination-container">

            <div className="intro-grid">

              <div className="intro-label">
                <span>THE NYLORA APPROACH</span>
              </div>

              <div className="intro-content">

                <h2>
                  Africa is not one experience.
                  <br />
                  <span>Neither should your safari be.</span>
                </h2>

                <p>
                  Uganda and Rwanda sit close together on the map,
                  yet each reveals a very different side of East
                  Africa. Uganda offers vast wilderness, rainforest,
                  rivers, lakes and an extraordinary diversity of
                  wildlife. Rwanda brings dramatic volcanic scenery,
                  intimate wildlife encounters and a remarkably
                  compact journey between its major experiences.
                </p>

                <p>
                  At Nylora, we do not believe in simply moving
                  travellers from one attraction to another. We
                  create journeys with rhythm — combining wildlife,
                  walking, forest, culture, beautiful places to stay
                  and time to simply take in where you are.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            UGANDA
        ===================================================== */}

        <section
          className="country-section country-uganda"
          id="uganda"
        >

          <div className="destination-container">

            <div className="country-heading">

              <div>

                <span className="country-number">
                  01
                </span>

                <span className="country-kicker">
                  THE PEARL OF AFRICA
                </span>

                <h2>
                  Uganda
                </h2>

              </div>

              <p>
                A country of extraordinary contrasts — ancient
                rainforests, open savannah, crater lakes, mighty
                rivers and some of Africa's most remarkable primate
                encounters.
              </p>

            </div>


            {/* FEATURE */}

            <div className="country-feature">

              <div className="country-feature-image">

                <img
                  src={ugandaGorilla}
                  alt="Mountain gorilla in Uganda"
                />

              </div>

              <div className="country-feature-content">

                <span className="small-label">
                  WHY UGANDA
                </span>

                <h3>
                  Wild, intimate and wonderfully diverse.
                </h3>

                <p>
                  Uganda is one of East Africa's most rewarding
                  destinations for travellers who want more than a
                  traditional game drive. In a single journey, it is
                  possible to move from the misty forests of Bwindi
                  and Kibale to the open plains of Queen Elizabeth,
                  then continue north towards the immense wilderness
                  of Murchison Falls.
                </p>

                <p>
                  The country is particularly compelling for
                  travellers who want to combine mountain gorilla
                  trekking with chimpanzee tracking, classic
                  wildlife, scenic drives and time in beautiful
                  wilderness lodges.
                </p>

                <Link
                  to="/destinations/uganda"
                  className="inline-link"
                >
                  Discover Uganda
                  <FiArrowUpRight />
                </Link>

              </div>

            </div>


            {/* UGANDA EXPERIENCES */}

            <div className="section-heading">

              <span className="section-eyebrow">
                EXPERIENCES
              </span>

              <h2>
                Wild places worth travelling for.
              </h2>

              <p>
                Uganda's greatest strength is variety. Each region
                changes the pace and character of the journey.
              </p>

            </div>


            <div className="experience-grid">

              <article className="experience-card">

                <div className="experience-image">

                  <img
                    src={ugandaGorilla}
                    alt="Gorilla trekking in Bwindi"
                  />

                  <span>
                    01
                  </span>

                </div>

                <div className="experience-content">

                  <span className="experience-label">
                    BWINDI
                  </span>

                  <h3>
                    Mountain Gorilla Trekking
                  </h3>

                  <p>
                    Walk beneath the canopy of Bwindi's ancient
                    forest in search of mountain gorillas. The
                    experience is physical, intimate and profoundly
                    different from watching wildlife from a vehicle.
                  </p>

                </div>

              </article>


              <article className="experience-card">

                <div className="experience-image">

                  <img
                    src={kibaleForest}
                    alt="Kibale Forest Uganda"
                  />

                  <span>
                    02
                  </span>

                </div>

                <div className="experience-content">

                  <span className="experience-label">
                    KIBALE
                  </span>

                  <h3>
                    Chimpanzee & Primate Encounters
                  </h3>

                  <p>
                    Enter one of Uganda's great primate forests
                    for chimpanzee tracking and a richer
                    understanding of the rainforest ecosystem.
                    Kibale is an essential addition to a primate
                    focused itinerary.
                  </p>

                </div>

              </article>


              <article className="experience-card">

                <div className="experience-image">

                  <img
                    src={queenElizabeth}
                    alt="Queen Elizabeth National Park Uganda"
                  />

                  <span>
                    03
                  </span>

                </div>

                <div className="experience-content">

                  <span className="experience-label">
                    QUEEN ELIZABETH
                  </span>

                  <h3>
                    Savannah & Wildlife
                  </h3>

                  <p>
                    Trade the forest for open country and discover
                    Uganda's classic safari landscapes, where
                    elephants, buffalo, lions, antelope and abundant
                    birdlife become part of the journey.
                  </p>

                </div>

              </article>


              <article className="experience-card">

                <div className="experience-image">

                  <img
                    src={lakeMburo}
                    alt="Lake Mburo Uganda"
                  />

                  <span>
                    04
                  </span>

                </div>

                <div className="experience-content">

                  <span className="experience-label">
                    LAKE MBURO
                  </span>

                  <h3>
                    Safari Beyond the Vehicle
                  </h3>

                  <p>
                    Slow the journey down with walking, cycling,
                    scenic landscapes and relaxed wildlife viewing
                    around Lake Mburo — a beautiful contrast to
                    Uganda's larger national parks.
                  </p>

                </div>

              </article>

            </div>


            {/* UGANDA LODGES */}

            <div className="section-heading lodge-heading">

              <span className="section-eyebrow">
                SLEEP IN THE WILD
              </span>

              <h2>
                Places that become part of the journey.
              </h2>

              <p>
                The right lodge changes the rhythm of a safari.
                We favour properties that feel connected to their
                surroundings, with thoughtful design, strong service
                and a sense of place.
              </p>

            </div>


            <div className="lodge-grid">

              <article className="lodge-card large">

                <img
                  src={bwindiLodge}
                  alt="Luxury lodge near Bwindi"
                />

                <div className="lodge-overlay">

                  <span>
                    BWINDI
                  </span>

                  <h3>
                    Forest-side luxury
                  </h3>

                  <p>
                    Wake to mist-covered forest and spend the
                    evening surrounded by the sounds of the wild.
                  </p>

                </div>

              </article>


              <article className="lodge-card">

                <img
                  src={mweyaLodge}
                  alt="Mweya Safari Lodge Uganda"
                />

                <div className="lodge-overlay">

                  <span>
                    QUEEN ELIZABETH
                  </span>

                  <h3>
                    Mweya Safari Lodge
                  </h3>

                  <p>
                    A classic base for exploring Queen Elizabeth
                    National Park.
                  </p>

                </div>

              </article>


              <article className="lodge-card">

                <img
                  src={mihingoLodge}
                  alt="Mihingo Lodge Uganda"
                />

                <div className="lodge-overlay">

                  <span>
                    LAKE MBURO
                  </span>

                  <h3>
                    Mihingo
                  </h3>

                  <p>
                    A distinctive wilderness stay surrounded by
                    the landscapes of Lake Mburo.
                  </p>

                </div>

              </article>


              <article className="lodge-card">

                <img
                  src={kibaleLodge}
                  alt="Kibale lodge Uganda"
                />

                <div className="lodge-overlay">

                  <span>
                    KIBALE
                  </span>

                  <h3>
                    Rainforest Retreats
                  </h3>

                  <p>
                    Quiet forest settings designed for slow
                    mornings and primate adventures.
                  </p>

                </div>

              </article>

            </div>


            <div className="country-link-row">

              <Link
                to="/destinations/uganda"
                className="country-link"
              >
                Explore Uganda in detail
                <FiArrowUpRight />
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            RWANDA
        ===================================================== */}

        <section
          className="country-section country-rwanda"
          id="rwanda"
        >

          <div className="destination-container">

            <div className="country-heading">

              <div>

                <span className="country-number">
                  02
                </span>

                <span className="country-kicker">
                  LAND OF A THOUSAND HILLS
                </span>

                <h2>
                  Rwanda
                </h2>

              </div>

              <p>
                A beautifully compact destination where volcanic
                mountains, rainforest, savannah, lakes and a
                remarkable culture can be woven into one seamless
                journey.
              </p>

            </div>


            {/* RWANDA FEATURE */}

            <div className="country-feature reverse">

              <div className="country-feature-image">

                <img
                  src={rwandaVolcanoes}
                  alt="Volcanoes National Park Rwanda"
                />

              </div>

              <div className="country-feature-content">

                <span className="small-label">
                  WHY RWANDA
                </span>

                <h3>
                  Intimate landscapes. Extraordinary encounters.
                </h3>

                <p>
                  Rwanda's compact geography makes it possible to
                  experience remarkably different environments
                  without spending entire days on the road. The
                  volcanic north is home to mountain gorillas and
                  golden monkeys, while Nyungwe offers ancient
                  rainforest and primate experiences and Akagera
                  delivers classic savannah safari.
                </p>

                <p>
                  Add Kigali, community experiences, scenic drives
                  and the shores of Lake Kivu and Rwanda becomes
                  much more than a gorilla destination.
                </p>

                <Link
                  to="/destinations/rwanda"
                  className="inline-link"
                >
                  Discover Rwanda
                  <FiArrowUpRight />
                </Link>

              </div>

            </div>


            {/* RWANDA EXPERIENCES */}

            <div className="section-heading">

              <span className="section-eyebrow">
                EXPERIENCES
              </span>

              <h2>
                Experiences worth travelling for.
              </h2>

              <p>
                Rwanda brings together primates, savannah, rainforest,
                mountains and culture in an unusually elegant
                itinerary.
              </p>

            </div>


            <div className="experience-grid">

              <article className="experience-card">

                <div className="experience-image">

                  <img
                    src={rwandaVolcanoes}
                    alt="Mountain gorilla habitat in Rwanda"
                  />

                  <span>
                    01
                  </span>

                </div>

                <div className="experience-content">

                  <span className="experience-label">
                    VOLCANOES
                  </span>

                  <h3>
                    Gorilla Trekking
                  </h3>

                  <p>
                    Trek through the montane forests of the Virunga
                    landscape for one of Africa's most sought-after
                    wildlife encounters. The experience can be
                    combined with golden monkey tracking and
                    volcano hiking.
                  </p>

                </div>

              </article>


              <article className="experience-card">

                <div className="experience-image">

                  <img
                    src={goldenMonkeys}
                    alt="Golden monkey trekking Rwanda"
                  />

                  <span>
                    02
                  </span>

                </div>

                <div className="experience-content">

                  <span className="experience-label">
                    MUSANZE
                  </span>

                  <h3>
                    Golden Monkey Trekking
                  </h3>

                  <p>
                    Follow lively golden monkeys through the bamboo
                    forests of the Virunga landscape. It is a
                    different kind of primate encounter and a
                    beautiful complement to gorilla trekking.
                  </p>

                </div>

              </article>


              <article className="experience-card">

                <div className="experience-image">

                  <img
                    src={rwandaAkagera}
                    alt="Akagera National Park Rwanda"
                  />

                  <span>
                    03
                  </span>

                </div>

                <div className="experience-content">

                  <span className="experience-label">
                    AKAGERA
                  </span>

                  <h3>
                    Big Five Safari
                  </h3>

                  <p>
                    Travel east into Akagera's open savannah,
                    woodland and wetland landscapes for classic
                    game drives, birding and boat experiences.
                    Rwanda's safari story begins here.
                  </p>

                </div>

              </article>


              <article className="experience-card">

                <div className="experience-image">

                  <img
                    src={rwandaNyungwe}
                    alt="Nyungwe rainforest Rwanda"
                  />

                  <span>
                    04
                  </span>

                </div>

                <div className="experience-content">

                  <span className="experience-label">
                    NYUNGWE
                  </span>

                  <h3>
                    Ancient Rainforest
                  </h3>

                  <p>
                    Discover one of Rwanda's great forest
                    landscapes, with chimpanzee tracking, primates,
                    birdlife, orchids and the famous canopy walkway
                    high above the forest floor.
                  </p>

                </div>

              </article>

            </div>


            {/* RWANDA LODGES */}

            <div className="section-heading lodge-heading">

              <span className="section-eyebrow">
                SLEEP CLOSE TO THE WILD
              </span>

              <h2>
                Places worth slowing down for.
              </h2>

              <p>
                Rwanda is particularly suited to intimate luxury.
                Choose a forest lodge beneath the volcanoes, retreat
                beside the rainforest or finish your journey with
                time beside a lake.
              </p>

            </div>


            <div className="rwanda-lodge-feature">

              <div className="rwanda-lodge-image">

                <img
                  src={bisateLodge}
                  alt="Bisate Lodge Rwanda"
                />

              </div>

              <div className="rwanda-lodge-content">

                <span className="small-label">
                  VOLCANOES NATIONAL PARK
                </span>

                <h3>
                  Bisate
                </h3>

                <p>
                  A striking forest retreat near Rwanda's gorilla
                  country, designed around the landscape rather than
                  separated from it. For travellers looking for a
                  deeply atmospheric stay before or after a gorilla
                  trek, this is the kind of property that becomes
                  part of the memory of the journey.
                </p>

                <Link
                  to="/booking"
                  className="inline-link"
                >
                  Ask about a stay
                  <FiArrowUpRight />
                </Link>

              </div>

            </div>


            {/* RWANDA CONTEXT */}

            <div className="rwanda-context-grid">

              <div className="context-card">

                <span>
                  KIGALI
                </span>

                <h3>
                  Begin with the city.
                </h3>

                <p>
                  Kigali provides a polished introduction to Rwanda,
                  with contemporary dining, art, culture and a
                  thoughtful urban atmosphere. It is an ideal
                  beginning or ending point for a longer journey.
                </p>

              </div>


              <div className="context-card">

                <span>
                  LAKE KIVU
                </span>

                <h3>
                  Add a slower chapter.
                </h3>

                <p>
                  After trekking and safari, the shores of Lake Kivu
                  offer a completely different rhythm — water,
                  hills, sunsets, walking and time to simply stop.
                </p>

              </div>


              <div className="context-card">

                <span>
                  CULTURE
                </span>

                <h3>
                  Meet Rwanda beyond wildlife.
                </h3>

                <p>
                  Markets, crafts, food, heritage and community
                  experiences give the journey a human dimension
                  beyond the national parks.
                </p>

              </div>

            </div>


            <div className="country-link-row">

              <Link
                to="/destinations/rwanda"
                className="country-link"
              >
                Explore Rwanda in detail
                <FiArrowUpRight />
              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            UGANDA + RWANDA
        ===================================================== */}

        <section className="combined-section">

          <div className="destination-container">

            <div className="combined-header">

              <span className="section-eyebrow">
                ONE JOURNEY · TWO COUNTRIES
              </span>

              <h2>
                Why choose one?
              </h2>

              <p>
                Uganda and Rwanda can work beautifully together.
                Rather than repeating the same experience twice,
                we design the journey so that each country adds
                something different.
              </p>

            </div>


            <div className="comparison-grid">

              <div className="comparison-column">

                <span>
                  UGANDA
                </span>

                <h3>
                  For depth and wilderness.
                </h3>

                <ul>
                  <li>
                    Mountain gorillas in Bwindi
                  </li>

                  <li>
                    Chimpanzees in Kibale
                  </li>

                  <li>
                    Classic savannah wildlife
                  </li>

                  <li>
                    Diverse landscapes
                  </li>

                  <li>
                    Longer, immersive safari routes
                  </li>
                </ul>

              </div>


              <div className="comparison-column">

                <span>
                  RWANDA
                </span>

                <h3>
                  For elegance and contrast.
                </h3>

                <ul>
                  <li>
                    Gorilla trekking in Volcanoes
                  </li>

                  <li>
                    Golden monkey trekking
                  </li>

                  <li>
                    Big Five safari in Akagera
                  </li>

                  <li>
                    Nyungwe rainforest
                  </li>

                  <li>
                    Kigali and Lake Kivu
                  </li>
                </ul>

              </div>

            </div>


            <div className="combined-note">

              <FiCompass />

              <p>
                The best country is the one that fits the journey
                you want to have. Tell us what you want to see,
                how you like to travel and how much time you have —
                and we will build the route around you.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="destinations-cta">

          <div className="destinations-cta-image">

            <img
              src={heroImage}
              alt="East African wilderness"
            />

          </div>

          <div className="destinations-cta-overlay" />

          <div className="destination-container">

            <div className="cta-content">

              <span>
                YOUR JOURNEY STARTS HERE
              </span>

              <h2>
                Tell us what
                <br />
                <em>you imagine.</em>
              </h2>

              <p>
                Whether you dream of gorillas in the mist,
                elephants crossing the savannah, chimpanzees
                in ancient forest or quiet evenings overlooking
                the hills, we will shape the journey around you.
              </p>

              <Link
                to="/booking"
                className="destination-primary-button"
              >
                <span>Plan Your Safari</span>
                <FiArrowUpRight />
              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}