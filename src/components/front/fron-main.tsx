import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const FrontMain: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-8">
      {/* GitHub Link */}
      <motion.div
        className="mb-4 bg-white bg-opacity-20 rounded-full p-3 inline-block cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <motion.a
          href="https://github.com/HimanshuSinghBhandari/Artifex"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
          whileHover={{ y: -2 }}
        >
          <span className="font-semibold">Open Source</span>
          <motion.div whileHover={{ rotate: -90 }}>
            <ArrowRightIcon className="h-5 w-5" />
          </motion.div>
        </motion.a>
      </motion.div>

      {/* Main Content */}
      <div className="text-center space-y-8 max-w-4xl">
        <motion.h1
          className="text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Unleash Your Creativity with AI-Powered Content Generation
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          No coding skills needed. Just imagine, and let AI do the rest.
        </motion.p>

        <motion.div
          className="flex space-x-4 justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-3 bg-white text-purple-700 rounded-xl font-semibold text-lg"
            whileHover={{ scale: 1.05, backgroundColor: "#9333ea", color: "#fff" }}
            transition={{ duration: 0.2 }}
          >
            Start for free
          </motion.button>
          <motion.button
            className="px-8 py-3 bg-white bg-opacity-20 text-white rounded-xl font-semibold text-lg border border-white border-opacity-50"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            transition={{ duration: 0.2 }}
          >
            Watch demo
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FrontMain;