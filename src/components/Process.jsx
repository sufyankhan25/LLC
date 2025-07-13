import React from "react";
import { ClipboardList, CheckCircle, Send } from "lucide-react";

const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-10">Our Simple 3-Step Process</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-md bg-blue-50">
            <ClipboardList className="mx-auto text-blue-600 mb-4" size={36}/>
            <h4 className="text-xl font-semibold">1. Submit Your Info</h4>
            <p>Fill in a quick form with basic details to get started immediately.</p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-blue-50">
            <CheckCircle className="mx-auto text-blue-600 mb-4" size={36}/>
            <h4 className="text-xl font-semibold">2. We Handle Registration</h4>
            <p>Our legal team processes and registers your LLC quickly and securely.</p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-blue-50">
            <Send className="mx-auto text-blue-600 mb-4" size={36}/>
            <h4 className="text-xl font-semibold">3. You’re Ready to Launch</h4>
            <p>You receive all legal documents and can start running your business.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
