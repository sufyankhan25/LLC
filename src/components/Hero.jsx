import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-50 pt-20"
    >
      <div className="text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight mb-4">
          Launch Your LLC with Confidence
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Fast, simple LLC formation, tax guidance, and ongoing business support —
          all handled by trusted professionals.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Start Your LLC Today
        </a>

        {/* Optional trust badge or stats */}
        <div className="mt-6 text-sm text-gray-500">
          Trusted by 100+ entrepreneurs | 5-Star Rated Support
        </div>
      </div>
    </section>
  );
};

export default Hero;
