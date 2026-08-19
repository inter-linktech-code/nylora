import { useEffect, useState } from "react";
import "./HeroSection.css";

/* IMAGES */
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

const slides = [hero1, hero2, hero3, hero4];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const whatsappNumber = "2567000000";

  const whatsappMessage =
    "Hello, I would like to design a private luxury safari experience in East Africa.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="lux-hero">

      {/* BACKGROUND SLIDES */}
      {slides.map((img, i) => (
        <div
          key={i}
          className={`lux-slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="lux-overlay"></div>

      {/* CONTENT */}
      <div className="lux-container">
        <div className="lux-content">

          {/* SMALL BADGE */}
          <div className="lux-badge">
            Uganda • Rwanda • Kenya • Tanzania
          </div>

          {/* MAIN HEADING */}
          <h1>
            Luxury African
            <span>Safari Experiences</span>
          </h1>

          {/* SUBTEXT */}
          <p>
            Private gorilla trekking, Big Five safaris, and bespoke journeys
            crafted with world-class lodges and expert guides.
          </p>

          {/* CTA */}
          <div className="lux-buttons">

            <a href={whatsappLink} className="lux-btn primary">
              Plan My Safari
            </a>

            <a href="/itineraries" className="lux-btn secondary">
              Explore Journeys
            </a>

          </div>

          {/* TRUST LINE */}
          <div className="lux-trust">
            Private guides • Luxury lodges • Tailor-made itineraries
          </div>

        </div>
      </div>

    </section>
  );
}