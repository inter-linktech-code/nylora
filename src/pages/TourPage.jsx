import { useParams } from "react-router-dom";
import { tours } from "../data/toursData";
import "./TourPage.css";

export default function TourPage() {
  const { region, slug } = useParams();

  const tour = tours.find(
    (t) => t.region === region && t.slug === slug
  );

  if (!tour) {
    return (
      <div style={{ padding: "100px", color: "#fff" }}>
        <h2>Tour not found</h2>
      </div>
    );
  }

  const whatsappNumber = "25670000000";

  const whatsappMessage = encodeURIComponent(
    `Hello Nylora Safaris, I want to book the ${tour.title}. Please send details.`
  );

  return (
    <div className="tour-page">

      {/* HERO IMAGE */}
      <div
        className="tour-hero"
        style={{ backgroundImage: `url(${tour.image})` }}
      >
        <div className="hero-overlay">

          <h1>{tour.title}</h1>

          <p>{tour.description}</p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            className="btn-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book This Safari
          </a>

        </div>
      </div>

      {/* DETAILS */}
      <div className="tour-content">

        {/* META */}
        <div className="tour-meta">
          <p><strong>📍 Location:</strong> {tour.location}</p>
          <p><strong>🕒 Duration:</strong> {tour.duration}</p>
          <p><strong>💰 Price:</strong> {tour.price}</p>
        </div>

        {/* WHAT TO EXPECT / HIGHLIGHTS */}
        <h2>Highlights</h2>
        <ul>
          {tour.highlights?.map((h, i) => (
            <li key={i}>✓ {h}</li>
          ))}
        </ul>

        {/* ITINERARY */}
        <h2>Day by Day Itinerary</h2>
        <div className="itinerary">
          {tour.itinerary?.map((item, i) => (
            <div key={i} className="day-card">
              <h4>{item.day}</h4>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* 🏨 ACCOMMODATION (YOU WERE MISSING THIS) */}
        {tour.accommodation && (
          <div className="accommodation-section">

            <h2>Your Luxury Lodge</h2>

            <img
              src={tour.accommodation.image}
              alt={tour.accommodation.name}
            />

            <h3>{tour.accommodation.name}</h3>

            <p>{tour.accommodation.description}</p>

          </div>
        )}

      </div>
    </div>
  );
}