import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FrontMarquee: React.FC = () => {
  const brands = [
    "Artifex", "Lumina", "Zephyr", "Solaris", "Nexus", "Astra", "Quasar", "Orion", "Vega",
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const marqueeControls = useAnimation();
  const [,setIsHovering] = React.useState(false);

  const handleHoverStart = () => {
    setIsHovering(true);
    marqueeControls.stop();
  };

  const handleHoverEnd = () => {
    setIsHovering(false);
    marqueeControls.start("loop");
  };

  useEffect(() => {
    marqueeControls.start("loop");
  }, [marqueeControls]);

  return (
    <motion.div 
      className="w-full py-12 overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Trusted by Leading Brands
      </h2>
      <div className="relative">
        <motion.div
          className="flex whitespace-nowrap"
          animate={marqueeControls}
          variants={{
            loop: {
              x: "-100%",
              transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              }
            },
            stop: {
              x: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut"
              }
            }
          }}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
            <motion.div
              key={index}
              className="inline-block mx-4"
              variants={itemVariants}
            >
              <motion.div
                className="w-48 h-16 flex items-center justify-center text-xl font-semibold text-white bg-opacity-20 bg-white rounded-[220px] backdrop-blur-sm"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#9333ea",
                  transition: { duration: 0.2 }
                }}
              >
                {brand}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FrontMarquee;
