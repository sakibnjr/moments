import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  BookIcon as TiktokIcon,
} from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const Footer = () => {
  const position: [number, number] = [33.9562, -83.9879]; // Lawrenceville coordinates

  const customIcon = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Map Section */}
        <div className="mb-20 h-[400px] rounded-lg overflow-hidden pt-10">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className="h-full w-full rounded-lg"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                Flipped ATL <br />
                1685 Old Norcross Rd Ste 600A <br />
                Lawrenceville GA 30045
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-gray-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-gray-300">
                  Packages
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Birthday Parties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Baby Showers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Corporate Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Weddings
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">What We Offer</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Luxury Mobile Bar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Event Space Rental
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Custom Packages
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-300" />
              <TiktokIcon className="w-6 h-6 cursor-pointer hover:text-gray-300" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-8 border-t border-gray-800">
          <p className="text-gray-400">
            © {new Date().getFullYear()} by Flipped ATL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
