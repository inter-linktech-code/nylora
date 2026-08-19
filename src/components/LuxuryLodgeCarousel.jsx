import "./LuxuryLodgeCarousel.css";
import { luxuryLodges } from "../data/toursData";

export default function LuxuryLodgeCarousel() {
  const lodges = Array.isArray(luxuryLodges) ? luxuryLodges : [];

  return (
    <section className="lodge-carousel-section">

      <div className="lodge-header">
        <h2>Our Luxury Safari Lodges</h2>
        <p>
          Hand-picked ultra-luxury safari lodges across Uganda, Rwanda,
          Kenya & Tanzania.
        </p>
      </div>

      <div className="lodge-carousel">

        {lodges.length === 0 ? (
          <p style={{ color: "white" }}>No lodges available</p>
        ) : (
          lodges.map((lodge, index) => (
            <div className="lodge-card" key={index}>
              <div className="lodge-image-wrapper">
                <img src={lodge.image} alt={lodge.name} />
                <div className="lodge-overlay">
                  <h3>{lodge.name}</h3>
                </div>
              </div>
            </div>
          ))
        )}

      </div>

    </section>
  );
}