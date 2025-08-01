import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-blue-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 rounded-3xl p-10 shadow-md bg-blue-900">
        {/* Text Section (left) */}
        <div className="md:w-2/3 text-left">
          <h2 className="text-4xl font-bold text-white mb-4">
            Grow your business with{" "}
            <span className="text-blue-300">Pak Invoicing</span>
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Join with more than <strong>1200+ happy customers</strong> and
            streamline your billing process.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Book Your Free Demo
          </button>
        </div>

        {/* Icon Section (right) */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg">
            <span className="text-6xl text-white">📩</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
