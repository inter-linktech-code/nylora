import Head from "next/head";

export default function UgandaLuxurySafaris() {
  return (
    <>
      {/* =========================
          SEO META (CRITICAL FOR GOOGLE)
      ========================= */}
      <Head>
        <title>
          Uganda Luxury Safaris | Gorilla Trekking Bwindi & Wildlife Tours | Nylora Safaris
        </title>

        <meta
          name="description"
          content="Discover Uganda luxury safaris including gorilla trekking in Bwindi, chimpanzee tracking in Kibale, and wildlife safaris in Queen Elizabeth and Murchison Falls National Parks."
        />

        <meta
          name="keywords"
          content="
            Uganda luxury safaris,
            Uganda safari tours,
            gorilla trekking Uganda,
            Bwindi gorilla trekking,
            Queen Elizabeth National Park safari,
            Murchison Falls safari,
            Uganda wildlife safaris,
            East Africa safari Uganda
          "
        />
      </Head>

      <main className="uganda-page">

        {/* HERO */}
        <section className="hero">
          <h1>Uganda Luxury Safaris & Gorilla Trekking Experiences</h1>

          <p>
            Experience the best Uganda luxury safaris with mountain gorilla trekking in Bwindi,
            Big Five wildlife viewing, and tailor-made safari adventures across Uganda’s top national parks.
          </p>

          <a
            href="https://wa.me/256742706323?text=Hello%20Nylora%20Luxury%20Safaris,%20I%20want%20a%20Uganda%20luxury%20safari."
            className="cta"
            target="_blank"
            rel="noreferrer"
          >
            Plan Your Uganda Safari
          </a>
        </section>

        {/* ABOUT UGANDA SAFARIS */}
        <section>
          <h2>Why Choose Uganda for Luxury Safaris?</h2>

          <p>
            Uganda is known as the “Pearl of Africa” and offers some of the most diverse safari
            experiences in East Africa, including gorilla trekking, chimpanzee tracking,
            savannah game drives, and boat safaris along the Nile.
          </p>
        </section>

        {/* TOP EXPERIENCES */}
        <section>
          <h2>Top Uganda Safari Experiences</h2>

          <ul>
            <li>Bwindi Impenetrable Forest Gorilla Trekking</li>
            <li>Queen Elizabeth National Park Game Drives</li>
            <li>Murchison Falls National Park Safari</li>
            <li>Kibale Forest Chimpanzee Tracking</li>
            <li>Lake Mburo Wildlife Safari</li>
          </ul>
        </section>

        {/* GORILLA TREKKING SECTION */}
        <section>
          <h2>Mountain Gorilla Trekking in Bwindi</h2>

          <p>
            Gorilla trekking in Bwindi Impenetrable National Park is one of the world’s most
            exclusive wildlife experiences. Spend one unforgettable hour with endangered
            mountain gorillas in their natural rainforest habitat.
          </p>
        </section>

        {/* NATIONAL PARKS */}
        <section>
          <h2>Top Uganda National Parks</h2>

          <ul>
            <li>Bwindi Impenetrable National Park</li>
            <li>Queen Elizabeth National Park</li>
            <li>Murchison Falls National Park</li>
            <li>Kibale Forest National Park</li>
            <li>Lake Mburo National Park</li>
          </ul>
        </section>

        {/* SAFARI PACKAGES */}
        <section>
          <h2>Popular Uganda Safari Packages</h2>

          <ul>
            <li>3-Day Bwindi Gorilla Trekking Safari</li>
            <li>5-Day Uganda Wildlife & Gorilla Safari</li>
            <li>7-Day Luxury Uganda Safari Experience</li>
          </ul>
        </section>

        {/* WHY US */}
        <section>
          <h2>Why Travel With Nylora Safaris</h2>

          <ul>
            <li>Expert local safari guides</li>
            <li>Private luxury safari vehicles</li>
            <li>Custom-tailored safari itineraries</li>
            <li>24/7 safari support in Uganda</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2>Start Your Uganda Luxury Safari Today</h2>

          <p>
            Let us design your unforgettable Uganda safari experience including gorilla trekking,
            wildlife tours, and luxury lodge stays.
          </p>

          <a
            href="https://wa.me/256700000000"
            className="cta"
            target="_blank"
            rel="noreferrer"
          >
            Get Safari Quote on WhatsApp
          </a>
        </section>

      </main>
    </>
  );
}