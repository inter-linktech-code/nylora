import HeroSection from "../components/HeroSection";
import FeaturedTours from "../sections/FeaturedTours";
import DestinationsSection from "../sections/DestinationsSection";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedTours />
      <DestinationsSection />
      <ContactSection />
    </>
  );
}