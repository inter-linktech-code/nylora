import "./FeaturedTours.css";
import { Link } from "react-router-dom";
import { tours } from "../data/toursData";

export default function FeaturedTours() {
  const whatsappNumber = "25670000000";

  // PICK ONLY 4 PREMIUM HIGHLIGHTS
  const featuredTours = tours
    .filter((tour) => tour.featured)
    .slice(0, 4);

  return (
    <section className="lux-featured">

      {/* HEADER */}
      <div className="lux-featured-header">
        <small>Premium African Luxury Safaris</small>

        <h2>Featured Luxury Safari Experiences</h2>

        <p>
          Hand-selected ultra-luxury safaris across Uganda, Rwanda, Kenya & Tanzania.
        </p>
      </div>

      {/* CARDS */}
      <div className="lux-featured-grid">

        {featuredTours.map((tour) => {

          const message = encodeURIComponent(
            `Hello Nylora Safaris, I am interested in the ${tour.title}. Please share full itinerary, pricing and availability.`
          );

          return (
            <div className="lux-card" key={tour.id}>

              {/* IMAGE */}
              <div className="lux-card-image">
                <img src={tour.image} alt={tour.title} />
                <div className="lux-badge">{tour.duration}</div>
              </div>

              {/* CONTENT */}
              <div className="lux-card-content">

                <span className="lux-location">{tour.location}</span>

                <h3>{tour.title}</h3>

                <p>{tour.summary}</p>

                <div className="lux-meta">
                  <span>{tour.region}</span>
                  <span className="price">{tour.price}</span>
                </div>

                {/* ACTIONS */}
                <div className="lux-actions">

                  {/* BOOKING PAGE (PRIMARY FLOW) */}
                  <Link
                    to="/booking"
                    state={{ tour }}
                    className="lux-btn primary"
                  >
                    View Itinerary & Book
                  </Link>

                  {/* WHATSAPP (SECONDARY FLOW) */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lux-btn secondary"
                  >
                    WhatsApp Inquiry
                  </a>

                </div>

              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}