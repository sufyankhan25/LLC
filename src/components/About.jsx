import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-10 bg-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex flex-col items-center mb-10">
          <img
            src="/niranjan.png"
            alt="Niranjan Kumar"
            className="w-28 h-28 rounded-full shadow-md object-cover mb-4"
          />
          <h2 className="text-4xl font-bold">Niranjan Kumar</h2>
          <p className="text-gray-500 mt-1">
            🇵🇰 US Tax Specialist | English Speaker
          </p>
          <p className="text-blue-600 font-medium mt-2 max-w-xl">
            “Your trusted partner for LLC formation, tax filing, and state-wide compliance services — handled fast, secure, and stress-free.”
          </p>
        </div>

        <div className="text-left md:text-center text-gray-700 md:grid md:grid-cols-2 gap-8">
          <p className="text-lg leading-relaxed">
            I’m a certified tax specialist with over 2 years of experience in tax preparation, business registration, and financial analysis.
            I’ve worked extensively with IRS forms like <strong>1040, 1065, 1120</strong> — helping clients file accurately and on time.
          </p>
          <p className="text-lg leading-relaxed mt-6 md:mt-0">
            I support entrepreneurs in forming LLCs and corporations, applying for <strong>ITINs & EINs</strong>, and securing reseller certificates
            in all 50 states. I specialize in Sales & Use Tax filings and ensure full compliance at every step.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3 text-sm text-blue-700 font-medium mt-10">
          {[
            "Company Registration",
            "Tax Consulting",
            "Income Tax Return",
            "Financial Analysis",
            "Startup Consulting",
            "Corporate Taxation",
            "Data Analysis",
            "Microsoft Office"
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 px-4 py-1 rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://www.fiverr.com/niranjan_taxpro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition duration-200"
          >
            Message Niranjan on Fiverr
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
