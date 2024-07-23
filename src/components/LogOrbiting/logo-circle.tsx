import React, { useState } from 'react';
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
  const radius = 180;
  const svgSize = radius * 2 + 100; // Add some padding

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`relative w-[${svgSize}px] h-[${svgSize}px]`}>
      <svg width={svgSize} height={svgSize} viewBox={`-${svgSize/2} -${svgSize/2} ${svgSize} ${svgSize}`}>
        {/* Central Artifex logo */}
        <motion.text
          x="0"
          y="0"
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="40"
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
                <circle cx="0" cy="0" r="25" fill="white" />
                <foreignObject x="-12" y="-12" width="24" height="24">
                  <div className="flex items-center justify-center w-full h-full">
                    <Icon className="text-purple-600" size={18} />
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