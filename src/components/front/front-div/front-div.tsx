import React from 'react';
import { motion } from 'framer-motion';
import image125 from './image125.svg';

const FrontDiv: React.FC = () => {
  return (
    <div className="m-40 h-[33rem] flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent p-20 rounded-xl">
      <motion.div
        className="w-full max-w-6xl flex items-center justify-between"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-1/2 pr-12 relative">
          <h2 className="text-2xl font-bold text-purple-400 absolute ml-[9rem]">Seamless</h2>
          <p className="text-3xl font-bold text-white mt-8">Content Creation, Transform your content with our AI-powered tools</p>
          <p className="text-lg text-gray-300 mb-6 mt-3">
            Unlock the power of AI to create engaging, high-quality content with ease.
          </p>
        </div>
        <motion.div
          className="w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-purple-500 rounded-xl -z-10"></div>
          <motion.img
            src={image125}
            alt="AI Content Creation"
            className="w-full h-auto rounded-xl shadow-lg"
            whileHover={{
              x: [-10, 10, -10, 0],
              y: [0, -10, 10, 0],
              transition: {
                duration: 0.6,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1,
              },
            }}
          />
          <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-transparent rounded-xl"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FrontDiv;
