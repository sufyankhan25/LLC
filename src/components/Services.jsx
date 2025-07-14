import React from "react";
import {
  FileText,
  ShieldCheck,
  Repeat,
  CheckCircle,
  Type,
  PenTool,
  RefreshCcw,
  BadgePercent,
} from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-12">Our Business Services</h3>
        <div className="grid md:grid-cols-4 gap-8">

          <ServiceCard
            icon={<FileText size={36} className="text-blue-600 mx-auto mb-4" />}
            title="LLC Tax Filing"
            desc="Federal returns: 1040, 1065, 1120, 5472 filed with transcripts."
          />

          <ServiceCard
            icon={<CheckCircle size={36} className="text-blue-600 mx-auto mb-4" />}
            title="ITIN Allocation"
            desc="ITIN services for non-residents with CP565 confirmation."
          />

          <ServiceCard
            icon={<Repeat size={36} className="text-blue-600 mx-auto mb-4" />}
            title="Annual Reports & Amendments"
            desc="All 50 states – DBA, amendments, annual reports, and EIN updates."
          />

          <ServiceCard
            icon={<ShieldCheck size={36} className="text-blue-600 mx-auto mb-4" />}
            title="Compliance & SALT"
            desc="State & Local Tax filings and ongoing compliance handling."
          />

          <ServiceCard
            icon={<Type size={36} className="text-blue-600 mx-auto mb-4" />}
            title="W-2, 1099, 940, 941 Filing"
            desc="File employee and contractor forms with precision."
          />

          <ServiceCard
            icon={<PenTool size={36} className="text-blue-600 mx-auto mb-4" />}
            title="Trademark Registration"
            desc="Trademark filing (e.g., STYLO, TRIZEN, Bubbles&Brushes)."
          />

          <ServiceCard
            icon={<RefreshCcw size={36} className="text-blue-600 mx-auto mb-4" />}
            title="Penalty Waivers"
            desc="Help in IRS/state fine waivers and amendment corrections."
          />

          <ServiceCard
            icon={<BadgePercent size={36} className="text-blue-600 mx-auto mb-4" />}
            title="Custom Consulting"
            desc="Startup strategy, financial planning, go-to-market support."
          />
        </div>
      </div>
    </section>
  );
};

// ✅ Service Card Component
const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    {icon}
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

export default Services;
