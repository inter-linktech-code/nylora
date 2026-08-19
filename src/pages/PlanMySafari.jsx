import { useState } from "react";
import { tours } from "../data/toursData";
import "./Planner.css";

export default function PlanMySafari() {
  const [days, setDays] = useState(5);
  const [region, setRegion] = useState("all");
  const [budget, setBudget] = useState(5000);
  const [type, setType] = useState("all");

  const filtered = Array.isArray(tours)
    ? tours.filter((tour) => {
        const tourRegion = String(tour?.region || "").toLowerCase();
        const tourCategory = String(tour?.category || "").toLowerCase();

        const selectedRegion = String(region).toLowerCase();
        const selectedType = String(type).toLowerCase();

        const matchRegion =
          selectedRegion === "all" ||
          tourRegion.includes(selectedRegion);

        const matchType =
          selectedType === "all" ||
          tourCategory.includes(selectedType);

        const tourPrice =
          typeof tour?.price === "number"
            ? tour.price
            : parseInt(
                String(tour?.price || "0").replace(/[^0-9]/g, ""),
                10
              ) || 0;

        const matchBudget = tourPrice <= Number(budget);

        const tourDays =
          typeof tour?.duration === "number"
            ? tour.duration
            : parseInt(
                String(tour?.duration || "0").replace(/[^0-9]/g, ""),
                10
              ) || 0;

        const matchDays = tourDays <= Number(days);

        return (
          matchRegion &&
          matchType &&
          matchBudget &&
          matchDays
        );
      })
    : [];

  return (
    <div className="planner">

      <h1>AI Safari Planner</h1>

      <div className="planner-form">

        <label>
          Days

          <input
            type="range"
            min="2"
            max="14"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          />

          <span>{days} days</span>
        </label>

        <label>
          Budget (USD)

          <input
            type="number"
            min="0"
            value={budget}
            onChange={(e) =>
              setBudget(Number(e.target.value))
            }
          />
        </label>

        <label>
          Region

          <select
            value={region}
            onChange={(e) =>
              setRegion(e.target.value)
            }
          >
            <option value="all">All Africa</option>
            <option value="uganda">Uganda</option>
            <option value="rwanda">Rwanda</option>
            <option value="kenya">Kenya</option>
            <option value="tanzania">Tanzania</option>
          </select>
        </label>

        <label>
          Experience Type

          <select
            value={type}
            onChange={(e) =>
              setType(e.target.value)
            }
          >
            <option value="all">All</option>
            <option value="gorilla">Gorilla Trekking</option>
            <option value="wildlife">Wildlife Safari</option>
            <option value="adventure">Adventure</option>
          </select>
        </label>

      </div>

      <div className="planner-results">

        <h2>Recommended Luxury Safaris</h2>

        {filtered.length === 0 && (
          <p>
            No matching safaris found. Increase your budget
            or number of days.
          </p>
        )}

        {filtered.map((tour) => (
          <div
            key={tour.id}
            className="planner-card"
          >

            <img
              src={tour.image}
              alt={tour.title}
            />

            <div>
              <h3>{tour.title}</h3>

              <p>
                {tour.summary}
              </p>

              <p>
                <strong>
                  {tour.duration}
                </strong>{" "}
                | {tour.price}
              </p>

              <button
                type="button"
                onClick={() => {
                  window.location.href =
                    `/itineraries/${tour.region}/${tour.slug}`;
                }}
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