import gorillaImg from "../assets/gorilla.jpg";
import rwandaImg from "../assets/rwanda.jpg";
import murchisonImg from "../assets/murchison.jpg";
import queenImg from "../assets/queen.jpg";
import kidepoImg from "../assets/kidepo.jpg";
import serengetiImg from "../assets/serengeti.jpg";
import masaiMaraImg from "../assets/masai-mara.jpg";
import ngorongoroImg from "../assets/ngorongoro.jpg";

import bwindiLodge from "../assets/bwindi-lodge.jpg";
import bisateLodge from "../assets/bisate-lodge.jpg";
import paraaLodge from "../assets/paraa-lodge.jpg";
import mweyaLodge from "../assets/mweya-lodge.jpg";
import apokaLodge from "../assets/apoka.jpg";
import maraCamp from "../assets/mara-camp.jpg";
import serengetiCamp from "../assets/serengeti-canvas.jpg";

/* =========================
   LUXURY TOURS DATABASE (10+)
========================= */

export const tours = [

/* =========================
   🇺🇬 UGANDA (EXTENDED)
========================= */

{
  id: "uganda-wildlife-14days",
  title: "14 Days Uganda Ultimate Wildlife & Gorilla Safari",
  region: "uganda",
  category: "wildlife",
  slug: "uganda-14days-wildlife",
  image: murchisonImg,
  location: "Uganda (Multiple Parks)",
  duration: "14 Days",
  price: "From $9,800",
  summary: "Ultimate Uganda safari: gorillas, Big Five, lakes & culture.",
  description: "Complete Uganda luxury circuit covering all top parks.",
  highlights: [
    "Murchison Falls",
    "Queen Elizabeth",
    "Bwindi Gorillas",
    "Kibale Chimps",
    "Lake Bunyonyi"
  ],
  itinerary: [
    { day: "Day 1-2", title: "Arrival in Entebbe & city tour" },
    { day: "Day 3-4", title: "Murchison Falls safari" },
    { day: "Day 5-6", title: "Kibale chimp tracking" },
    { day: "Day 7-8", title: "Queen Elizabeth safari" },
    { day: "Day 9-11", title: "Bwindi gorilla trekking" },
    { day: "Day 12-14", title: "Lake Bunyonyi relaxation" }
  ],
  accommodation: {
    name: "Luxury Uganda Safari Lodges",
    image: bwindiLodge,
    type: "Ultra Luxury Circuit",
    description: "Top luxury lodges across Uganda"
  }
},

{
  id: "uganda-rwanda-7days",
  title: "7 Days Uganda & Rwanda Gorilla Luxury Combo",
  region: "uganda-rwanda",
  category: "gorilla",
  slug: "uganda-rwanda-7days",
  image: rwandaImg,
  location: "Uganda & Rwanda",
  duration: "7 Days",
  price: "From $6,500",
  summary: "Two countries, two gorilla experiences in luxury style.",
  description: "Cross-border gorilla trekking luxury experience.",
  highlights: [
    "Bwindi Gorillas",
    "Volcanoes National Park",
    "Luxury lodges",
    "Cultural tours"
  ],
  itinerary: [
    { day: "Day 1-2", title: "Arrival in Uganda" },
    { day: "Day 3-4", title: "Bwindi gorilla trekking" },
    { day: "Day 5", title: "Transfer to Rwanda" },
    { day: "Day 6-7", title: "Volcanoes gorillas & return" }
  ],
  accommodation: {
    name: "Bisate + Bwindi Lodges",
    image: bisateLodge,
    type: "Ultra Luxury Combo",
    description: "Two-country luxury lodge experience"
  }
},

/* =========================
   🇰🇪 KENYA
========================= */

{
  id: "masai-mara-5days",
  title: "5 Days Masai Mara Luxury Safari",
  region: "kenya",
  category: "wildlife",
  slug: "masai-mara-5days",
  image: masaiMaraImg,
  location: "Masai Mara National Reserve",
  duration: "5 Days",
  price: "From $4,800",
  summary: "Big Five luxury safari & Great Migration experience.",
  description: "Premium Kenya safari in Masai Mara.",
  highlights: [
    "Big Five",
    "Great Migration",
    "Luxury camp",
    "Balloon safari"
  ],
  itinerary: [
    { day: "Day 1", title: "Arrival in Nairobi" },
    { day: "Day 2-4", title: "Masai Mara safari drives" },
    { day: "Day 5", title: "Departure" }
  ],
  accommodation: {
    name: "Mara Luxury Camp",
    image: maraCamp,
    type: "Luxury Tented Camp",
    description: "High-end safari camp in wilderness"
  }
},

{
  id: "lake-nakuru-3days",
  title: "3 Days Lake Nakuru Flamingo Luxury Safari",
  region: "kenya",
  category: "wildlife",
  slug: "lake-nakuru-3days",
  image: ngorongoroImg,
  location: "Lake Nakuru National Park",
  duration: "3 Days",
  price: "From $2,900",
  summary: "Flamingos, rhinos & scenic luxury safari.",
  description: "Short luxury safari in Lake Nakuru.",
  highlights: [
    "Flamingos",
    "White rhinos",
    "Scenic lake views"
  ],
  itinerary: [
    { day: "Day 1", title: "Arrival in Nairobi" },
    { day: "Day 2", title: "Lake Nakuru safari" },
    { day: "Day 3", title: "Return" }
  ],
  accommodation: {
    name: "Lake Nakuru Lodge",
    image: maraCamp,
    type: "Luxury Lodge",
    description: "Scenic lake-view luxury lodge"
  }
},

/* =========================
   🇹🇿 TANZANIA (EXPANDED)
========================= */

{
  id: "serengeti-10days",
  title: "10 Days Serengeti Ultra Luxury Migration Safari",
  region: "tanzania",
  category: "wildlife",
  slug: "serengeti-10days",
  image: serengetiImg,
  location: "Serengeti National Park",
  duration: "10 Days",
  price: "From $8,900",
  summary: "Full Serengeti migration luxury experience.",
  description: "Extended Serengeti luxury safari.",
  highlights: [
    "Great Migration",
    "Big Five",
    "Luxury camps",
    "Balloon safari"
  ],
  itinerary: [
    { day: "Day 1-2", title: "Arrival in Arusha" },
    { day: "Day 3-8", title: "Serengeti safari drives" },
    { day: "Day 9", title: "Balloon safari" },
    { day: "Day 10", title: "Departure" }
  ],
  accommodation: {
    name: "Serengeti Under Canvas",
    image: serengetiCamp,
    type: "Luxury Mobile Camp",
    description: "Luxury tented migration camp"
  }
},

{
  id: "tanzania-safari-7days",
  title: "7 Days Tanzania Luxury Safari Circuit",
  region: "tanzania",
  category: "wildlife",
  slug: "tanzania-7days",
  image: serengetiImg,
  location: "Serengeti + Ngorongoro",
  duration: "7 Days",
  price: "From $6,500",
  summary: "Serengeti + Ngorongoro crater luxury safari.",
  description: "Classic Tanzania safari experience.",
  highlights: [
    "Serengeti",
    "Ngorongoro Crater",
    "Big Five"
  ],
  itinerary: [
    { day: "Day 1", title: "Arrival" },
    { day: "Day 2-4", title: "Serengeti safari" },
    { day: "Day 5-6", title: "Ngorongoro crater" },
    { day: "Day 7", title: "Return" }
  ],
  accommodation: {
    name: "Ngorongoro Luxury Lodge",
    image: bisateLodge,
    type: "Luxury Lodge",
    description: "Crater edge luxury stay"
  }
}

];