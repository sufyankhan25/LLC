import React from "react";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-white pt-16">
      <div className="text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">Your Business, Our Expertise</h2>
        <p className="text-lg md:text-xl mb-6 text-gray-700">We help entrepreneurs and companies launch and grow their LLCs with confidence.</p>
        <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition">Start Now</a>
      </div>
    </section>
  );
};

export default Hero;
