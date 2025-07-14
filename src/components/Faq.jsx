import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "How long does it take to form an LLC?",
    answer: "Typically, it takes 1–3 business days depending on the state. Some states offer expedited processing for an extra fee.",
  },
  {
    question: "What is a Registered Agent?",
    answer: "A Registered Agent is an official point of contact for legal documents and compliance notices for your business.",
  },
  {
    question: "Can I form an LLC in a different state?",
    answer: "Yes, you can form an LLC in any U.S. state. However, your business may still need to register in your home state as a foreign entity.",
  },
  {
    question: "Do I need an EIN for my LLC?",
    answer: "Yes, an EIN (Employer Identification Number) is required to open a business bank account, hire employees, and file taxes.",
  },
  {
    question: "Can non-US residents form an LLC?",
    answer: "Yes! We specialize in helping non-residents set up LLCs and obtain EINs/ITINs even without a U.S. address.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer transition duration-200"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-lg text-gray-800">{faq.question}</h4>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-blue-600" />
                ) : (
                  <ChevronDown size={20} className="text-blue-600" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
