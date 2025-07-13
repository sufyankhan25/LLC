import React from "react";

const Testimonials = () => {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-10">What Our Clients Say</h3>
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic">“MyLLC made the registration process so easy and stress-free. I highly recommend their services!”</p>
            <h5 className="mt-4 font-semibold">— Sarah, Startup Founder</h5>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic">“Professional and reliable team. Everything was taken care of without any hassle.”</p>
            <h5 className="mt-4 font-semibold">— David, Entrepreneur</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;