import React from "react";
import { Zap, Wallet, UserCheck, MessageSquare } from "lucide-react";

const Differentiators = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose MyLLC?</h3>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-xl shadow">
            <Zap size={32} className="mx-auto mb-3 text-blue-600" />
            <h4 className="text-xl font-semibold mb-2">Quick Setup</h4>
            <p className="text-gray-600">Get your LLC up and running in just 3 simple steps.</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl shadow">
            <Wallet size={32} className="mx-auto mb-3 text-blue-600" />
            <h4 className="text-xl font-semibold mb-2">Transparent Pricing</h4>
            <p className="text-gray-600">No hidden fees, pay exactly what we quote.</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl shadow">
            <UserCheck size={32} className="mx-auto mb-3 text-blue-600" />
            <h4 className="text-xl font-semibold mb-2">Expert Legal Guidance</h4>
            <p className="text-gray-600">Work with real professionals and legal consultants.</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl shadow">
            <MessageSquare size={32} className="mx-auto mb-3 text-blue-600" />
            <h4 className="text-xl font-semibold mb-2">Real-Time Support</h4>
            <p className="text-gray-600">Live chat, email, or phone — we’re here when you need us.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
