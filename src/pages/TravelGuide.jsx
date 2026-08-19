import "./TravelGuide.css";
import { Helmet } from "react-helmet-async";

import heroImg from "../assets/travel-hero.jpg";
import landscapeImg from "../assets/east-africa-landscape.jpg";
import gorillaImg from "../assets/gorilla-guide.jpg";
import luxuryImg from "../assets/luxury-safari.jpg";

import ugandaImg from "../assets/uganda-guide.jpg";
import rwandaImg from "../assets/rwanda-guide.jpg";
import kenyaImg from "../assets/kenya-guide.jpg";
import tanzaniaImg from "../assets/tanzania-guide.jpg";

export default function TravelGuide() {
  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>
          East Africa Travel Guide | Uganda Rwanda Kenya Tanzania Safaris | Nylora Safaris
        </title>

        <meta
          name="description"
          content="Complete East Africa travel guide for Uganda safaris, Rwanda gorilla trekking, Kenya wildlife safaris, and Tanzania Serengeti tours. Plan your luxury safari with Nylora Safaris."
        />

        <meta
          name="keywords"
          content="
            East Africa safari guide,
            Uganda safari travel guide,
            Rwanda gorilla trekking guide,
            Kenya wildlife safari,
            Tanzania Serengeti safari,
            luxury East Africa safaris,
            Bwindi gorilla trekking,
            Big Five safaris Africa
          "
        />
      </Helmet>

      <div className="travel-guide">

        {/* HERO */}
        <section
          className="guide-hero"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${heroImg})`,
          }}
        >
          <div className="guide-hero-content">

            <span>NYLORA SAFARIS GUIDE</span>

            <h1>
              East Africa Safari Travel Guide
              <br />
              Uganda • Rwanda • Kenya • Tanzania
            </h1>

            <p>
              Your complete guide to luxury safaris in East Africa including Uganda gorilla trekking,
              Rwanda Volcanoes National Park, Kenya wildlife safaris and Tanzania Serengeti experiences.
            </p>

          </div>
        </section>

        {/* INTRO */}
        <section className="guide-intro">
          <div className="container">

            <h2>Why Visit East Africa for Safari Holidays?</h2>

            <p>
              East Africa is the world’s top luxury safari destination, home to mountain gorillas in Uganda and Rwanda,
              Big Five wildlife safaris in Kenya and Tanzania, and the Great Migration in the Serengeti.
            </p>

            <div className="intro-grid">

              <div className="intro-card">
                <h3>Uganda Gorilla Trekking</h3>
                <p>Track endangered mountain gorillas in Bwindi.</p>
              </div>

              <div className="intro-card">
                <h3>Rwanda Safaris</h3>
                <p>Volcanoes National Park luxury gorilla experiences.</p>
              </div>

              <div className="intro-card">
                <h3>Kenya Wildlife Safaris</h3>
                <p>Masai Mara Big Five safari adventures.</p>
              </div>

              <div className="intro-card">
                <h3>Tanzania Serengeti</h3>
                <p>Witness the Great Migration safari spectacle.</p>
              </div>

            </div>

          </div>
        </section>

        {/* PARALLAX */}
        <section
          className="parallax"
          style={{ backgroundImage: `url(${landscapeImg})` }}
        >
          <div className="parallax-overlay">
            <h2>Luxury Safaris Across East Africa</h2>
          </div>
        </section>

        {/* BEST TIME */}
        <section className="best-time">
          <div className="container">

            <h2>Best Time for East Africa Safaris</h2>

            <div className="season-grid">

              <div className="season-card">
                <h3>June – September</h3>
                <p>Peak safari season for Uganda, Kenya & Tanzania safaris.</p>
              </div>

              <div className="season-card">
                <h3>December – February</h3>
                <p>Best weather for Rwanda gorilla trekking and wildlife viewing.</p>
              </div>

              <div className="season-card">
                <h3>March – May</h3>
                <p>Green season with fewer crowds and lush landscapes.</p>
              </div>

              <div className="season-card">
                <h3>October – November</h3>
                <p>Excellent birding and off-peak safari travel season.</p>
              </div>

            </div>

          </div>
        </section>

        {/* GORILLA GUIDE */}
        <section className="gorilla-guide">

          <div className="guide-image">
            <img src={gorillaImg} alt="Uganda Gorilla Trekking Bwindi Forest" />
          </div>

          <div className="guide-text">

            <span>SIGNATURE EAST AFRICA EXPERIENCE</span>

            <h2>Uganda & Rwanda Gorilla Trekking</h2>

            <p>
              Gorilla trekking in Uganda and Rwanda is one of Africa’s most exclusive wildlife experiences.
            </p>

            <ul>
              <li>Bwindi Impenetrable National Park – Uganda</li>
              <li>Mgahinga Gorilla National Park – Uganda</li>
              <li>Volcanoes National Park – Rwanda</li>
            </ul>

          </div>

        </section>

        {/* SAFARI TYPES */}
        <section className="safari-types">
          <div className="container">

            <h2>Luxury Safari Types in East Africa</h2>

            <div className="types-grid">

              <div className="type-card"><h3>Uganda Wildlife Safaris</h3></div>
              <div className="type-card"><h3>Rwanda Gorilla Safaris</h3></div>
              <div className="type-card"><h3>Kenya Masai Mara Safaris</h3></div>
              <div className="type-card"><h3>Tanzania Serengeti Safaris</h3></div>
              <div className="type-card"><h3>Luxury Fly-In Safaris</h3></div>
              <div className="type-card"><h3>Honeymoon Safaris</h3></div>

            </div>

          </div>
        </section>

        {/* COUNTRIES */}
        <section className="countries">
          <div className="container">

            <h2>Explore East Africa Destinations</h2>

            <div className="countries-grid">

              <div className="country-card">
                <img src={ugandaImg} alt="Uganda Safaris" />
                <h3>Uganda Safari Tours</h3>
              </div>

              <div className="country-card">
                <img src={rwandaImg} alt="Rwanda Safaris" />
                <h3>Rwanda Safaris</h3>
              </div>

              <div className="country-card">
                <img src={kenyaImg} alt="Kenya Safaris" />
                <h3>Kenya Safaris</h3>
              </div>

              <div className="country-card">
                <img src={tanzaniaImg} alt="Tanzania Safaris" />
                <h3>Tanzania Safaris</h3>
              </div>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="guide-cta">

          <h2>Plan Your East Africa Safari Today</h2>

          <p>
            Let Nylora Safaris design your custom safari experience.
          </p>

          <a
            href="https://wa.me/25670000000"
            className="guide-btn"
            target="_blank"
            rel="noreferrer"
          >
            Plan My Safari
          </a>

        </section>

      </div>
    </>
  );
}