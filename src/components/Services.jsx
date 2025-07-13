import React from "react";
import { FileText, Gavel, DollarSign } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FileText className="mx-auto text-blue-600 mb-3" size={32}/>
            <h4 className="text-xl font-semibold mb-2">LLC Formation</h4>
            <p>We handle legal paperwork and registration to form your LLC smoothly.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Gavel className="mx-auto text-blue-600 mb-3" size={32}/>
            <h4 className="text-xl font-semibold mb-2">Legal Consulting</h4>
            <p>Expert legal guidance tailored to your business structure and needs.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <DollarSign className="mx-auto text-blue-600 mb-3" size={32}/>
            <h4 className="text-xl font-semibold mb-2">Tax & Compliance</h4>
            <p>Ensure complete tax filings and federal/state compliance support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
