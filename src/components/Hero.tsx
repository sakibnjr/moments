import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bgImages = [
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1569930784237-ea65a2f40a83?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1638132704795-6bb223151bf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () =>
    setCurrentImage((prev) => (prev + 1) % bgImages.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleSmoothScroll = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${bgImages[currentImage]}')` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 2 }}
          />
        </AnimatePresence>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xs z-10" />

      {/* Content */}
      <div className="relative z-20 h-full w-4/5 mx-auto flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-serif italic md:text-6xl font-bold text-white tracking-wide">
            Unforgettable
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
              Event Experiences
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 my-10">
            Host your next event in elegance. From weddings to corporate events,
            we create stunning experiences tailored for you.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#packages"
              className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold shadow-md transition-transform"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleSmoothScroll("packages"); // Match element ID
              }}
            >
              Book an Event
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#contactus"
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md transition-transform"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("contactus");
              }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
