import { useState } from "react";
import "./Destinations.css";

/* HERO */
import heroImg from "../assets/hero2.jpg";

/* COUNTRY IMAGES */
import ugandaImg from "../assets/uganda.jpg";
import rwandaImg from "../assets/rwanda.jpg";
import kenyaImg from "../assets/kenya.jpg";
import tanzaniaImg from "../assets/tanzania.jpg";

/* UGANDA */
import bwindi from "../assets/bwindi.jpg";
import queen from "../assets/queen.jpg";
import murchison from "../assets/murchison.jpg";
import kibale from "../assets/kibale.jpg";
import bunyonyi from "../assets/bunyonyi.jpg";
import kidepo from "../assets/kidepo.jpg";

/* RWANDA */
import volcanoes from "../assets/volcanoes.jpg";
import akagera from "../assets/akagera.jpg";
import nyungwe from "../assets/nyungwe.jpg";
import kivu from "../assets/kivu.jpg";

/* KENYA */
import maasai from "../assets/maasai.jpg";
import amboseli from "../assets/amboseli.jpg";
import nakuru from "../assets/nakuru.jpg";
import tsavo from "../assets/tsavo.jpg";
import samburu from "../assets/samburu.jpg";
import diani from "../assets/diani.jpg";

/* TANZANIA */
import serengeti from "../assets/serengeti.jpg";
import ngorongoro from "../assets/ngorongoro.jpg";
import tarangire from "../assets/tarangire.jpg";
import manyara from "../assets/manyara.jpg";
import kilimanjaro from "../assets/kilimanjaro.jpg";
import zanzibar from "../assets/zanzibar.jpg";

/* ADDITIONAL DESTINATION IMAGES */
import lakeVictoria from "../assets/lake-victoria.jpg";
import lakeMutanda from "../assets/lake-mutanda.jpg";
import mabamba from "../assets/mabamba-swamp.jpg";

import rwenzori from "../assets/rwenzori.jpg";
import mountElgon from "../assets/mount-elgon.jpg";

import mabira from "../assets/mabira-forest.jpg";
import budongo from "../assets/budongo-forest.jpg";

import kasubi from "../assets/kasubi-tombs.jpg";

import kampala from "../assets/kampala.jpg";
import jinja from "../assets/jinja.jpg";
import fortPortal from "../assets/fort-portal.jpg";

import kigali from "../assets/kigali.jpg";
import karisimbi from "../assets/mount-karisimbi.jpg";

import lakeNaivasha from "../assets/lake-naivasha.jpg";
import mountKenya from "../assets/mount-kenya.jpg";

import nairobi from "../assets/nairobi.jpg";
import mombasa from "../assets/mombasa.jpg";

import arusha from "../assets/arusha.jpg";
import darEsSalaam from "../assets/dar-es-salaam.jpg";
import sipifalls from "../assets/sipi-falls.jpg";
import lakeMburo from "../assets/lake-mburo.jpg";
import ziwa from "../assets/ziwa.jpg";
import mgahinga from "../assets/mgahinga.jpg";

