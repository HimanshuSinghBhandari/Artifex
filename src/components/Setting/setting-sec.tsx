import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface UserData {
  username: string;
  email: string;
  phone: string;
  website: string;
}

const Settings: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    username: '',
    email: '',
    phone: '',
    website: '',
  });

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const saveUserData = () => {
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <motion.div
      className="bg-white text-gray-900 p-8 rounded-lg max-w-2xl mx-auto my-8 border-4 border-purple-500"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-3xl font-bold text-purple-500 mb-6"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        User Settings
      </motion.h1>
      
      {['username', 'email', 'phone', 'website'].map((field, index) => (
        <motion.input
          key={field}
          type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={userData[field as keyof UserData]}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 bg-gray-100 text-gray-900 border border-gray-300 rounded"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 * index, duration: 0.3 }}
        />
      ))}

      <motion.button
        className="bg-purple-600 text-white px-6 py-3 rounded cursor-pointer mr-2 mb-2 hover:bg-purple-700 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={saveUserData}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
      >
        Save Changes
      </motion.button>
    </motion.div>
  );
};

export default Settings;