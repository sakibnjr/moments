const pricingData = [
  {
    title: "Basic Plan",
    price: "$199",
    description: "Perfect for small events with basic features.",
    features: [
      "Up to 50 guests",
      "2 hours event duration",
      "Basic catering",
      "Event coordination",
      "Venue Access",
    ],
    buttonText: "Book Now",
  },
  {
    title: "Premium Plan",
    price: "$499",
    description: "Ideal for medium-sized events with additional services.",
    features: [
      "Up to 150 guests",
      "4 hours event duration",
      "Premium catering",
      "Personalized event coordination",
      "Exclusive venue area",
    ],
    buttonText: "Book Now",
  },
  {
    title: "Ultimate Plan",
    price: "$999",
    description: "For large-scale events with the ultimate experience.",
    features: [
      "Up to 500 guests",
      "All-day event duration",
      "Luxury catering",
      "Dedicated event manager",
      "Full venue access",
      "Customizable options",
    ],
    buttonText: "Book Now",
  },
];

import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="bg-black pb-10 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-6xl font-serif italic md:text-center text-white py-10">
          Checkout our pricing plans
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative p-8 rounded-2xl shadow-lg ${
                index === 1 ? "bg-white" : "bg-gray-300"
              }`}
            >
              {/* Popular badge */}
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-black text-white text-sm font-medium px-4 py-1 rounded-tr-2xl rounded-bl-lg">
                  Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.title}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                </div>
                <p className="mt-2 text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className={`flex-shrink-0 w-6 h-6 ${
                        index === 1 ? "text-black" : "text-green-500"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  index === 1
                    ? "bg-gray-800 text-white hover:bg-black"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
