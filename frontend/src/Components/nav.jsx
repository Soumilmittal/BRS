import React, { useState } from 'react';
import { motion } from 'framer-motion';
const LOGO_SRC = '/logo.png'; 

// Animation Variants
const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = ['Home', 'Services', 'Portfolio', 'About', 'Contact'];

  return (
    <div className="bg-[#ffffff] min-h-screen font-sans">
      {/* 1. Navbar (Fixed) */}
      <motion.nav
        className="w-full fixed top-0 left-0 z-50 bg-[#ffffff] bg-opacity-90 backdrop-blur-md shadow-md border-b border-[#583d2b]/20"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo + Brand Name */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={LOGO_SRC}
              alt="Build Right Studios Logo"
              className="h-10 rounded-md"
            />
            <span className="text-[#f36c3b] font-extrabold text-xl whitespace-nowrap">
              Build Right Studios
            </span>
          </motion.div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8 text-[#583d2b] font-medium">
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#e6a17a] transition duration-300"
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Desktop Button */}
          <motion.div
            className="hidden md:block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <button className="bg-[#000000] text-white px-6 py-2 rounded-2xl font-semibold shadow-md hover:shadow-xl transition-all">
              Get a Quote
            </button>
          </motion.div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#583d2b] focus:outline-none">
              {isMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-[#eee3cb] border-t border-[#583d2b]/20 px-4 pb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col space-y-3 pt-3 text-[#583d2b] font-medium">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#e6a17a] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <motion.button
                className="bg-[#e6a17a] text-white px-5 py-2 mt-2 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <main className="pt-20"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        </div>
      </main>
    </div>
  );
}
