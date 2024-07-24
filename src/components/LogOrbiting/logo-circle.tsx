import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaReddit } from 'react-icons/fa';

const LogoWithOrbitingIcons: React.FC = () => {
  const icons = [
    { Icon: FaFacebookF },
    { Icon: FaTwitter },
    { Icon: FaInstagram },
    { Icon: FaLinkedinIn },
    { Icon: FaYoutube },
    { Icon: FaReddit },
  ];

  const [radius, setRadius] = useState(180);
  const [svgSize, setSvgSize] = useState(460);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) { // Mobile
        setRadius(100);
        setSvgSize(250);
      } else if (screenWidth < 1024) { // Tablet
        setRadius(140);
        setSvgSize(340);
      } else { // Desktop
        setRadius(180);
        setSvgSize(460);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <svg width={svgSize} height={svgSize} viewBox={`-${svgSize/2} -${svgSize/2} ${svgSize} ${svgSize}`}>
        {/* Central Artifex logo */}
        <motion.text
          x="0"
          y="0"
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize={svgSize / 10}
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ar
        </motion.text>

        {/* Orbiting icons */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {icons.map(({ Icon }, index) => {
            const angle = (index / icons.length) * 2 * Math.PI;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.g
                key={index}
                initial={{ scale: 1 }}
                animate={{
                  x,
                  y,
                  scale: hoveredIndex === index ? 1.2 : 1,
                  rotate: hoveredIndex === index ? 1080 : 0,
                }}
                transition={{
                  duration: hoveredIndex === index ? 1.5 : 0.5,
                  repeat: hoveredIndex === index ? 1 : 0,
                  ease: 'linear',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <circle cx="0" cy="0" r={svgSize / 20} fill="white" />
                <foreignObject 
                  x={-svgSize / 40} 
                  y={-svgSize / 40} 
                  width={svgSize / 20} 
                  height={svgSize / 20}
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <Icon className="text-purple-600" size={svgSize / 25} />
                  </div>
                </foreignObject>
              </motion.g>
            );
          })}
        </motion.g>
      </svg>
    </div>
  );
};

export default LogoWithOrbitingIcons;