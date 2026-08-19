import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Safaris from "./pages/Safaris";
import Destinations from "./pages/Destinations";
import Uganda from "./pages/Uganda";
import Rwanda from "./pages/Rwanda";
import Booking from "./pages/Booking";
import GorillaTrekking from "./pages/GorillaTrekking";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="app">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <main>

        <Routes>

          {/* =================================================
              HOME
          ================================================= */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* =================================================
              ABOUT
          ================================================= */}

          <Route
            path="/about"
            element={<About />}
          />


          {/* =================================================
              SAFARIS
          ================================================= */}

          <Route
            path="/safaris"
            element={<Safaris />}
          />


          {/* =================================================
              DESTINATIONS
          ================================================= */}

          <Route
            path="/destinations"
            element={<Destinations />}
          />


          {/* =================================================
              UGANDA
          ================================================= */}

          <Route
            path="/destinations/uganda"
            element={<Uganda />}
          />


          {/* =================================================
              RWANDA
          ================================================= */}

          <Route
            path="/destinations/rwanda"
            element={<Rwanda />}
          />


          {/* =================================================
              GORILLA & GOLDEN MONKEY TREKKING
          ================================================= */}

          <Route
            path="/gorilla-trekking"
            element={<GorillaTrekking />}
          />


          {/* =================================================
              BOOKING
          ================================================= */}

          <Route
            path="/booking"
            element={<Booking />}
          />


          {/* =================================================
              CONTACT
          ================================================= */}

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </div>
  );
}