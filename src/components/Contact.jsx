// src/components/Contact.jsx
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Get in Touch with Us</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={28} className="text-blue-600" />
              <div>
                <h4 className="text-lg font-semibold">Office Address</h4>
                <p>123 LLC Street, Business City, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={28} className="text-blue-600" />
              <div>
                <h4 className="text-lg font-semibold">Phone Number</h4>
                <p>(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={28} className="text-blue-600" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p>support@myllc.com</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4">We're available Monday to Friday, 9am to 6pm EST. Reach out to us anytime and we'll respond quickly.</p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md">
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input type="email" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea rows="5" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;