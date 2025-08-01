import React from "react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    features: ["Unlimited invoices", "Basic analytics", "Email support"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19/mo",
    features: [
      "Everything in Starter",
      "Advanced analytics",
      "Priority support",
      "Cloud backups",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "All Pro features",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 support",
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Simple, <span className="text-blue-600">Transparent</span> Pricing
        </h2>
        <p className="text-lg text-gray-600">
          Choose the perfect plan for your business needs. No hidden fees,
          cancel anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl border p-10 ${
              plan.highlight
                ? "border-blue-500 shadow-xl bg-white scale-105"
                : "border-gray-200 bg-white"
            } transition-transform hover:scale-105`}
          >
            {/* Popular Tag */}
            {plan.highlight && (
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white shadow-sm">
                Popular
              </div>
            )}

            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              {plan.name}
            </h3>
            <p className="text-4xl font-bold text-gray-900 mb-6">
              {plan.price}
            </p>
            <ul className="space-y-3 text-gray-600 text-base">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2 text-green-500 text-lg">✓</span>{" "}
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-10 w-full py-3 rounded-lg font-medium text-lg ${
                plan.highlight
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {plan.highlight ? "Get Started" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>

      {/* Small text below cards */}
      <div className="text-center mt-12 text-black text-sm flex justify-center items-center gap-2">
        <span className="text-yellow-400 text-base">⭐</span>
        <span>All plans come with a 14-day free trial</span>
      </div>
    </section>
  );
};

export default PricingSection;
