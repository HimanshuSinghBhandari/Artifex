import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon, ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';
import { auth, db } from '../../service/firebase';
import { setDoc, getDoc, doc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface User {
  displayName: string;
  email: string;
  lastLoginTime: number;
}

const UserProfileDropdown: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      console.log('Firebase user:', firebaseUser);
      if (firebaseUser) {
        const userDocRef = doc(db, "Users", firebaseUser.uid);
        try {
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            const userData = userDoc.data() as User;
            const currentTime = Date.now();
            
            if (currentTime - userData.lastLoginTime > 15 * 24 * 60 * 60 * 1000) {
              // If more than 15 days have passed, sign out the user
              handleLogout();
            } else {
              setUser(userData);
              // Update last login time
              await setDoc(userDocRef, { lastLoginTime: currentTime }, { merge: true });
            }
          } else {
            // If user document doesn't exist, create it
            const newUser: User = {
              displayName: firebaseUser.displayName || '',
              email: firebaseUser.email || '',
              lastLoginTime: Date.now()
            };
            await setDoc(userDocRef, newUser);
            setUser(newUser);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          toast.error('Error fetching user data');
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate('/login');
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Error logging out');
    }
  };

  const getUserInitials = (displayName: string) => {
    return displayName ? displayName.split(' ').map(name => name[0]).join('').toUpperCase() : 'U';
  };

  if (!user) return null;

  return (
    <div ref={dropdownRef} className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
          {getUserInitials(user.displayName)}
        </div>
        <ChevronDownIcon className="w-5 h-5 text-gray-600" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
          >
            <div className="px-4 py-2 text-sm text-gray-700">
              <p className="font-semibold">{user.displayName}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
            <hr className="my-1" />
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
            >
              <ArrowLeftEndOnRectangleIcon className="w-5 h-5 mr-2" />
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <ToastContainer />
    </div>
  );
};

export default UserProfileDropdown;