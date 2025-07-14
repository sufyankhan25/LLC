import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Differentiators from "./components/Differentiators";
import About from "./components/About";
import WhyUs from "./components/WhyUs"; // ✅ Newly added WhyUs section
import Benefits from "./components/Benefits"; // ✅ Newly added Benefits section
import Process from "./components/Process";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Differentiators />
      <About />
      <WhyUs />        {/* ✅ Trust Section */}
      <Benefits />     {/* ✅ LLC Advantages Section */}
      <Process />
      <Services />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
