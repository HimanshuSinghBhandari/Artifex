import React from 'react';
import { motion } from 'framer-motion';
import { DocumentTextIcon, LightBulbIcon, GlobeAltIcon, CubeIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const CompanyDocument: React.FC = () => {
  return (
    <motion.div
      className="bg-white text-gray-900 p-8 rounded-lg border-4 border-purple-500 max-w-4xl mx-auto my-8 mt-[50rem]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex items-center mb-6"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <DocumentTextIcon className="h-12 w-12 text-purple-500 mr-4" />
        <h1 className="text-3xl font-bold text-purple-500">Artifex: Pioneering AI Content Generation</h1>
      </motion.div>

      <motion.section
        className="mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">Company Overview</h2>
        <p className="mb-4">
          Artifex is at the forefront of the AI content generation revolution. Founded in 2024 by a team of AI researchers and content creation experts, we've rapidly grown to become a leading innovator in the field of artificial intelligence-driven content production.
        </p>
        <p>
          Our mission is to empower businesses and individuals with the ability to create high-quality, diverse, and engaging content at scale, leveraging the power of advanced AI technologies.
        </p>
      </motion.section>

      <motion.section
        className="mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">Our Technology</h2>
        <p className="mb-4">
          At the heart of Artifex is our proprietary AI engine, ArtifexAI. Built on state-of-the-art natural language processing and machine learning algorithms, ArtifexAI can understand context, tone, and intent to generate human-like content across various formats and industries.
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Advanced language models trained on diverse datasets</li>
          <li>Context-aware content generation</li>
          <li>Multi-lingual support for global reach</li>
          <li>Customizable outputs to match brand voice and style</li>
          <li>Continuous learning and improvement through user feedback</li>
        </ul>
      </motion.section>

      <motion.section
        className="mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <LightBulbIcon className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Content Ideation</h3>
              <p>Generate creative ideas for articles, social media posts, and marketing campaigns.</p>
            </div>
          </div>
          <div className="flex items-start">
            <GlobeAltIcon className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Multilingual Content</h3>
              <p>Create and translate content in over 50 languages for global audiences.</p>
            </div>
          </div>
          <div className="flex items-start">
            <CubeIcon className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">Product Descriptions</h3>
              <p>Craft compelling product descriptions for e-commerce platforms.</p>
            </div>
          </div>
          <div className="flex items-start">
            <ChartBarIcon className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0" />
            <div>
              <h3 className="font-semibold">SEO Optimization</h3>
              <p>Generate SEO-friendly content to improve search engine rankings.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">Our Impact</h2>
        <p className="mb-4">
          Since our inception, Artifex has revolutionized content creation for over 10,000 businesses worldwide. Our AI-generated content has been viewed by millions, driving engagement and growth for our clients across various industries.
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>50% reduction in content production time for our clients</li>
          <li>30% increase in user engagement with AI-optimized content</li>
          <li>Millions of words generated daily across multiple platforms</li>
          <li>Partnerships with leading tech companies and content platforms</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">Looking Ahead</h2>
        <p>
          As we continue to push the boundaries of AI content generation, Artifex is committed to ethical AI practices and responsible innovation. We're actively working on new features including voice-to-text content creation, AI-powered video scripting, and advanced sentiment analysis for even more nuanced content generation.
        </p>
      </motion.section>
    </motion.div>
  );
};

export default CompanyDocument;