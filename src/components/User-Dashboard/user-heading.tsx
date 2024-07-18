import React from 'react';
import { motion } from 'framer-motion';

const UserHeading: React.FC = () => {
  return (
    <div className="text-center my-8">
      <h1 className="text-4xl font-bold mb-4">
        Browse all{' '}
        <motion.span
          className="text-purple-600 inline-block origin-center" // Change origin to center
          whileHover={{ rotateX: 180 }} // Rotate 180 degrees for upside-down effect
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          templates
        </motion.span>
      </h1>
      <motion.h2
        className="text-xl text-gray-600"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="relative inline-block">
          Unleash your creativity
        </span>{' '}
        <span className="relative inline-block">
          with AI-powered content generation
          <motion.span
            className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
        </span>{' '}
      </motion.h2>
    </div>
  );
};

export default UserHeading;
