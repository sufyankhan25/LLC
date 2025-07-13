import React from "react";

const Faq = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h3>
        <div className="space-y-6">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-lg mb-2">How long does it take to form an LLC?</h4>
            <p>It usually takes 1–3 business days, depending on the state.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-lg mb-2">What is a Registered Agent?</h4>
            <p>A registered agent receives legal documents on behalf of your LLC.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold text-lg mb-2">Can I form an LLC in a different state?</h4>
            <p>Yes, you can form your LLC in any U.S. state, regardless of your location.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
