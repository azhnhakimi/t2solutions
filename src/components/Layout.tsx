"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <header className="fixed w-full z-50 transition-all duration-300 bg-white shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">
              <Shield className="text-white" />
            </div>
            <span className="text-2xl font-bold text-orange-500">
              T2Solutions
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Packages", path: "/packages" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-medium transition-colors duration-300 hover:text-orange-500"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Button
            onClick={() => {}}
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full"
          >
            Get Consultation
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {[
                "Home",
                "About",
                "Services",
                "Packages",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => {}}
                  className="py-2 text-left font-medium hover:text-orange-500"
                >
                  {item}
                </button>
              ))}
              <Button
                onClick={() => {}}
                className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-full"
              >
                Get Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">
                  <Shield className="text-white" />
                </div>
                <span className="text-2xl font-bold text-orange-500">
                  T2Solutions
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering Malaysian businesses with innovative IT solutions
                since 2020.
              </p>
              <div className="flex space-x-4">
                {["twitter", "facebook", "linkedin", "instagram"].map(
                  (social) => (
                    <div
                      key={social}
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer"
                    >
                      <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Digital Presence",
                  "Customer Automation",
                  "Booking Systems",
                  "Business Tools",
                ].map((service) => (
                  <li
                    key={service}
                    className="hover:text-orange-500 transition-colors cursor-pointer"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                {["About Us", "Careers", "Blog", "Press", "Partners"].map(
                  (item) => (
                    <li
                      key={item}
                      className="hover:text-orange-500 transition-colors cursor-pointer"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-orange-500" />
                  <span>Level 15, Menara Maxis, KLCC, 50088 Kuala Lumpur</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-orange-500" />
                  <span>+60 3-1234 5678</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-orange-500" />
                  <span>info@t2solutions.com.my</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} T2Solutions Sdn Bhd. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
