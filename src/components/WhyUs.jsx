import React from "react";
import { ShieldCheck, ThumbsUp, Clock, Briefcase, DollarSign } from "lucide-react";

const WhyUs = () => {
  return (
    <section id="whyus" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-12 text-blue-700">Why Choose FACT?</h3>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <WhyUsCard
            icon={<ShieldCheck className="text-blue-600 mb-3" size={36} />}
            title="Trusted & Compliant"
            desc="We strictly follow all IRS & state rules to ensure your filings are accurate and risk-free."
          />
          <WhyUsCard
            icon={<ThumbsUp className="text-blue-600 mb-3" size={36} />}
            title="Client Satisfaction"
            desc="Over 500+ satisfied customers — we provide end-to-end support with complete transparency."
          />
          <WhyUsCard
            icon={<Clock className="text-blue-600 mb-3" size={36} />}
            title="Fast Turnaround"
            desc="Quick processing of ITINs, EINs, DBAs, and LLCs to help you start your business ASAP."
          />
          <WhyUsCard
            icon={<Briefcase className="text-blue-600 mb-3" size={36} />}
            title="All-In-One Platform"
            desc="From tax returns to compliance and trademarks — we handle it all, saving you time and stress."
          />
          <WhyUsCard
            icon={<DollarSign className="text-blue-600 mb-3" size={36} />}
            title="Transparent Pricing"
            desc="No hidden charges. Upfront pricing for every service, with flexible package options."
          />
        </div>
      </div>
    </section>
  );
};

const WhyUsCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
    <div className="text-center">{icon}</div>
    <h4 className="text-xl font-semibold text-center mb-2">{title}</h4>
    <p className="text-gray-600 text-sm text-center">{desc}</p>
  </div>
);

export default WhyUs;
