import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image124 from './image124.svg';

const FrontImage: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { y: 100, opacity: 0.1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        opacity: { duration: 2 }  // Slower opacity transition for a more gradual effect
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
        className="w-3/4 max-w-3xl rounded-3xl overflow-hidden"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        <img
          src={image124}
          alt="Description of the image"
          className="w-full h-auto rounded-3xl"
        />
      </motion.div>
    </div>
  );
};

export default FrontImage;