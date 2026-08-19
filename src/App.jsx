import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ================= PAGES ================= */
import Home from "./pages/Home";
import Itineraries from "./pages/Itineraries";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import TravelGuide from "./pages/TravelGuide";
import Booking from "./pages/Booking";
import PlanMySafari from "./pages/PlanMySafari";
import TourPage from "./pages/TourPage";

/* ================= ADMIN ================= */
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* ================= HOME ================= */}
        <Route path="/" element={<Home />} />

        {/* ================= ITINERARIES LIST ================= */}
        <Route path="/itineraries" element={<Itineraries />} />

        {/* ================= TOUR SEO PAGE ================= */}
        <Route path="/itineraries/:region/:slug" element={<TourPage />} />

        {/* ================= BOOKING ================= */}
        <Route path="/booking" element={<Booking />} />

        {/* (OPTIONAL FUTURE UPGRADE - ID BASED BOOKING) */}
        <Route path="/booking/:tourId" element={<Booking />} />

        {/* ================= AI SAFARI PLANNER ================= */}
        <Route path="/plan-my-safari" element={<PlanMySafari />} />

        {/* ================= DESTINATIONS ================= */}
        <Route path="/destinations" element={<Destinations />} />

        {/* ================= ABOUT ================= */}
        <Route path="/about" element={<About />} />

        {/* ================= CONTACT ================= */}
        <Route path="/contact" element={<Contact />} />

        {/* ================= GALLERY ================= */}
        <Route path="/gallery" element={<Gallery />} />

        {/* ================= TRAVEL GUIDE ================= */}
        <Route path="/travel-guide" element={<TravelGuide />} />

        {/* ================= ADMIN LOGIN ================= */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* ================= ADMIN DASHBOARD ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />
    </>
  );
}