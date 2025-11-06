"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Shield,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import QuickLinks from "./QuickLinks";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight(); // Set on initial render and when menu toggles

    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [isMenuOpen]); // Rerun on menu toggle to account for its height

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header
        ref={headerRef}
        className="fixed w-full z-50 transition-all duration-300 bg-white shadow-sm"
      >
        <div className="container mx-auto px-8 flex justify-between items-center py-4">
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
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 hover:text-orange-500 ${
                    isActive
                      ? "text-orange-500 underline underline-offset-6 decoration-1"
                      : "text-gray-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `py-2 text-left font-medium hover:text-orange-500 ${
                        isActive ? "text-orange-500" : "text-gray-700"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content*/}
      <main className="flex-grow" style={{ paddingTop: `${headerHeight}px` }}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">
                  <Shield className="text-white" />
                </div>
                <span className="text-2xl font-bold text-orange-500">
                  T2Solutions
                </span>
              </div>
              <p className="text-gray-400 text-left">
                Empowering Malaysian businesses with innovative IT.
              </p>
            </div>

            <QuickLinks />

            <div>
              <h4 className="text-lg font-semibold mb-6">Connect</h4>
              <div className="flex space-x-4 flex justify-center items-center">
                {[
                  { icon: <Twitter size={20} />, name: "Twitter" },
                  { icon: <Facebook size={20} />, name: "Facebook" },
                  { icon: <Linkedin size={20} />, name: "LinkedIn" },
                  { icon: <Instagram size={20} />, name: "Instagram" },
                ].map((social) => (
                  <li
                    key={social.name}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer"
                  >
                    {social.icon}
                  </li>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-left">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-orange-500" />
                  <span>T2-18-12, The Place@Cyberjaya, Sepang, Selangor</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-orange-500" />
                  <span>+60 1-2345 6789</span>
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
              © {new Date().getFullYear()} T2Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
