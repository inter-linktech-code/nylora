import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site Footer">

      <div className="container">

        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <h2>NYLORA SAFARIS</h2>
            <p>Luxury Safaris in Uganda, Rwanda & East Africa</p>

            <p className="tagline">
              Entebbe & Kampala-based luxury safari operator specializing in
              bespoke journeys across Uganda, Rwanda, Kenya, and Tanzania.
              Experience gorilla trekking, Big Five safaris, and tailor-made
              East African adventures designed with excellence and authenticity.
            </p>
          </div>

          {/* EXPLORE */}
          <div className="footer-links">
            <h3>Explore</h3>
            <a href="/">Home</a>
            <a href="/tours">Luxury Safaris</a>
            <a href="/destinations">Destinations</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
          </div>

          {/* DESTINATIONS SEO SECTION */}
          <div className="footer-links">
            <h3>Destinations</h3>
            <a href="/uganda-safaris">Uganda Luxury Safaris</a>
            <a href="/rwanda-gorilla-tours">Rwanda Gorilla Trekking</a>
            <a href="/kenya-safaris">Kenya Wildlife Safaris</a>
            <a href="/tanzania-safaris">Tanzania Serengeti Safaris</a>
            <a href="/east-africa">East Africa Safari Packages</a>
          </div>

          {/* CONTACT */}
          <div className="footer-links">
            <h3>Contact</h3>
            <p>Kampala, Uganda</p>
            <p>+256 70000000</p>
            <p>info@nylorasafaris.com</p>
          </div>

          {/* CTA */}
          <div className="footer-cta">
            <h3>Plan Your Luxury Safari</h3>
            <p>
              Speak with a safari expert and design your tailor-made East African journey.
            </p>

            <a
              href="https://wa.me/2567000000?text=Hello%20Nylora%20Luxury%20Safaris,%20I%20want%20to%20plan%20a%20luxury%20safari%20in%20East%20Africa."
              target="_blank"
              rel="noreferrer"
              className="footer-btn"
            >
              WhatsApp Us
            </a>
          </div>

        </div>

        {/* SEO + TRUST FOOTER BAR */}
        <div className="footer-bottom">

          <p>
            © {currentYear} Nylora Safaris Experts in Uganda,
            Rwanda & East Africa. All Rights Reserved.
          </p>

          <p className="powered">
            Powered by{" "}
            <a href="https://inter-linktech.com" target="_blank" rel="noreferrer">
              INTER-LINK TECH
            </a>
          </p>

        </div>

      </div>

      {/* SEO STRUCTURED DATA (VERY IMPORTANT FOR GOOGLE) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Nylora Safaris",
          "url": "https://nylorasafaris.com",
          "telephone": "+2567000000",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kampala",
            "addressCountry": "Uganda"
          },
          "description":
            "Luxury safari company specializing in Uganda safaris, Rwanda gorilla trekking, Kenya and Tanzania wildlife safaris, and bespoke East Africa travel experiences.",
          "areaServed": [
            "Uganda",
            "Rwanda",
            "Kenya",
            "Tanzania",
            "East Africa"
          ],
          "sameAs": [
            "https://wa.me/25670000000"
          ]
        })}
      </script>

    </footer>
  );
}