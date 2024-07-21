import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.some((u: { email: string }) => u.email === email)) {
      setError('Email already exists');
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 to-indigo-900 p-4">
      <motion.div 
        className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md mt-[7rem]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-4xl font-bold mb-6 text-center text-white "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Sign Up
        </motion.h2>
        <form onSubmit={handleSignup} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label htmlFor="username" className="block text-white text-sm font-medium mb-2">Username</label>
            <motion.input 
              whileFocus={{ scale: 1.02 }}
              type="text" 
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-white placeholder-opacity-70"
              required
              placeholder="Choose a username"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email</label>
            <motion.input 
              whileFocus={{ scale: 1.02 }}
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-white placeholder-opacity-70"
              required
              placeholder="Enter your email"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <label htmlFor="password" className="block text-white text-sm font-medium mb-2">Password</label>
            <motion.input 
              whileFocus={{ scale: 1.02 }}
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-white placeholder-opacity-70"
              required
              placeholder="Choose a password"
            />
          </motion.div>
          {error && <p className="text-red-300 text-sm">{error}</p>}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-white bg-opacity-20 text-white py-2 px-4 rounded-lg hover:bg-opacity-50 transition duration-300 font-medium"
          >
            Sign Up
          </motion.button>
        </form>
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-white text-opacity-80">Already have an account?</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/login" className="text-purple-100 font-medium hover:text-opacity-90">
              Log in here
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;