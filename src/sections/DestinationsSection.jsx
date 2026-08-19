import { Link } from "react-router-dom";
import "./DestinationsSection.css";

// Images
import bwindi from "../assets/bwindi.jpg";
import murchison from "../assets/murchison.jpg";
import queen from "../assets/queen.jpg";
import kibale from "../assets/kibale.jpg";
import bunyonyi from "../assets/bunyonyi.jpg";
import kidepo from "../assets/kidepo.jpg";

export default function DestinationsSection() {
  const destinations = [
    {
      id: "bwindi",
      title: "Bwindi Impenetrable Forest",
      subtitle: "Luxury Gorilla Trekking Uganda",
      link: "/uganda-luxury-safaris/bwindi-gorilla-trekking",
      image: bwindi,
    },
    {
      id: "murchison-falls",
      title: "Murchison Falls National Park",
      subtitle: "Luxury Wildlife Safari Uganda",
      link: "/uganda-luxury-safaris/murchison-falls",
      image: murchison,
    },
    {
      id: "queen-elizabeth",
      title: "Queen Elizabeth National Park",
      subtitle: "Tree Climbing Lions Experience",
      link: "/uganda-luxury-safaris/queen-elizabeth",
      image: queen,
    },
    {
      id: "kibale",
      title: "Kibale Forest National Park",
      subtitle: "Chimpanzee Tracking Experience",
      link: "/uganda-luxury-safaris/kibale-chimpanzee-tracking",
      image: kibale,
    },
    {
      id: "lake-bunyonyi",
      title: "Lake Bunyonyi",
      subtitle: "Luxury Scenic Retreat Uganda",
      link: "/uganda-luxury-safaris/lake-bunyonyi",
      image: bunyonyi,
    },
    {
      id: "kidepo",
      title: "Kidepo Valley National Park",
      subtitle: "Untouched Luxury Wilderness Safari",
      link: "/uganda-luxury-safaris/kidepo-valley",
      image: kidepo,
    },
  ];

  return (
    <section className="destinations">
      <div className="container">

        {/* SEO HEADER */}
        <div className="section-header">

          <small>Uganda Luxury Safari Destinations</small>

          <h2>
            Explore Uganda’s Most Exclusive Safari Parks
          </h2>

          <p>
            Discover luxury gorilla trekking in Bwindi, Big Five safaris in
            Murchison Falls, chimpanzee tracking in Kibale, and breathtaking
            landscapes across Uganda’s most iconic national parks.
          </p>

        </div>

        {/* GRID */}
        <div className="destinations-grid">

          {destinations.map((d) => (
            <div className="destination-card" key={d.id}>

              <img src={d.image} alt={d.title} />

              <div className="destination-overlay">

                <small>{d.subtitle}</small>

                <h3>{d.title}</h3>

                <Link
                  to={d.link}
                  className="destination-btn"
                >
                  Explore Experience
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}