import React from 'react';
import { motion } from 'framer-motion';

interface PricingCardProps {
  title: string;
  price: number;
  annualPrice?: number;
  features: string[];
  isFree?: boolean;
  discount?: number;
  isSelected?: boolean;
  buy?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  annualPrice,
  features,
  isFree = false,
  discount = 0,
  isSelected = false,
  buy,
}) => {
  return (
    <motion.div
      className={`bg-gradient-to-br from-white/10 to-transparent rounded-xl p-8 w-full max-w-md relative ${
        isSelected
          ? 'shadow-2xl scale-105 bg-gradient-to-br from-white/20 to-transparent'
          : ''
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: isSelected ? 1.05 : 1.1 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        {discount > 0 && (
          <div className="bg-blue-900 text-white px-2 py-1 rounded-2xl">
            {discount}% OFF
          </div>
        )}
      </div>
      <div className="flex items-center mb-6 justify-center">
        {isFree ? (
          <span className="text-4xl font-bold text-white">Free</span>
        ) : (
          <div>
            <span className="text-4xl font-bold text-white">₹{price}/m</span>
            {annualPrice && (
              <div className="text-lg text-gray-400">
                or ₹{annualPrice}/year
              </div>
            )}
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 rounded-b-xl"></div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-center text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <svg
              className="w-6 h-6 text-green-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
      <div className="h-4"></div>
      <motion.button
      className={`w-full font-bold py-3 px-6 rounded-full bg-white text-black`}
      whileHover={{ scale: 1.05, opacity: 0.7 }}
      whileTap={{ scale: 0.95 }}
      >
  {buy}
</motion.button>
    </motion.div>
  );
};

export default PricingCard;
