import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Navbar: React.FC = () => {
  const navItems = ['Features', 'Pricing', 'Blog', 'Contact'];
  const controls = useAnimation();

  useEffect(() => {
    const animateNavbar = async () => {
      await controls.start({ opacity: 0, y: -50 });
      await new Promise(resolve => setTimeout(resolve, 500));
      await controls.start({ opacity: 1, y: 0 });
    };
    animateNavbar();
  }, [controls]);

  return (
    <motion.nav 
      className="fixed w-full py-6 px-12 flex justify-between items-center bg-transparent"
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Company Name */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative text-4xl font-bold text-white cursor-pointer"
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
      <ul className="flex space-x-[70px]">
        {navItems.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            className="relative"
          >
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
          </motion.li>
        ))}
      </ul>

      {/* Login Button */}
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="px-6 py-3 bg-white text-black rounded-full font-semibold text-lg"
      >
        Login
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;