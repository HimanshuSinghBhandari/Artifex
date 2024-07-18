import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchBoxProps {
    onSearch: (term: string) => void;
  }

  const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-purple-300 rounded-full focus:outline-none focus:border-purple-500"
        whileFocus={{ scale: 1.05 }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <AnimatePresence>
        {isFocused && (
          <motion.div
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-sm text-gray-400">Press Enter to search</span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <MagnifyingGlassIcon className="w-5 h-5 text-purple-500" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SearchBox;