import React from 'react';
import { motion } from 'framer-motion';
import image125 from './image125.png';

const FrontDiv: React.FC = () => {
  return (
    <div className="m-4 sm:m-8 md:m-20 lg:m-40 min-h-[33rem] flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent p-4 sm:p-8 md:p-12 lg:p-20 rounded-xl">
      <motion.div
        className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full md:w-1/2 pr-0 md:pr-12 relative mt-8 md:mt-0">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-400">Seamless</h2>
          <p className="text-2xl sm:text-3xl font-bold text-white mt-4">
            Content Creation, Transform your content with our AI-powered tools
          </p>
          <p className="text-base sm:text-lg text-gray-300 mb-6 mt-3">
            Unlock the power of AI to create engaging, high-quality content with ease.
          </p>
        </div>
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-purple-500 rounded-xl -z-10"></div>
          <motion.div
            className="w-full h-auto rounded-xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10
            }}
          >
            <motion.img
              src={image125}
              alt="AI Content Creation"
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10
              }}
            />
          </motion.div>
          <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-transparent rounded-xl"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FrontDiv;