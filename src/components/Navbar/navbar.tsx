import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navItems = ['Home', 'Pricing', 'Blog', 'Contact'];
  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const animateNavbar = async () => {
      await controls.start({ opacity: 0, y: -50 });
      await new Promise(resolve => setTimeout(resolve, 500));
      await controls.start({ opacity: 1, y: 0 });
    };
    animateNavbar();
  }, [controls]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="fixed w-[90%] sm:w-[95%] mt-4 py-2 sm:py-4 px-3 sm:px-6 flex justify-between items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-xl mx-auto left-0 right-0"
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Company Name - Hidden on small screens */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative text-4xl font-bold text-white cursor-pointer hidden md:block"
      >
        ARTIFEX
        <motion.div
          layoutId="navbar-hover"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Navigation Items */}
      <ul className="hidden md:flex space-x-[70px]">
        {navItems.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            className="relative"
          >
            <Link to={`/${item.toLowerCase()}`}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer text-white text-xl"
              >
                {item}
                <motion.div
                  className="absolute -inset-4 bg-white bg-opacity-10 rounded-lg"
                  layoutId={`navbar-hover-${item}`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Layout */}
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <motion.div
            className="space-y-2 cursor-pointer"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
          >
            <motion.span className="block w-6 h-0.5 bg-white"></motion.span>
            <motion.span className="block w-6 h-0.5 bg-white"></motion.span>
            <motion.span className="block w-6 h-0.5 bg-white"></motion.span>
          </motion.div>
        </div>

        {/* Login Button */}
        <Link to={`/login`}>
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="px-3 sm:px-6 py-1.5 sm:py-3 bg-white text-black rounded-full font-semibold text-xs sm:text-lg"
          >
            Login
          </motion.button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 mt-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-xl p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`}>
              <motion.div
                className="text-white text-lg py-2 cursor-pointer"
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;