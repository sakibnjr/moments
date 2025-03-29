import { motion } from "framer-motion";
import { testimonials, Testimonial } from "../data/testimonials";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { ImQuotesRight } from "react-icons/im";

const Testimonials: React.FC = () => {
  return (
    <section className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-6xl font-serif italic text-white md:text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          HERE'S WHAT OUR CLIENTS SAID
        </motion.h2>

        <hr className="mb-14" />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <motion.div
              key={index}
              className="relative bg-gray-100 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <p className="text-gray-700 text-sm mb-4 italic">
                <BiSolidQuoteAltLeft />
                {testimonial.review}
                <span className="absolute right-5">
                  <ImQuotesRight />
                </span>
              </p>
              <p className="text-gray-900 font-semibold">
                - {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
