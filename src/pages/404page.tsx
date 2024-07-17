import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-pink-500 to-indigo-900 ">
      <motion.div 
        className="text-center text-white p-8 rounded-lg shadow-2xl bg-black bg-opacity-20 backdrop-blur-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-9xl font-bold mb-4"
          animate={{ 
            rotate: [0, 10, -10, 10, 0],
            transition: { repeat: Infinity, duration: 5 }
          }}
        >
          404
        </motion.h1>
        <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/" 
            className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-opacity-90 transition duration-300"
          >
            Go Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;