import jsPDF from "jspdf";
import html2canvas from "html2canvas";

/**
 * Luxury Magazine PDF Generator V2
 * Multi-page safari brochure
 */
export const generateSafariBrochureV2 = async (booking) => {
  const pdf = new jsPDF("p", "mm", "a4");

  const createPage = async (html) => {
    const wrapper = document.createElement("div");

    wrapper.style.width = "1200px";
    wrapper.style.padding = "60px";
    wrapper.style.background = "#0b0f0d";
    wrapper.style.color = "#fff";
    wrapper.style.fontFamily = "Georgia, serif";

    wrapper.innerHTML = html;

    document.body.appendChild(wrapper);

    const canvas = await html2canvas(wrapper, { scale: 2 });
    const img = canvas.toDataURL("image/png");

    const width = 210;
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(img, "PNG", 0, 0, width, height);
    pdf.addPage();

    document.body.removeChild(wrapper);
  };

  /* =========================
     PAGE 1 — COVER
  ========================= */
  await createPage(`
    <div style="text-align:center;border:2px solid #d4af37;padding:80px;border-radius:20px">
      <h1 style="font-size:48px;color:#d4af37">Luxury African Safari</h1>
      <h2 style="margin-top:20px">${booking.tour}</h2>
      <p style="margin-top:30px;opacity:0.8">
        A handcrafted private journey across East Africa
      </p>
      <h3 style="margin-top:50px;color:#d4af37">
        BWERA LUXURY SAFARIS
      </h3>
    </div>
  `);

  /* =========================
     PAGE 2 — TRIP OVERVIEW
  ========================= */
  await createPage(`
    <h1 style="color:#d4af37">Trip Overview</h1>

    <p><b>Guest:</b> ${booking.name}</p>
    <p><b>Country:</b> ${booking.country}</p>
    <p><b>Date:</b> ${booking.date}</p>
    <p><b>Travelers:</b> ${booking.people}</p>
    <p><b>Budget:</b> ${booking.budget}</p>
    <p><b>Style:</b> ${booking.travelStyle}</p>

    <hr style="margin:30px 0;border-color:#333"/>

    <p style="line-height:1.8;opacity:0.85">
      This luxury safari has been carefully designed to include premium lodges,
      private game drives, and exclusive wildlife encounters across East Africa.
    </p>
  `);

  /* =========================
     PAGE 3 — WHAT TO EXPECT
  ========================= */
  await createPage(`
    <h1 style="color:#d4af37">What to Expect</h1>

    <ul style="line-height:2;opacity:0.85">
      <li>Private safari vehicle & expert guide</li>
      <li>Luxury lodges & tented camps</li>
      <li>Gorilla & chimpanzee trekking (if included)</li>
      <li>Big Five wildlife encounters</li>
      <li>Sunset game drives & photography moments</li>
      <li>Curated luxury dining experiences</li>
    </ul>
  `);

  /* =========================
     PAGE 4 — DAY BY DAY (TEMPLATE)
  ========================= */
  await createPage(`
    <h1 style="color:#d4af37">Day-by-Day Itinerary</h1>

    <h3>Day 1 — Arrival</h3>
    <p>Private transfer to luxury lodge. Welcome dinner.</p>

    <h3>Day 2 — Safari Begins</h3>
    <p>Morning game drive and evening sundowner experience.</p>

    <h3>Day 3 — Wildlife Exploration</h3>
    <p>Full-day safari in national park with expert guide.</p>

    <p style="margin-top:30px;opacity:0.7">
      (Full custom itinerary can be dynamically generated per tour)
    </p>
  `);

  /* =========================
     PAGE 5 — LODGE EXPERIENCE
  ========================= */
  await createPage(`
    <h1 style="color:#d4af37">Luxury Lodges</h1>

    <p style="line-height:1.8;opacity:0.85">
      You will stay in carefully selected luxury lodges offering world-class comfort,
      wilderness views, and premium hospitality.
    </p>

    <ul style="margin-top:20px;line-height:2">
      <li>Private suites with panoramic views</li>
      <li>Infinity pools in the wild</li>
      <li>Gourmet dining experiences</li>
      <li>Spa & wellness treatments</li>
    </ul>
  `);

  /* =========================
     FINAL PAGE
  ========================= */
  await createPage(`
    <div style="text-align:center;border:2px solid #d4af37;padding:60px;border-radius:20px">
      <h1 style="color:#d4af37">Thank You</h1>

      <p style="margin-top:20px;opacity:0.8">
        We look forward to hosting you on an unforgettable African journey.
      </p>

      <h2 style="margin-top:40px;color:#d4af37">
        BWERA LUXURY SAFARIS
      </h2>

      <p style="opacity:0.6">“Beyond Travel — A Luxury African Story”</p>
    </div>
  `);

  pdf.deletePage(pdf.getNumberOfPages());
  pdf.save(`Luxury-Safari-Magazine-${booking.name}.pdf`);
};