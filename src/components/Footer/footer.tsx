import React from 'react';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import {FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialIcons = [
    { icon: <FaGithub className="h-6 w-6" />, href: 'https://github.com/HimanshuSinghBhandari' },
    { icon: <FaTwitter className="h-6 w-6" />, href: 'https://x.com/himanshu_14rt' },
    { icon: <FaLinkedinIn className="h-6 w-6" />, href: 'https://www.linkedin.com/in/himanshu-singh-5226a628a' },
  ];

  const contactIcons = [
    { icon: <HomeIcon className="h-6 w-6" />, text: '12345 UK, IND' },
    { icon: <EnvelopeIcon className="h-6 w-6" />, text: 'info@example.com' },
    { icon: <PhoneIcon className="h-6 w-6" />, text: '+91 (555) 555-5555' },
  ];

  return (
    <footer className="text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold">Stay Connected</h3>
            <p className="text-gray-400">Follow me on social media</p>
            <div className="flex space-x-6 mt-4">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contactIcons.map((contact, index) => (
              <div key={index} className="flex items-center space-x-4">
                {contact.icon}
                <span className="text-gray-400">{contact.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            &copy; {new Date().getFullYear()} Made by Himanshu Bhandari. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
