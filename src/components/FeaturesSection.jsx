import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaChartLine, FaCloud, FaCheckCircle } from "react-icons/fa";

const features = [
  {
    icon: <FaBolt />,
    title: "Lightning Fast",
    description:
      "Create professional invoices in under 60 seconds with our intuitive interface.",
    gradient: "from-blue-500 to-blue-300",
  },
  {
    icon: <FaChartLine />,
    title: "Real-time Analytics",
    description:
      "Track payments, overdue invoices, and cash flow with beautiful dashboards.",
    gradient: "from-green-500 to-green-300",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Sync",
    description:
      "Access your invoices from anywhere, anytime. Automatic backups included.",
    gradient: "from-purple-500 to-purple-300",
  },
];

const FeaturesSection = () => {
  return (
    <>
      {/* Features Section */}
      <section className="bg-white py-20 px-6 md:px-20">
        {/* Top Heading */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-5xl font-bold leading-tight text-gray-900">
            Revolutionize Your{" "}
            <span className="text-blue-600">Billing Workflow</span>
          </h2>
          <p className="text-xl mt-6 text-gray-500">
            Our digital invoicing platform transforms how businesses manage
            payments, saving you time and reducing errors.
          </p>
        </div>

        {/* Dashboard + Features */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Animated Image */}
          <motion.img
            src="/dashboard.png"
            alt="Dashboard Preview"
            className="w-full md:w-1/2 max-w-xl object-contain rounded-2xl shadow-lg"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />

          {/* Feature Boxes */}
          <div className="md:w-1/2 space-y-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex gap-4 p-5 rounded-xl bg-gradient-to-r ${feature.gradient} text-white shadow-md hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-center justify-center text-3xl mt-1">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
                </div>
              </div>
            ))}

            {/* Trusted Line */}
            <div className="mt-8 flex items-center gap-2 text-gray-500 text-sm ml-2 md:ml-0">
              <FaCheckCircle className="text-green-500 text-base" />
              <span>
                Trusted by <span className="font-medium text-gray-700">10,000+</span>{" "}
                businesses worldwide
              </span>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default FeaturesSection;
