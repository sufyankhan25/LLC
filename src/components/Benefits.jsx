import React from "react";
import { Globe, Users, ShieldCheck } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-10">Benefits of Starting an LLC with Us</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <ShieldCheck size={32} className="mx-auto text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold">Legal Protection</h4>
            <p>LLCs protect your personal assets and reduce liability risks.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <Globe size={32} className="mx-auto text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold">Nationwide Filing</h4>
            <p>We handle LLC formation across all 50 U.S. states efficiently.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <Users size={32} className="mx-auto text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold">Expert Support</h4>
            <p>Our business experts are here to guide you every step of the way.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
