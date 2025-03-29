import { motion } from "framer-motion";
import "./styles.css";

const About = () => {
  return (
    <section id="about" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <img
              src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="About Flipped ATL"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 font-serif italic">
              About Flipped ATL
            </h2>
            <p className="text-xl text-gray-600">
              We are passionate about transforming spaces and creating
              beautiful, functional environments that inspire and delight. With
              years of experience in home staging and interior design, we bring
              a unique perspective to every project.
            </p>
            <p className="text-xl text-gray-600">
              Our team of experienced professionals works closely with each
              client to understand their vision and deliver exceptional results
              that exceed expectations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
