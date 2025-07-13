import React from "react";
import { ShieldCheck, ThumbsUp, Clock } from "lucide-react";

const WhyUs = () => {
  return (
    <section id="whyus" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-10">Why Choose Us?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-md bg-gray-50">
            <ShieldCheck className="mx-auto text-blue-600 mb-2" size={32}/>
            <h4 className="text-xl font-semibold">Trusted & Secure</h4>
            <p>All processes are handled with confidentiality and accuracy.</p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-gray-50">
            <ThumbsUp className="mx-auto text-blue-600 mb-2" size={32}/>
            <h4 className="text-xl font-semibold">Satisfaction Guarantee</h4>
            <p>Our clients love us and we go above and beyond to deliver results.</p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-gray-50">
            <Clock className="mx-auto text-blue-600 mb-2" size={32}/>
            <h4 className="text-xl font-semibold">Fast Turnaround</h4>
            <p>Quick processing time to get your business up and running fast.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;