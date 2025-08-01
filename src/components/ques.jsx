import React, { useState } from "react";

const faqs = [
  {
    question: "What is Digital Invoicing?",
    answer:
      "Digital Invoicing is an online platform that helps businesses create, manage, and send invoices easily and efficiently.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We use industry-standard encryption and follow best practices to ensure your data is protected at all times.",
  },
  {
    question: "Can I customize my invoices?",
    answer:
      "Yes, you can fully customize your invoices with your logo, colors, and other preferences to suit your brand.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Yes, Digital Invoicing is accessible via both Android and iOS mobile apps, allowing you to manage invoicing on the go.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up for a free trial and explore all the features of Digital Invoicing without any commitment.",
  },
];

const Ques = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Everything you need to know about our Digital Invoicing platform.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`border rounded-xl transition overflow-hidden ${
                  isActive
                    ? "bg-blue-700 text-white"
                    : "bg-gray-50 text-gray-900"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-4 text-lg font-medium flex justify-between items-center"
                >
                  <span>{faq.question}</span>
                  <span className="text-2xl">
                    {isActive ? "-" : "+"}
                  </span>
                </button>
                {isActive && (
                  <div className="px-6 pb-4 text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="font-semibold text-gray-900 mb-6 text-xs">
            Still have questions?
          </h3>
          <button className="bg-blue-600 text-white px-8 py-2 rounded-lg text-base hover:bg-blue-700 transition">
            Contact our support team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ques;
