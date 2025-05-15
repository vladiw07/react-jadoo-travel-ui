import BookingStepsSection from "./components/BookingStepsSection.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import ServiceCardsSection from "./components/ServiceCardsSection.jsx";
import Testimonials from "./components/Testimonials.jsx";
import TopDestinations from "./components/TopDestinations.jsx";

function App() {
  return (
    <div className="overflow-x-hidden">
      

      <Navbar />
      <Hero />
      <ServiceCardsSection />
      <TopDestinations />
      <BookingStepsSection />
      <Testimonials />


    </div>
  );
}

export default App;
