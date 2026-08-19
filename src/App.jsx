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
import TravelServices from "./pages/TravelServices";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="app">

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/safaris" element={<Safaris />} />

        <Route path="/destinations" element={<Destinations />} />

        <Route
          path="/destinations/uganda"
          element={<Uganda />}
        />

        <Route
          path="/destinations/rwanda"
          element={<Rwanda />}
        />

        <Route
          path="/gorilla-trekking"
          element={<GorillaTrekking />}
        />

        <Route
          path="/travel-services"
          element={<TravelServices />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      <Footer />

    </div>
  );
}