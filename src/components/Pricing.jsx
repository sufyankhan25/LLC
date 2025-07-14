import React from "react";

const packages = [
  {
    title: "Basic",
    price: "PKR 44,777",
    description: "1040, 1065, 1120 & 1120/5472\nI will file your personal/business tax return. (No Extra Fee)",
    features: [
      "✓ Strategy implementation document",
      "✓ Consulting Deck",
      "✓ Financial forecast",
      "✓ SWOT analysis",
      "✓ Initial assessment",
      "✓ 30 consulting minutes",
    ],
    delivery: "4-day delivery",
    isHighlighted: false,
  },
  {
    title: "Standard",
    price: "PKR 53,732",
    description: "ITIN Registration Service\nRejection responsibility is mine. (No Extra Fee)",
    features: [
      "✓ Strategy implementation document",
      "✓ Consulting Deck",
      "✓ Financial forecast",
      "✓ SWOT analysis",
      "✓ Initial assessment",
      "✓ 60 consulting minutes",
    ],
    delivery: "4-day delivery",
    isHighlighted: true,
  },
  {
    title: "Premium",
    price: "PKR 59,702",
    description:
      "Multiple Services\nI file DBA, amendments, annual report, trademarks and abate penalty. (State Fee/Cost Excluded)",
    features: [
      "✓ Strategy implementation document",
      "✓ Consulting Deck",
      "✓ Financial forecast",
      "✓ SWOT analysis",
      "✓ Initial assessment",
      "✓ 90 consulting minutes",
    ],
    delivery: "4-day delivery",
    isHighlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-12">Transparent Pricing Plans</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg shadow border ${
                pkg.isHighlighted ? "bg-blue-600 text-white" : "bg-gray-50"
              }`}
            >
              <h4 className="text-xl font-bold mb-2">{pkg.title}</h4>
              <p className="text-lg font-semibold mb-2">{pkg.price}</p>
              <p className="text-sm mb-4 whitespace-pre-line">{pkg.description}</p>

              <ul className={`text-sm space-y-1 mb-4 ${pkg.isHighlighted ? "text-white" : "text-gray-700"}`}>
                {pkg.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <p className="text-xs mb-4">{pkg.delivery}</p>
              <button
                className={`px-6 py-2 rounded font-medium ${
                  pkg.isHighlighted
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {pkg.isHighlighted ? "Choose Standard" : "Select Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
