import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/solid';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How does AI-powered content generation work?",
    answer: "AI-powered content generation uses advanced language models trained on vast amounts of data to create human-like text. It analyzes patterns, context, and user input to generate relevant and coherent content across various topics and formats."
  },
  {
    question: "What types of content can be created using AI?",
    answer: "AI can generate a wide range of content, including blog posts, social media updates, product descriptions, email newsletters, marketing copy, and even creative writing like stories or poems. The possibilities are extensive and continuously expanding."
  },
  {
    question: "Is AI-generated content original and plagiarism-free?",
    answer: "While AI-generated content is typically unique, it's important to review and edit the output to ensure originality and accuracy. Our AI is designed to create original content, but it's always a good practice to run it through plagiarism checkers and make necessary adjustments."
  },
  {
    question: "How can I ensure the quality of AI-generated content?",
    answer: "To maintain high-quality AI-generated content, provide clear instructions and context, review and edit the output, fact-check important information, and add your personal touch. Our AI is a powerful tool, but human oversight is crucial for optimal results."
  },
  {
    question: "Can AI replace human writers entirely?",
    answer: "While AI is a powerful tool for content creation, it's designed to augment rather than replace human writers. AI can speed up the writing process, overcome writer's block, and generate ideas, but human creativity, emotion, and critical thinking are still essential for producing truly engaging and nuanced content."
  }
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4 ">
      <h2 className="text-3xl font-bold text-center mb-8 text-white mt-[5rem]">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-10 rounded-lg overflow-hidden"
            initial={false}
            animate={{ backgroundColor: activeIndex === index ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="w-full flex items-center justify-between p-4 text-left"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span className="text-lg font-semibold text-white">{faq.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <PlusIcon className="w-6 h-6 text-white" />
              </motion.div>
            </motion.button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="p-4 text-white">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;