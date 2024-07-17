import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-white/10 to-transparent rounded-xl p-8 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-white mb-4">{icon}</div>
      <h3 className="text-3xl font-normal text-purple-400  mb-2">{title}</h3>
      <p className="text-white text-center">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
