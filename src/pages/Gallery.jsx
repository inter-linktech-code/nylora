import { useState } from "react";
import "./Gallery.css";

/* HERO */
import heroImg from "../assets/hero2.jpg";

/* GORILLA TREKKING */
import gorillaTrekking from "../assets/gorilla-trekking-1.jpg";
import gorillaFamily from "../assets/gorilla-family.jpg";
import silverback from "../assets/silverback-gorilla.jpg";

/* WILDLIFE */
import lionSafari from "../assets/lion-safari.jpg";
import elephantHerd from "../assets/elephant-herd.jpg";
import giraffeSafari from "../assets/giraffe-safari.jpg";
import leopardSighting from "../assets/leopard-sighting.jpg";

/* UGANDA */
import bwindi from "../assets/bwindi-impenetrable-national-park.jpg";
import murchison from "../assets/murchison-falls-national-park.jpg";
import queen from "../assets/queen-elizabeth-national-park.jpg";
import kibale from "../assets/kibale-national-park.jpg";
import kidepo from "../assets/kidepo-valley-national-park.jpg";
import lakeBunyonyi from "../assets/lake-bunyonyi.jpg";

/* RWANDA */
import volcanoes from "../assets/volcanoes-national-park.jpg";
import akagera from "../assets/akagera-national-park.jpg";

/* KENYA */
import maasaiMara from "../assets/maasai-mara-national-reserve.jpg";
import amboseli from "../assets/amboseli-national-park.jpg";
import diani from "../assets/diani-beach.jpg";

/* TANZANIA */
import serengeti from "../assets/serengeti-national-park.jpg";
import ngorongoro from "../assets/ngorongoro-conservation-area.jpg";
import zanzibar from "../assets/zanzibar.jpg";

/* CULTURE */
import batwa from "../assets/batwa-cultural-experience.jpg";
import maasaiVillage from "../assets/maasai-cultural-village.jpg";

/* LUXURY */
import luxuryLodge from "../assets/luxury-lodge-1.jpg";
import luxuryCamp from "../assets/luxury-tent-camp.jpg";
import sundowner from "../assets/safari-sundowner.jpg";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Gorilla Trekking",
    "Wildlife Safaris",
    "National Parks",
    "Culture",
    "Luxury Lodges",
  ];

  const galleryImages = [
    {
      image: gorillaTrekking,
      title: "Mountain Gorilla Trekking",
      category: "Gorilla Trekking",
    },
    {
      image: gorillaFamily,
      title: "Gorilla Family Encounter",
      category: "Gorilla Trekking",
    },
    {
      image: silverback,
      title: "Silverback Gorilla",
      category: "Gorilla Trekking",
    },

    {
      image: lionSafari,
      title: "Lion Safari",
      category: "Wildlife Safaris",
    },
    {
      image: elephantHerd,
      title: "Elephant Herd",
      category: "Wildlife Safaris",
    },
    {
      image: giraffeSafari,
      title: "Giraffe Safari",
      category: "Wildlife Safaris",
    },
    {
      image: leopardSighting,
      title: "Leopard Sighting",
      category: "Wildlife Safaris",
    },

    {
      image: bwindi,
      title: "Bwindi Impenetrable National Park",
      category: "National Parks",
    },
    {
      image: murchison,
      title: "Murchison Falls National Park",
      category: "National Parks",
    },
    {
      image: queen,
      title: "Queen Elizabeth National Park",
      category: "National Parks",
    },
    {
      image: kibale,
      title: "Kibale National Park",
      category: "National Parks",
    },
    {
      image: kidepo,
      title: "Kidepo Valley National Park",
      category: "National Parks",
    },
    {
      image: volcanoes,
      title: "Volcanoes National Park",
      category: "National Parks",
    },
    {
      image: akagera,
      title: "Akagera National Park",
      category: "National Parks",
    },
    {
      image: maasaiMara,
      title: "Maasai Mara National Reserve",
      category: "National Parks",
    },
    {
      image: amboseli,
      title: "Amboseli National Park",
      category: "National Parks",
    },
    {
      image: serengeti,
      title: "Serengeti National Park",
      category: "National Parks",
    },
    {
      image: ngorongoro,
      title: "Ngorongoro Conservation Area",
      category: "National Parks",
    },

    {
      image: batwa,
      title: "Batwa Cultural Experience",
      category: "Culture",
    },
    {
      image: maasaiVillage,
      title: "Maasai Cultural Village",
      category: "Culture",
    },

    {
      image: luxuryLodge,
      title: "Luxury Safari Lodge",
      category: "Luxury Lodges",
    },
    {
      image: luxuryCamp,
      title: "Luxury Tent Camp",
      category: "Luxury Lodges",
    },
    {
      image: sundowner,
      title: "Safari Sundowner Experience",
      category: "Luxury Lodges",
    },

    {
      image: lakeBunyonyi,
      title: "Lake Bunyonyi",
      category: "National Parks",
    },
    {
      image: diani,
      title: "Diani Beach",
      category: "National Parks",
    },
    {
      image: zanzibar,
      title: "Zanzibar",
      category: "National Parks",
    },
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="gallery-page">

      {/* HERO */}
      <section
        className="gallery-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${heroImg})`,
        }}
      >
        <div className="gallery-hero-content">
          <small>BWERA TOURS GALLERY</small>

          <h1>Safari Moments</h1>

          <p>
            Discover East Africa through unforgettable wildlife,
            landscapes, cultures, and luxury safari experiences.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="gallery-filters">
        <div className="container">

          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <div className="container">

          <div className="gallery-grid">
            {filteredImages.map((item, index) => (
              <div className="gallery-card" key={index}>

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-overlay">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="gallery-cta">
        <div className="container">

          <h2>Ready For Your Safari Adventure?</h2>

          <p>
            Let BWERA TOURS create your perfect East
            African journey.
          </p>

          <a
            href="https://wa.me/256708610067"
            target="_blank"
            rel="noreferrer"
            className="gallery-btn"
          >
            Plan Your Safari
          </a>

        </div>
      </section>

    </section>
  );
}