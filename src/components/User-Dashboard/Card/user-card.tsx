import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface CardProps {
  icon: IconType;
  title: string;
  content: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, content, link }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 cursor-pointer border border-1 border-purple-300"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open(link, '_blank')}
    >
      <motion.div
        className="text-4xl text-purple-600 mb-4"
        whileHover={{ scale: 1.2, color: "#7e22ce" }}
        transition={{ duration: 0.3 }}
      >
        <Icon />
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </motion.div>
  );
};

export default Card;
