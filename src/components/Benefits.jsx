import React from "react";
import { Globe, Users, ShieldCheck, TrendingUp, FileText } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-12 text-blue-800">
          Benefits of Forming an LLC with FACT
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <BenefitCard
            icon={<ShieldCheck size={36} className="text-blue-600 mb-4" />}
            title="Legal Asset Protection"
            desc="Your personal assets remain protected from business liabilities and lawsuits."
          />
          <BenefitCard
            icon={<Globe size={36} className="text-blue-600 mb-4" />}
            title="50-State Coverage"
            desc="We assist with LLC formation in all 50 U.S. states — hassle-free and remote."
          />
          <BenefitCard
            icon={<Users size={36} className="text-blue-600 mb-4" />}
            title="Expert Business Support"
            desc="Get ongoing guidance on structure, filings, and compliance from real professionals."
          />
          <BenefitCard
            icon={<TrendingUp size={36} className="text-blue-600 mb-4" />}
            title="Credibility & Growth"
            desc="LLCs add legitimacy and flexibility to your business — great for funding & clients."
          />
          <BenefitCard
            icon={<FileText size={36} className="text-blue-600 mb-4" />}
            title="Tax Efficiency"
            desc="LLCs offer pass-through taxation, potentially lowering your tax burden legally."
          />
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
    <div className="text-center">{icon}</div>
    <h4 className="text-xl font-semibold text-center mb-2">{title}</h4>
    <p className="text-gray-600 text-sm text-center">{desc}</p>
  </div>
);

export default Benefits;
