import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  ClockIcon,
  CreditCardIcon,
  CogIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const Sidebar: React.FC = () => {
  const [credits, setCredits] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    setCredits(Math.floor(Math.random() * 5000));
  }, []);

  const sidebarOptions = [
    { name: 'Home', icon: HomeIcon, path: '/dashboard' },
    { name: 'History', icon: ClockIcon, path: '/history' },
    { name: 'Billing', icon: CreditCardIcon, path: '/billing' },
    { name: 'Settings', icon: CogIcon, path: '/settings' },
    { name: 'Documents', icon: DocumentTextIcon, path: '/documents' },
    { name: 'Chat', icon: ChatBubbleLeftRightIcon, path: '/chat' },
  ];

  return (
    <motion.div
      className={`bg-indigo-800 text-white h-screen ${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300 ease-in-out`}
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-center items-center h-20 bg-indigo-900">
          <h1 className={`text-2xl font-bold ${isCollapsed ? 'hidden' : 'block'}`}>ARTIFEX</h1>
          {isCollapsed && <span className="text-2xl font-bold">A</span>}
        </div>

        <nav className="flex-1">
          {sidebarOptions.map((option) => (
            <Link key={option.name} to={option.path}>
              <motion.div 
                className="flex items-center p-4 hover:bg-indigo-700 border-b border-indigo-600"
                whileHover={{ x: 10 }}
              >
                <option.icon className="h-6 w-6 mr-3" />
                <span className={isCollapsed ? 'hidden' : 'block'}>{option.name}</span>
              </motion.div>
            </Link>
          ))}
        </nav>

        <div className="p-4 bg-indigo-900 mt-4">
          <div className={`mb-2 ${isCollapsed ? 'hidden' : 'block'}`}>
            <div className="flex justify-between items-center">
              <span>Credits</span>
              <span>{credits}/10000</span>
            </div>
            <div className="w-full bg-indigo-700 rounded-full h-2.5 mt-1">
              <div 
                className="bg-purple-600 h-2.5 rounded-full" 
                style={{ width: `${(credits / 10000) * 100}%` }}
              ></div>
            </div>
          </div>
          <motion.button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isCollapsed ? 'Up' : 'Upgrade'}
          </motion.button>
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-4 hover:bg-indigo-700 flex justify-center"
        >
          {isCollapsed ? (
            <ChevronRightIcon className="h-6 w-6" />
          ) : (
            <ChevronLeftIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;