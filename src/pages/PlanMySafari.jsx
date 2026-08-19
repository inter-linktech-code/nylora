import { useState } from "react";
import { tours } from "../data/toursData";
import "./Planner.css";

export default function PlanMySafari() {
  const [days, setDays] = useState(5);
  const [region, setRegion] = useState("all");
  const [budget, setBudget] = useState(5000);
  const [type, setType] = useState("all");

  const filtered = tours.filter((tour) => {
    const matchRegion = region === "all" || tour.region.includes(region);
    const matchType = type === "all" || tour.category === type;

    const tourPrice = parseInt(tour.price.replace(/[^0-9]/g, ""));

    const matchBudget = tourPrice <= budget;

    const tourDays = parseInt(tour.duration);

    const matchDays = tourDays <= days;

    return matchRegion && matchType && matchBudget && matchDays;
  });

  return (
    <div className="planner">

      <h1>AI Safari Planner</h1>

      {/* INPUTS */}
      <div className="planner-form">

        <label>
          Days
          <input
            type="range"
            min="2"
            max="14"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
          <span>{days} days</span>
        </label>

        <label>
          Budget (USD)
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </label>

        <label>
          Region
          <select onChange={(e) => setRegion(e.target.value)}>
            <option value="all">All Africa</option>
            <option value="uganda">Uganda</option>
            <option value="rwanda">Rwanda</option>
            <option value="kenya">Kenya</option>
            <option value="tanzania">Tanzania</option>
          </select>
        </label>

        <label>
          Experience Type
          <select onChange={(e) => setType(e.target.value)}>
            <option value="all">All</option>
            <option value="gorilla">Gorilla Trekking</option>
            <option value="wildlife">Wildlife Safari</option>
            <option value="adventure">Adventure</option>
          </select>
        </label>

      </div>

      {/* RESULTS */}
      <div className="planner-results">

        <h2>Recommended Luxury Safaris</h2>

        {filtered.length === 0 && (
          <p>No matching safaris found. Increase budget or days.</p>
        )}

        {filtered.map((tour) => (
          <div key={tour.id} className="planner-card">

            <img src={tour.image} alt={tour.title} />

            <div>
              <h3>{tour.title}</h3>
              <p>{tour.summary}</p>

              <p>
                <strong>{tour.duration}</strong> | {tour.price}
              </p>

              <button
                onClick={() =>
                  window.location.href = `/itineraries/${tour.region}/${tour.slug}`
                }
              >
                View Full Itinerary
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}