import React from "react";

const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-10">Transparent Pricing Plans</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-4">Starter</h4>
            <p className="mb-2 text-lg">$99 + State Fee</p>
            <ul className="text-sm text-gray-700 mb-4">
              <li>✓ LLC Filing</li>
              <li>✓ EIN Assistance</li>
              <li>✓ 3-Day Processing</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Get Started</button>
          </div>
          <div className="p-6 bg-blue-600 text-white rounded-lg shadow">
            <h4 className="text-xl font-bold mb-4">Pro</h4>
            <p className="mb-2 text-lg">$199 + State Fee</p>
            <ul className="text-sm mb-4">
              <li>✓ Includes Starter Plan</li>
              <li>✓ Registered Agent (1 Yr)</li>
              <li>✓ Operating Agreement</li>
            </ul>
            <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-100">Choose Pro</button>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-4">Premium</h4>
            <p className="mb-2 text-lg">$299 + State Fee</p>
            <ul className="text-sm text-gray-700 mb-4">
              <li>✓ Includes Pro Plan</li>
              <li>✓ Expedited Filing</li>
              <li>✓ Annual Compliance Support</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Go Premium</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
