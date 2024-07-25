import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  duration?: number;
}

const Loader: React.FC<LoaderProps> = ({ duration = 3000 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          return prev + 1;
        }
        clearInterval(interval);
        return 100;
      });
    }, duration / 100);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-300"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="44"
            cx="50"
            cy="50"
          />
          <AnimatePresence>
            <motion.circle
              className="text-purple-500"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="44"
              cx="50"
              cy="50"
              initial={{ strokeDasharray: "0 283" }}
              animate={{
                strokeDasharray: `${progress * 2.83} 283`
              }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-3xl font-bold text-purple-500">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;