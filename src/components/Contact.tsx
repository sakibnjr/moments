import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import "./styles.css";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contactus">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif italic mb-8"
          >
            Contact Us
          </motion.h2>
          <div className="space-y-10">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6" />
              <p>1685 Old Norcross Rd Ste 600A, Lawrenceville GA 30045</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6" />
              <p>Booking@flippedatl.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6" />
              <p>470-549-4746</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Subscribe to our mailing list
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name *"
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-white"
              />
              <input
                type="text"
                placeholder="Last name *"
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-white"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email *"
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-white"
              />
              <input
                type="tel"
                placeholder="Phone *"
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-white"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="subscribe" className="rounded" />
              <label htmlFor="subscribe" className="text-white">
                Yes, subscribe me to your newsletter.
              </label>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
