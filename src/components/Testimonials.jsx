import React from "react";

const Testimonials = () => {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-10">What Our Clients Say</h3>
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 gap-8">

          <TestimonialCard
            name="Sarah Malik"
            title="Startup Founder"
            quote="FACT helped me register my LLC in 3 days. Super professional and supportive throughout the process."
          />

          <TestimonialCard
            name="David Carter"
            title="Small Business Owner"
            quote="They handled my federal tax and ITIN setup accurately. I’m beyond impressed with their service quality!"
          />

          <TestimonialCard
            name="Jessica Chen"
            title="E-commerce Seller"
            quote="Great experience filing 1040-NR and getting my EIN. Communication was fast and clear!"
          />

          <TestimonialCard
            name="Michael Reyes"
            title="Software Agency CEO"
            quote="I was lost on compliance and trademarks — FACT guided me step-by-step with amazing patience."
          />
        </div>
      </div>
    </section>
  );
};

// ✅ Reusable Card
const TestimonialCard = ({ name, title, quote }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="italic text-gray-700">“{quote}”</p>
    <h5 className="mt-4 font-semibold text-blue-700">— {name}</h5>
    <p className="text-sm text-gray-500">{title}</p>
  </div>
);

export default Testimonials;
