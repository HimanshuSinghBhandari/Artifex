import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaBlog, FaYoutube, FaInstagram, FaSync, FaSearch, FaCopy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const cardData = [
  {
    icon: FaBlog,
    title: "Blog Title",
    content: "Generate catchy and SEO-friendly blog titles.",
    link: "blog-title"
  },
  {
    icon: FaBlog,
    title: "Blog Content",
    content: "Create engaging blog content with AI assistance.",
    link: "blog-content"
  },
  {
    icon: FaBlog,
    title: "Blog Topic Ideas",
    content: "Get inspiration for your next blog post.",
    link: "blog-ideas"
  },
  {
    icon: FaYoutube,
    title: "YouTube SEO Title",
    content: "Craft attention-grabbing, SEO-optimized YouTube titles.",
    link: "youtube-title"
  },
  {
    icon: FaYoutube,
    title: "YouTube Description",
    content: "Generate compelling YouTube video descriptions.",
    link: "youtube-description"
  },
  {
    icon: FaYoutube,
    title: "YouTube Tags",
    content: "Create relevant tags to improve your video's discoverability.",
    link: "youtube-tags"
  },
  {
    icon: FaSync,
    title: "Rewrite Article",
    content: "Revamp your existing content with a fresh perspective.",
    link: "rewrite-article"
  },
  {
    icon: FaSearch,
    title: "Plagiarism Check",
    content: "Ensure your content is original and plagiarism-free.",
    link: "plagiarism-check"
  },
  {
    icon: FaInstagram,
    title: "Instagram Post Generator",
    content: "Create eye-catching Instagram posts with AI.",
    link: "instagram-post"
  },
  {
    icon: FaInstagram,
    title: "Instagram Caption Generator",
    content: "Generate engaging captions for your Instagram posts.",
    link: "instagram-caption"
  }
];

const ContentGenerationPage: React.FC = () => {
  const { link } = useParams<{ link: string }>();
  const cardInfo = cardData.find(card => card.link === link);
  const editorRef = useRef<any>(null);
  const [copied, setCopied] = useState(false);

  if (!cardInfo) {
    return <div>Card not found</div>;
  }

  const Icon = cardInfo.icon;

  const getInputLabels = (title: string) => {
    if (title.toLowerCase().includes('youtube')) {
      return ['Enter your YouTube title', 'Enter your YouTube video outline (optional)'];
    } else if (title.toLowerCase().includes('blog')) {
      return ['Enter your blog topic', 'Enter key points (optional)'];
    } else if (title.toLowerCase().includes('instagram')) {
      return ['Enter your Instagram post theme', 'Enter image description (optional)'];
    } else {
      return ['Enter your content title', 'Enter additional details (optional)'];
    }
  };

  const inputLabels = getInputLabels(cardInfo.title);

  const handleCopy = () => {
    if (editorRef.current) {
      const content = editorRef.current.getInstance().getMarkdown();
      navigator.clipboard.writeText(content).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <motion.div 
        className="w-11/12 h-[85vh] bg-white rounded-xl border border-1 border-purple-300 shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex h-full">
          <motion.div 
            className="w-2/5 bg-white p-8 overflow-y-auto border-r border-purple-200"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="text-4xl text-purple-600 mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Icon />
            </motion.div>
            <motion.h2 
              className="text-2xl font-bold mb-4 text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {cardInfo.title}
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {cardInfo.content}
            </motion.p>
            <motion.form 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div>
                <label className="block text-sm font-medium text-purple-700">{inputLabels[0]}</label>
                <input type="text" className="mt-1 block w-full rounded-md border border-1  border-purple-300 shadow-sm focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-700">{inputLabels[1]}</label>
                <textarea className="mt-1 block w-full rounded-md border border-1 border-purple-300 shadow-sm focus:ring focus:ring-purple-500 focus:ring-opacity-50" rows={4}></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Generate Content
              </motion.button>
            </motion.form>
          </motion.div>
          <motion.div 
            className="w-3/5 p-8 bg-white shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
          <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-purple-800">Your Result</h3>
              <motion.button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-md text-white ${copied ? 'bg-green-500' : 'bg-purple-600'} hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 flex items-center`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCopy className="mr-2" />
                {copied ? 'Copied!' : 'Copy'}
              </motion.button>
            </div>
            <div className="border border-purple-200 rounded-lg overflow-hidden">
              <Editor
                ref={editorRef}
                initialValue="Your result will appear here"
                height="500px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
                theme="dark"
                previewStyle="vertical"
                toolbarItems={[
                  ['heading', 'bold', 'italic', 'strike'],
                  ['hr', 'quote'],
                  ['ul', 'ol', 'task', 'indent', 'outdent'],
                  ['table', 'image', 'link'],
                  ['code', 'codeblock']
                ]}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContentGenerationPage;