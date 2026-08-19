import { useState } from "react";
import { Link } from "react-router-dom";
import "./Tours.css";

/* ================= HERO ================= */
import heroImage from "../assets/gorilla.jpg";

/* ================= LODGES ================= */
import bwindiLodge from "../assets/bwindi-lodge.jpg";
import bisateLodge from "../assets/bisate-lodge.jpg";
import maraCamp from "../assets/mara-camp.jpg";
import serengetiCamp from "../assets/serengeti-canvas.jpg";

import mweyaLodge from "../assets/mweya-lodge.jpg";
import mihingoLodge from "../assets/mihingo-lodge.jpg";
import nakuruLodge from "../assets/nakuru-lodge.jpg";
import ngorongoroLodge from "../assets/ngorongoro-lodge.jpg";
import lakeMburoLodge from "../assets/lake-mburo-lodge.jpg";
import kibaleLodge from "../assets/kibale-lodge.jpg";

/* ================= ATTRACTIONS ================= */
import bwindiGorilla from "../assets/gorilla.jpg";
import kibaleForest from "../assets/kibale.jpg";
import queenElizbeth from "../assets/queen.jpg";
import lakeMburo from "../assets/lake-mburo.jpg";

import volcanoesRwanda from "../assets/volcanoes.jpg";
import goldenMonkeys from "../assets/golden-monkey.jpg";

import amboseli from "../assets/amboseli.jpg";
import nakuru from "../assets/nakuru.jpg";

import ngorongoro from "../assets/ngorongoro.jpg";
import serengetiMigration from "../assets/serengeti.jpg";

/* =========================
   MASTER DATA (FIXED STRUCTURE)
========================= */

const tours = [

/* ================= UGANDA ================= */

{
  id: "ug-3-gorilla",
  title: "3 Days Luxury Gorilla Trekking",
  region: "uganda",
  category: "gorilla",
  days: 3,
  location: "Bwindi",
  price: "From $2,950",

  attraction: bwindiGorilla,
  expectation: "Gorilla trekking + luxury forest lodge",

  accommodation: {
    name: "Bwindi Lodge",
    image: bwindiLodge
  }
},

{
  id: "ug-4-kibale",
  title: "4 Days Kibale Chimpanzee Safari",
  region: "uganda",
  category: "wildlife",
  days: 4,
  location: "Kibale",
  price: "From $3,200",

  attraction: kibaleForest,
  expectation: "Chimp tracking + crater lakes",

  accommodation: {
    name: "Primate Lodge Kibale",
    image: kibaleLodge
  }
},

{
  id: "ug-5-queen",
  title: "5 Days Queen Elizabeth Safari",
  region: "uganda",
  category: "wildlife",
  days: 5,
  location: "Queen Elizabeth NP",
  price: "From $4,200",

  attraction: queenElizbeth,
  expectation: "Tree climbing lions + boat cruise",

  accommodation: {
    name: "Mweya Safari Lodge",
    image: mweyaLodge
  }
},

{
  id: "ug-4-mburo",
  title: "4 Days Lake Mburo Luxury Escape",
  region: "uganda",
  category: "wildlife",
  days: 4,
  location: "Lake Mburo",
  price: "From $3,100",

  attraction: lakeMburo,
  expectation: "Walking safaris & zebras in open plains",

  accommodation: {
    name: "Mihingo Lodge",
    image: mihingoLodge
  }
},

{
  id: "ug-14",
  title: "14 Days Ultimate Uganda Safari",
  region: "uganda",
  category: "combined",
  days: 14,
  location: "Uganda",
  price: "From $9,800",

  attraction: bwindiGorilla,
  expectation: "Full luxury Uganda circuit",

  accommodation: {
    name: "Luxury Uganda Lodges",
    image: bwindiLodge
  }
},

/* ================= UGANDA + RWANDA ================= */

{
  id: "ug-rw-7",
  title: "7 Days Gorilla Luxury Experience",
  region: "uganda-rwanda",
  category: "gorilla",
  days: 7,
  location: "Uganda & Rwanda",
  price: "From $6,500",

  attraction: volcanoesRwanda,
  expectation: "Two-country gorilla trekking",

  accommodation: {
    name: "Bisate Lodge",
    image: bisateLodge
  }
},

{
  id: "ug-rw-10",
  title: "10 Days Uganda & Rwanda Primate Safari",
  region: "uganda-rwanda",
  category: "gorilla",
  days: 10,
  location: "Uganda & Rwanda",
  price: "From $8,900",

  attraction: goldenMonkeys,
  expectation: "Gorillas + chimps + golden monkeys",

  accommodation: {
    name: "Luxury Primate Lodges",
    image: bisateLodge
  }
},

/* ================= KENYA ================= */

{
  id: "ke-3-nakuru",
  title: "3 Days Lake Nakuru Flamingo Safari",
  region: "kenya",
  category: "wildlife",
  days: 3,
  location: "Lake Nakuru",
  price: "From $2,800",

  attraction: nakuru,
  expectation: "Flamingos & rhino sanctuary",

  accommodation: {
    name: "Lake Nakuru Lodge",
    image: nakuruLodge
  }
},

{
  id: "ke-5-mara",
  title: "5 Days Masai Mara Luxury Safari",
  region: "kenya",
  category: "wildlife",
  days: 5,
  location: "Masai Mara",
  price: "From $4,800",

  attraction: maraCamp,
  expectation: "Big Five + Great Migration",

  accommodation: {
    name: "Mara Luxury Camp",
    image: maraCamp
  }
},

{
  id: "ke-8-amboseli",
  title: "8 Days Masai Mara & Amboseli Safari",
  region: "kenya",
  category: "combined",
  days: 8,
  location: "Kenya",
  price: "From $6,900",

  attraction: amboseli,
  expectation: "Elephants with Kilimanjaro views",

  accommodation: {
    name: "Amboseli Serena Lodge",
    image: amboseli
  }
},

/* ================= TANZANIA ================= */

{
  id: "tz-5-ngorongoro",
  title: "5 Days Ngorongoro & Tarangire Safari",
  region: "tanzania",
  category: "wildlife",
  days: 5,
  location: "Ngorongoro",
  price: "From $4,500",

  attraction: ngorongoro,
  expectation: "Crater wildlife & baobab landscapes",

  accommodation: {
    name: "Ngorongoro Lodge",
    image: ngorongoroLodge
  }
},

{
  id: "tz-8-serengeti",
  title: "8 Days Serengeti & Ngorongoro Safari",
  region: "tanzania",
  category: "wildlife",
  days: 8,
  location: "Serengeti",
  price: "From $6,800",

  attraction: serengetiMigration,
  expectation: "Migration & predator action",

  accommodation: {
    name: "Serengeti Luxury Camp",
    image: serengetiCamp
  }
},

{
  id: "tz-10-migration",
  title: "10 Days Great Migration Safari",
  region: "tanzania",
  category: "wildlife",
  days: 10,
  location: "Serengeti",
  price: "From $8,900",

  attraction: serengetiMigration,
  expectation: "Wildebeest migration spectacle",

  accommodation: {
    name: "Serengeti Under Canvas",
    image: serengetiCamp
  }
}

];

/* ================= LODGE CAROUSEL ================= */

const lodges = [
  bwindiLodge,
  bisateLodge,
  maraCamp,
  serengetiCamp,
  mweyaLodge,
  mihingoLodge,
  nakuruLodge,
  ngorongoroLodge,
  lakeMburoLodge,
  kibaleLodge
];

/* ================= COMPONENT ================= */

export default function Itineraries() {
  const [selectedTour, setSelectedTour] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredTours = tours.filter((t) => {
    if (filter === "all") return true;
    if (filter === "uganda") return t.region === "uganda";
    if (filter === "kenya") return t.region === "kenya";
    if (filter === "tanzania") return t.region === "tanzania";
    if (filter === "rwanda") return t.region.includes("rwanda");
    if (filter === "gorilla") return t.category === "gorilla";
    if (filter === "wildlife") return t.category === "wildlife";
    return true;
  });

  return (
    <section className="tours-page">

      {/* HERO */}
      <div
        className="tours-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <h1>Luxury African Safaris</h1>
          <p>
            Handcrafted journeys across East Africa’s most exclusive wilderness destinations.
          </p>
        </div>
      </div>

      {/* FILTERS */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>All Experiences</button>
        <button onClick={() => setFilter("gorilla")}>Gorilla</button>
        <button onClick={() => setFilter("wildlife")}>Wildlife</button>
        <button onClick={() => setFilter("uganda")}>Uganda</button>
        <button onClick={() => setFilter("kenya")}>Kenya</button>
        <button onClick={() => setFilter("tanzania")}>Tanzania</button>
        <button onClick={() => setFilter("rwanda")}>Rwanda</button>
      </div>

      {/* INTRO */}
      <section className="luxury-intro">
        <h2>Exclusive African Safari Collection</h2>
        <p>
          Every itinerary is designed around luxury lodges, private guides, and immersive wildlife encounters.
        </p>
      </section>

      {/* GRID */}
      <div className="tours-grid">

        {filteredTours.map((tour) => (
          <div className="tour-card" key={tour.id}>

            <div className="image-wrap">
              <img src={tour.attraction} alt={tour.title} />
              <span className="badge">{tour.days} Days</span>
            </div>

            <div className="tour-content">

              <small>{tour.location}</small>
              <h3>{tour.title}</h3>
              <p className="expect">{tour.expectation}</p>
              <p className="price">{tour.price}</p>

              <button className="btn" onClick={() => setSelectedTour(tour)}>
  Explore Safari
</button>

              <div className="accommodation">
                <h4>Luxury Lodge</h4>
                <img src={tour.accommodation.image} alt={tour.accommodation.name} />
                <p>{tour.accommodation.name}</p>
              </div>

            </div>

          </div>
        ))}
      </div>

      {/* BRAND STORY */}
      <section className="luxury-footer">
        <h2>Beyond Travel — A Luxury African Story</h2>
        <p>
          We curate unforgettable journeys across Uganda, Rwanda, Kenya & Tanzania with world-class luxury lodges and private safari experiences.
        </p>
      </section>

      {/* LODGE CAROUSEL */}
      <section className="lodge-carousel">
        <h2>Luxury Lodge Collection</h2>

        <div className="scroll-track">
          {lodges.map((img, i) => (
            <img key={i} src={img} alt="Luxury Lodge" />
          ))}
        </div>
        {selectedTour && (
  <div className="itinerary-modal-overlay" onClick={() => setSelectedTour(null)}>

    <div className="itinerary-modal" onClick={(e) => e.stopPropagation()}>

      {/* CLOSE BUTTON */}
      <button className="close-btn" onClick={() => setSelectedTour(null)}>
        ✕
      </button>

      {/* HEADER */}
      <div className="modal-header">
        <img src={selectedTour.attraction} alt="" />
        <div>
          <h2>{selectedTour.title}</h2>
          <p>{selectedTour.location} • {selectedTour.days} Days</p>
          <span className="price">{selectedTour.price}</span>
        </div>
      </div>

      {/* BODY */}
      <div className="modal-body">

        <h3>What to Expect</h3>
        <p>{selectedTour.expectation}</p>

        <h3>Day-by-Day Experience</h3>

        <ul className="itinerary-days">
          {Array.from({ length: selectedTour.days }).map((_, i) => (
            <li key={i}>
              <strong>Day {i + 1}</strong> — Luxury guided safari experience, game drives, and curated lodge relaxation.
            </li>
          ))}
        </ul>

        <h3>Luxury Accommodation</h3>

        <div className="modal-lodge">
          <img src={selectedTour.accommodation.image} />
          <div>
            <h4>{selectedTour.accommodation.name}</h4>
            <p>Premium handpicked safari lodge with world-class service.</p>
          </div>
        </div>

       <Link
  to="/booking"
  state={{ tour }}
  className="btn"
>
  Book Now
</Link>

      </div>

    </div>

  </div>
)}
      </section>

    </section>
  );
}