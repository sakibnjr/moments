import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { packages, Package } from "../data/packages";

const Packages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    includes: false,
    venueFeatures: false,
    tablesAndSeating: false,
    addOns: false,
  });

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    addOns: [] as string[],
  });

  const handleSelectPackage = (pkg: Package) => {
    setSelectedPackage(pkg);
    // Reset expanded sections when a new package is selected
    setExpandedSections({
      includes: false,
      venueFeatures: false,
      tablesAndSeating: false,
      addOns: false,
    });
  };

  const handleBackToPackages = () => {
    setSelectedPackage(null);
    setShowBookingModal(false);
  };

  const openBookingModal = () => {
    setShowBookingModal(true);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      addOns: [],
    });
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOnChange = (addOn: string) => {
    setFormData((prev) => {
      const addOns = prev.addOns.includes(addOn)
        ? prev.addOns.filter((item) => item !== addOn)
        : [...prev.addOns, addOn];
      return { ...prev, addOns };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    alert("Booking submitted successfully!");
    closeBookingModal();
    setSelectedPackage(null);
  };

  return (
    <section className="py-10 " id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-6xl font-serif italic md:text-center  text-gray-900 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Event Packages
        </motion.h2>

        <AnimatePresence mode="wait">
          {!selectedPackage ? (
            <motion.div
              key="packages-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleSelectPackage(pkg)}
                >
                  <div className="relative h-64">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-60" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                      <h3 className="text-2xl font-bold mb-3">{pkg.title}</h3>
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {pkg.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 bg-transparent border-2 border-white text-white px-6 py-2 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      >
                        Click Here
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="package-details"
              className="bg-white rounded-lg shadow-lg p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={handleBackToPackages}
                className="mb-4 text-gray-600 hover:text-gray-900"
              >
                ← Back to Packages
              </button>

              {/* Bento Box Layout for Package Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Column: Image and Basic Info */}
                <div className="md:col-span-1 space-y-6">
                  <motion.div
                    className="bg-gray-100 rounded-lg p-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={selectedPackage.image}
                      alt={selectedPackage.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <h3 className="text-2xl font-bold mt-4 text-gray-900">
                      {selectedPackage.title}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {selectedPackage.description}
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-gray-900 text-white rounded-lg p-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="text-lg font-semibold mb-2">Pricing</h4>
                    <p className="text-3xl font-bold">
                      {selectedPackage.details.price}{" "}
                      <span className="text-sm font-normal">+ tax</span>
                    </p>
                    <p className="text-sm mt-2">
                      Duration: {selectedPackage.details.duration}
                    </p>
                  </motion.div>
                </div>

                {/* Right Column: Bento Box Layout with Collapsible Sections */}
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Key Inclusions */}
                  <motion.div
                    className="bg-gray-100 rounded-lg p-4 border-2 border-transparent hover:border-gray-300 hover:shadow-lg transition-all"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => toggleSection("includes")}
                  >
                    <button className="w-full flex justify-between items-center text-lg font-semibold text-gray-900 mb-3">
                      <span>What’s Included</span>
                      <span>{expandedSections.includes ? "−" : "+"}</span>
                    </button>
                    <div>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {expandedSections.includes
                          ? selectedPackage.details.includes.map(
                              (item, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="w-5 h-5 mr-2 text-gray-900">
                                    ✔
                                  </span>
                                  {item}
                                </li>
                              )
                            )
                          : selectedPackage.details.includes
                              .slice(0, 3)
                              .map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="w-5 h-5 mr-2 text-gray-900">
                                    ✔
                                  </span>
                                  {item}
                                </li>
                              ))}
                        {!expandedSections.includes &&
                          selectedPackage.details.includes.length > 3 && (
                            <li className="text-gray-600 italic">
                              + {selectedPackage.details.includes.length - 3}{" "}
                              more
                            </li>
                          )}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Venue Features */}
                  <motion.div
                    className="bg-gray-100 rounded-lg p-4 border-2 border-transparent hover:border-gray-300 hover:shadow-lg transition-all"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => toggleSection("venueFeatures")}
                  >
                    <button className="w-full flex justify-between items-center text-lg font-semibold text-gray-900 mb-3">
                      <span>Venue Features</span>
                      <span>{expandedSections.venueFeatures ? "−" : "+"}</span>
                    </button>
                    <div>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {expandedSections.venueFeatures
                          ? selectedPackage.details.venueFeatures.map(
                              (item, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="w-5 h-5 mr-2 text-gray-900">
                                    ✔
                                  </span>
                                  {item}
                                </li>
                              )
                            )
                          : selectedPackage.details.venueFeatures
                              .slice(0, 3)
                              .map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="w-5 h-5 mr-2 text-gray-900">
                                    ✔
                                  </span>
                                  {item}
                                </li>
                              ))}
                        {!expandedSections.venueFeatures &&
                          selectedPackage.details.venueFeatures.length > 3 && (
                            <li className="text-gray-600 italic">
                              +{" "}
                              {selectedPackage.details.venueFeatures.length - 3}{" "}
                              more
                            </li>
                          )}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Tables & Seating */}
                  <motion.div
                    className="bg-gray-100 rounded-lg p-4 sm:col-span-2 border-2 border-transparent hover:border-gray-300 hover:shadow-lg transition-all"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => toggleSection("tablesAndSeating")}
                  >
                    <button className="w-full flex justify-between items-center text-lg font-semibold text-gray-900 mb-3">
                      <span>Tables & Seating</span>
                      <span>
                        {expandedSections.tablesAndSeating ? "−" : "+"}
                      </span>
                    </button>
                    <div>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {expandedSections.tablesAndSeating
                          ? selectedPackage.details.tablesAndSeating.map(
                              (item, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="w-5 h-5 mr-2 text-gray-900">
                                    ✔
                                  </span>
                                  {item}
                                </li>
                              )
                            )
                          : selectedPackage.details.tablesAndSeating
                              .slice(0, 2)
                              .map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="w-5 h-5 mr-2 text-gray-900">
                                    ✔
                                  </span>
                                  {item}
                                </li>
                              ))}
                        {!expandedSections.tablesAndSeating &&
                          selectedPackage.details.tablesAndSeating.length >
                            2 && (
                            <li className="text-gray-600 italic">
                              +{" "}
                              {selectedPackage.details.tablesAndSeating.length -
                                2}{" "}
                              more
                            </li>
                          )}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Add-On Services */}
                  <motion.div
                    className="bg-gray-900 text-white rounded-lg p-4 sm:col-span-2 border-2 border-transparent hover:border-gray-200 hover:shadow-lg transition-all"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => toggleSection("addOns")}
                  >
                    <button className="w-full flex justify-between items-center text-lg font-semibold mb-3">
                      <span>Add-On Services</span>
                      <span>{expandedSections.addOns ? "−" : "+"}</span>
                    </button>
                    <div>
                      <ul className="space-y-2 text-sm">
                        {expandedSections.addOns
                          ? selectedPackage.details.addOnServices.map(
                              (service, idx) => (
                                <li key={idx}>
                                  {service.name} - {service.price}
                                  {service.description && (
                                    <p className="text-xs text-gray-300 ml-4">
                                      {service.description}
                                    </p>
                                  )}
                                </li>
                              )
                            )
                          : selectedPackage.details.addOnServices
                              .slice(0, 2)
                              .map((service, idx) => (
                                <li key={idx}>
                                  {service.name} - {service.price}
                                  {service.description && (
                                    <p className="text-xs text-gray-300 ml-4">
                                      {service.description}
                                    </p>
                                  )}
                                </li>
                              ))}
                        {!expandedSections.addOns &&
                          selectedPackage.details.addOnServices.length > 2 && (
                            <li className="text-gray-300 italic">
                              +{" "}
                              {selectedPackage.details.addOnServices.length - 2}{" "}
                              more
                            </li>
                          )}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Book Now Button */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <button
                  onClick={openBookingModal}
                  className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all"
                >
                  I’m Ready to Secure My Booking
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Booking Modal */}
        <AnimatePresence>
          {showBookingModal && selectedPackage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-lg p-8 max-w-lg w-full mx-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">
                    Book {selectedPackage.title}
                  </h3>
                  <button
                    onClick={closeBookingModal}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    ✕
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full p-3 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full p-3 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full p-3 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleFormChange}
                      className="w-full p-3 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Add-On Services
                    </label>
                    {selectedPackage.details.addOnServices.map(
                      (service, index) => (
                        <div key={index} className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            value={service.name}
                            onChange={() => handleAddOnChange(service.name)}
                            checked={formData.addOns.includes(service.name)}
                            className="mr-2"
                          />
                          <span>
                            {service.name} - {service.price}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800"
                  >
                    Submit Booking
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Packages;