export default function Destinations() {
  const [activeCountry, setActiveCountry] = useState("Uganda");

  const countries = {
    Uganda: {
  image: ugandaImg,
  categories: [
    {
      title: "National Parks",
      destinations: [
        { name: "Bwindi Impenetrable National Park", image: bwindi, description: "Mountain gorilla trekking destination." },
        { name: "Murchison Falls National Park", image: murchison, description: "Powerful waterfalls and Big Five safari." },
        { name: "Queen Elizabeth National Park", image: queen, description: "Tree-climbing lions and Kazinga Channel." },
        { name: "Kibale Forest National Park", image: kibale, description: "Chimpanzee tracking capital." },
        { name: "Kidepo Valley National Park", image: kidepo, description: "Remote wilderness safari experience." },
        { name: "Lake Mburo National Park", image: lakeMburo, description: "Close wildlife safari from Kampala." },
        { name: "Mgahinga Gorilla National Park", image: mgahinga, description: "Golden monkey trekking and volcano hiking." },
      ],
    },

    {
      title: "Wildlife Reserves & Sanctuaries",
      destinations: [
        { name: "Ziwa Rhino Sanctuary", image: ziwa, description: "Rhino tracking and conservation experience." },
      ],
    },

    {
      title: "Lakes & Water Attractions",
      destinations: [
        { name: "Lake Victoria", image: lakeVictoria, description: "Africa’s largest freshwater lake." },
        { name: "Lake Bunyonyi", image: bunyonyi, description: "Scenic island-filled lake." },
        { name: "Lake Mutanda", image: lakeMutanda, description: "Crystal-clear volcanic lake views." },
        { name: "Mabamba Swamp", image: mabamba, description: "Best shoebill stork birding site on Lake Victoria." },
      ],
    },

    {
      title: "Mountains & Hiking",
      destinations: [
        { name: "Rwenzori Mountains", image: rwenzori, description: "Mountains of the Moon trekking." },
        { name: "Mount Elgon", image: mountElgon, description: "Ancient volcanic hiking trails." },
      ],
    },

    {
      title: "Forests & Nature Areas",
      destinations: [
        { name: "Mabira Forest", image: mabira, description: "Rainforest near Kampala." },
        { name: "Budongo Forest", image: budongo, description: "Chimpanzee and primate habitat." },
      ],
    },

    {
      title: "Cultural & Historical Attractions",
      destinations: [
        { name: "Kasubi Tombs", image: kasubi, description: "UNESCO royal heritage site." },
      ],
    },

    {
      title: "Cities & Urban Tourism",
      destinations: [
        { name: "Kampala", image: kampala, description: "Uganda’s capital city." },
        { name: "Jinja", image: jinja, description: "Gateway to Uganda via airport." },
        { name: "Fort Portal", image: fortPortal, description: "Tourism city near crater lakes." },
      ],
    },

    {
      title: "Signature Safari Experiences",
      destinations: [
        {
          name: "Murchison + Ziwa Rhino Circuit",
          image: murchison,
          description: "Big Five safari combining rhino tracking and waterfalls.",
        },
        {
          name: "Jinja + Sipi Falls Adventure",
          image: sipifalls,
          description: "Source of the Nile rafting + mountain waterfalls.",
        },
        {
          name: "Golden Monkey Trekking (Mgahinga)",
          image: mgahinga,
          description: "Rare primate trekking in volcanic forests.",
        },
        {
          name: "Shoebill Birding Safari",
          image: mabamba,
          description: "Mabamba Swamp on Lake Victoria – top birding hotspot.",
        },
        {
          name: "Gorilla Trekking (Bwindi)",
          image: bwindi,
          description: "Meet endangered mountain gorillas in the wild.",
        },
      ],
    },
  ],
},

    Rwanda: {
      image: rwandaImg,
      categories: [
        {
          title: "National Parks",
          destinations: [
            { name: "Volcanoes National Park", image: volcanoes, description: "Gorilla trekking park." },
            { name: "Akagera National Park", image: akagera, description: "Big Five safari park." },
            { name: "Nyungwe National Park", image: nyungwe, description: "Ancient rainforest." },
          ],
        },
        {
          title: "Lakes & Water Attractions",
          destinations: [
            { name: "Lake Kivu", image: kivu, description: "Beautiful lakeside escape." },
          ],
        },
        {
          title: "Mountains & Hiking",
          destinations: [
            { name: "Mount Karisimbi", image: karisimbi, description: "Highest mountain in Rwanda." },
          ],
        },
        {
          title: "Cities & Urban Tourism",
          destinations: [
            { name: "Kigali", image: kigali, description: "Clean modern capital." },
          ],
        },
        {
          title: "Signature Experiences",
          destinations: [
            { name: "Gorilla Trekking", image: volcanoes, description: "Unique wildlife experience." },
          ],
        },
      ],
    },

    Kenya: {
      image: kenyaImg,
      categories: [
        {
          title: "National Parks",
          destinations: [
            { name: "Maasai Mara National Park", image: maasai, description: "Great Migration safari." },
            { name: "Amboseli National Park", image: amboseli, description: "Elephants with Kilimanjaro view." },
            { name: "Tsavo National Park", image: tsavo, description: "Largest park in Kenya." },
          ],
        },
        {
          title: "Lakes & Water Attractions",
          destinations: [
            { name: "Lake Nakuru", image: nakuru, description: "Flamingo paradise." },
            { name: "Lake Naivasha", image: lakeNaivasha, description: "Boat safari lake." },
          ],
        },
        {
          title: "Mountains & Hiking",
          destinations: [
            { name: "Mount Kenya", image: mountKenya, description: "Highest mountain in Kenya." },
          ],
        },
        {
          title: "Cities & Urban Tourism",
          destinations: [
            { name: "Nairobi", image: nairobi, description: "Safari capital city." },
            { name: "Mombasa", image: mombasa, description: "Coastal tourism hub." },
          ],
        },
        {
          title: "Signature Experiences",
          destinations: [
            { name: "Great Migration", image: maasai, description: "World-famous wildlife event." },
          ],
        },
      ],
    },

    Tanzania: {
      image: tanzaniaImg,
      categories: [
        {
          title: "National Parks",
          destinations: [
            { name: "Serengeti National Park", image: serengeti, description: "World-famous safari park." },
            { name: "Ngorongoro National Park", image: ngorongoro, description: "Wildlife crater." },
            { name: "Tarangire National Park", image: tarangire, description: "Elephant herds." },
          ],
        },
        {
          title: "Mountains & Hiking",
          destinations: [
            { name: "Mount Kilimanjaro", image: kilimanjaro, description: "Africa’s highest peak." },
          ],
        },
        {
          title: "Lakes & Water Attractions",
          destinations: [
            { name: "Lake Victoria", image: manyara, description: "Largest lake in Africa." },
            { name: "Zanzibar", image: zanzibar, description: "Island paradise." },
          ],
        },
        {
          title: "Cities & Urban Tourism",
          destinations: [
            { name: "Arusha", image: arusha, description: "Safari gateway city." },
            { name: "Dar es Salaam", image: darEsSalaam, description: "Coastal capital." },
          ],
        },
        {
          title: "Signature Experiences",
          destinations: [
            { name: "Great Migration", image: serengeti, description: "Nature’s greatest show." },
          ],
        },
      ],
    },
  };

  return (
    <section className="destinations-page">

      {/* HERO */}
      <section
        className="destinations-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroImg})`,
        }}
      >
        <div className="hero-content">
          <small>EAST AFRICA DESTINATIONS</small>
          <h1>Explore East Africa</h1>
          <p>Uganda, Rwanda, Kenya & Tanzania — safari paradise awaits.</p>
        </div>
      </section>

      {/* COUNTRY SWITCH */}
      <section className="map-section">
        <div className="map-buttons">
          {Object.keys(countries).map((country) => (
            <button
              key={country}
              onClick={() => setActiveCountry(country)}
              className={activeCountry === country ? "active" : ""}
            >
              {country}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="destinations-grid-section">
        <div className="container">

          <h2 className="country-title">
            {activeCountry} Safari Destinations
          </h2>

          {countries[activeCountry].categories.map((category, i) => (
            <div key={i} className="destination-category">

              <h3 className="category-title">{category.title}</h3>

              <div className="destinations-grid">

                {category.destinations.map((place, j) => (
                  <div className="destination-card" key={j}>
                    <div className="img-box">
                      <img src={place.image} alt={place.name} />
                    </div>

                    <h3>{place.name}</h3>
                    <p className="destination-desc">{place.description}</p>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="destinations-cta">
        <div className="container">
          <h2>Ready To Explore East Africa?</h2>
          <p>Let us design your perfect safari experience.</p>

          <a
            href="https://wa.me/256708610067"
            target="_blank"
            rel="noreferrer"
            className="cta-btn"
          >
            Plan Your Safari
          </a>
        </div>
      </section>

    </section>
  );
}