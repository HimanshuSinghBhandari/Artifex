import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LaunchingSoonCard = () => {
  return (
    <motion.div
      className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white h-[20rem] sm:h-[30rem] w-[90vw] sm:w-[40rem] rounded-3xl shadow-lg mx-auto text-center my-4 sm:my-8 flex flex-col justify-center items-center p-4 sm:p-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ backgroundColor: 'rgba(124, 58, 237, 0.8)' }}
      whileHover={{
        scale: 0.95,
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
    >
      <motion.button
        className="bg-transparent border-2 border-white text-white px-3 py-2 sm:px-5 sm:py-3 rounded-3xl font-semibold mb-4 sm:mb-8 hover:bg-white hover:text-purple-700 transition duration-300 text-base sm:text-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Launching Soon
      </motion.button>

      <motion.h2
        className="text-xl sm:text-4xl font-bold mb-4 sm:mb-10 px-4 sm:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Your personalized AI content generation tools here
      </motion.h2>

      <motion.div
        className="space-y-4 sm:space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <motion.p className="text-sm sm:text-lg px-2 sm:px-0">
          Join waitlist, And be the first to try.
        </motion.p>

        <Link to="/signup" className="block">
          <motion.button
            className="bg-white text-purple-700 px-3 py-2 sm:px-5 sm:py-3 rounded-full font-semibold mx-auto hover:bg-purple-100 transition duration-300 text-sm sm:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </Link>

        <motion.p className="text-xs sm:text-sm">
          Already have an account? <Link to="/login" className="underline hover:text-purple-300">Log In</Link>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LaunchingSoonCard;