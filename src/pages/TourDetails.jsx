import React from "react";
import { tours } from "../data/tourdata"; // adjust path if needed
import "./Itineraries.css";

export default function Itineraries() {
  if (!Array.isArray(tours)) {
    return <div>Loading tours...</div>;
  }

  return (
    <section className="itineraries-page">

      <div className="container">

        <h1 className="page-title">Luxury Safari Itineraries</h1>

        <div className="tours-grid">

          {tours.map((tour) => (
            <div className="tour-card" key={tour.id}>

              {/* TOUR IMAGE */}
              <div className="tour-image">
                <img
                  src={tour.image}
                  alt={tour.title || "Luxury safari"}
                />
              </div>

              {/* TITLE + BASIC INFO */}
              <div className="tour-content">

                <h2>{tour.title}</h2>

                <p className="tour-description">
                  {tour.description}
                </p>

                <div className="tour-meta">
                  <p><strong>Location:</strong> {tour.location}</p>
                  <p><strong>Duration:</strong> {tour.duration}</p>
                  <p><strong>Price:</strong> {tour.price}</p>
                </div>

                {/* HIGHLIGHTS */}
                {tour.highlights?.length > 0 && (
                  <div className="tour-section">
                    <h3>Highlights</h3>
                    <ul>
                      {tour.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* ITINERARY */}
                {tour.itinerary?.length > 0 && (
                  <div className="tour-section">
                    <h3>Itinerary</h3>
                    <ul>
                      {tour.itinerary.map((day, i) => (
                        <li key={i}>
                          <strong>{day.day}:</strong> {day.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* ACCOMMODATION (LUXURY LODGE SECTION) */}
                {tour.accommodation && (
                  <div className="tour-section luxury-lodge">

                    <h3>Luxury Lodge Stay</h3>

                    <p className="lodge-name">
                      <strong>{tour.accommodation.name}</strong>
                    </p>

                    <p>{tour.accommodation.type}</p>
                    <p>{tour.accommodation.description}</p>

                  </div>
                )}

                {/* CTA */}
                <div className="tour-cta">
                  <a
                    href="https://wa.me/256708610067"
                    target="_blank"
                    rel="noreferrer"
                    className="book-btn"
                  >
                    Book This Safari
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}