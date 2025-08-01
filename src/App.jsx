import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import CallToAction from "./components/CallToAction";
import QuestionsSection from "./components/ques";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans scroll-smooth">
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="features">
        <FeaturesSection />
      </div>

      <div id="pricing">
        <PricingSection />
      </div>

      <div id="contact">
        <CallToAction />
      </div>

      <QuestionsSection />
      <Footer />
    </div>
  );
}

export default App;
