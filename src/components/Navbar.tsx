import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  BookIcon as TiktokIcon,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-serif italic">Flipped ATL</h1>
            <p className="text-sm">make memories</p>
          </motion.div>

          <div className="hidden md:block">
            <div className="flex gap-10 items-center">
              <a
                href="#home"
                className="text-white hover:text-gray-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll("home");
                }}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-gray-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll("about");
                }}
              >
                About
              </a>
              <a
                href="#packages"
                className="text-white hover:text-gray-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll("packages");
                }}
              >
                Packages
              </a>
              <a
                href="#contactus"
                className="text-white hover:text-gray-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll("contactus");
                }}
              >
                Contact Us
              </a>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-transparent border border-white text-white px-6 py-2 rounded-full text-sm"
          >
            SCHEDULE A TOUR
          </motion.button>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div className="hidden md:flex justify-end space-x-4 py-2">
          <Phone className="w-5 h-5" />
          <Mail className="w-5 h-5" />
          <MapPin className="w-5 h-5" />
          <Instagram className="w-5 h-5" />
          <Facebook className="w-5 h-5" />
          <TiktokIcon className="w-5 h-5" />
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-white"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("home");
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-white"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("about");
              }}
            >
              About
            </a>

            <a
              href="#packages"
              className="block px-3 py-2 text-white"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("packages");
              }}
            >
              Packages
            </a>
            <a
              href="#contactus"
              className="block px-3 py-2 text-white"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll("contactus");
              }}
            >
              Contact Us
            </a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 bg-transparent border border-white text-white px-6 py-2 rounded-full text-sm"
            >
              SCHEDULE A TOUR
            </motion.button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
