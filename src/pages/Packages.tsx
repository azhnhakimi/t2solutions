import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const packages = [
  {
    id: 1,
    name: "Starter",
    price: "RM 499",
    period: "/month",
    features: [
      "Smart Call & Messaging Automation (WhatsApp + SMS)",
      "Basic Website Development & Integration",
      "3-Month Maintenance & Support",
      "Monthly Performance Report",
      "Business Hours Support",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Professional",
    price: "RM 799",
    period: "/month",
    features: [
      "Smart Call & Messaging Automation (WhatsApp + SMS)",
      "Online Booking & Scheduling System",
      "Responsive Multi-Page Website",
      "6-Month Maintenance & Support",
      "Weekly Analytics Reports",
      "Payment Gateway Integration",
      "24/7 Support",
    ],
    popular: false,
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Full Business Automation Suite (CRM + Integration)",
      "Custom Business Application Development",
      "Advanced Online Booking System (Multi-Branch)",
      "Fully Custom Website with Integrations",
      "12-Month Priority Maintenance & Support",
      "Daily Analytics & Insights",
      "AI Workflow Integration",
      "SLA Guarantee",
      "24/7 Priority Support",
    ],
    popular: false,
  },
];

const Packages = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Smart Business Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-gray-600"
          >
            Flexible solutions designed for businesses of all sizes
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className={`flex flex-col rounded-2xl p-8 shadow-lg relative overflow-hidden ${
                pkg.popular
                  ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white transform"
                  : "bg-white"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-white text-orange-600 px-6 py-1 font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <h3
                className={`text-2xl font-bold mb-4 ${
                  pkg.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {pkg.name}
              </h3>

              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${
                    pkg.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {pkg.price}
                </span>
                {pkg.period && (
                  <span
                    className={`${
                      pkg.popular ? "text-orange-100" : "text-gray-600"
                    }`}
                  >
                    {pkg.period}
                  </span>
                )}
              </div>

              <ul className="mb-8 space-y-3 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center text-left ${
                      pkg.popular ? "text-orange-100" : "text-gray-600"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center shrink-0 ${
                        pkg.popular ? "border-white" : "border-orange-500"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          pkg.popular ? "bg-white" : "bg-orange-500"
                        }`}
                      ></div>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 font-semibold rounded-lg ${
                  pkg.popular
                    ? "bg-white text-orange-600 hover:bg-gray-100"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
