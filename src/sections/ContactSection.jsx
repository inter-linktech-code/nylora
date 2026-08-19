import "./ContactSection.css";
import gorilla from "../assets/gorilla.jpg";

export default function ContactSection() {
  const whatsappNumber = "256700000000";

  const whatsappMessage =
    "Hello Nylora Safaris, I would like to plan a luxury safari in Uganda and Rwanda.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      className="contact"
      style={{ backgroundImage: `url(${gorilla})` }}
    >
      <div className="contact-overlay"></div>

      <div className="container">

        <div className="contact-content">

          <small>Nylora Safaris</small>

          <h2>
            Luxury Gorilla Trekking
            <br />
            Begins Here
          </h2>

          <p>
            Experience bespoke luxury safaris across Uganda and Rwanda,
            including gorilla trekking in Bwindi and Volcanoes National Park,
            private wildlife safaris, and tailor-made African journeys designed
            for discerning travelers.
          </p>

          <div className="contact-buttons">

            <a
              href={whatsappLink}
              className="btn gold"
              target="_blank"
              rel="noreferrer"
            >
              Plan on WhatsApp
            </a>

            <a href="#tours" className="btn outline">
              Explore Journeys
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}