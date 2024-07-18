import React from 'react';
import Card from './user-card';
import { motion } from 'framer-motion';
import { FaBlog, FaYoutube, FaInstagram, FaSync, FaSearch } from 'react-icons/fa';

interface CardGridProps {
    searchTerm: string;
  }

const cardData = [
  {
    icon: FaBlog,
    title: "Blog Title",
    content: "Generate catchy and SEO-friendly blog titles.",
    link: "/blog-title"
  },
  {
    icon: FaBlog,
    title: "Blog Content",
    content: "Create engaging blog content with AI assistance.",
    link: "/blog-content"
  },
  {
    icon: FaBlog,
    title: "Blog Topic Ideas",
    content: "Get inspiration for your next blog post.",
    link: "/blog-ideas"
  },
  {
    icon: FaYoutube,
    title: "YouTube SEO Title",
    content: "Craft attention-grabbing, SEO-optimized YouTube titles.",
    link: "/youtube-title"
  },
  {
    icon: FaYoutube,
    title: "YouTube Description",
    content: "Generate compelling YouTube video descriptions.",
    link: "/youtube-description"
  },
  {
    icon: FaYoutube,
    title: "YouTube Tags",
    content: "Create relevant tags to improve your video's discoverability.",
    link: "/youtube-tags"
  },
  {
    icon: FaSync,
    title: "Rewrite Article",
    content: "Revamp your existing content with a fresh perspective.",
    link: "/rewrite-article"
  },
  {
    icon: FaSearch,
    title: "Plagiarism Check",
    content: "Ensure your content is original and plagiarism-free.",
    link: "/plagiarism-check"
  },
  {
    icon: FaInstagram,
    title: "Instagram Post Generator",
    content: "Create eye-catching Instagram posts with AI.",
    link: "/instagram-post"
  },
  {
    icon: FaInstagram,
    title: "Instagram Caption Generator",
    content: "Generate engaging captions for your Instagram posts.",
    link: "/instagram-caption"
  }
];

const CardGrid: React.FC<CardGridProps> = ({ searchTerm }) => {
    const filteredCards = cardData.filter(card => 
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
     {filteredCards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          content={card.content}
          link={card.link}
        />
      ))}
    </motion.div>
  );
};

export default CardGrid;