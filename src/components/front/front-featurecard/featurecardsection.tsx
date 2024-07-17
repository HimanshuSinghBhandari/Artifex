import React from 'react';
import { motion } from 'framer-motion';
import {
  LightBulbIcon,
  ChartBarIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import FeatureCard from './featurecard';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Innovative AI',
      description: 'Our cutting-edge AI technology powers your content creation.',
      icon: <LightBulbIcon className="h-6 w-6" />,
    },
    {
      title: 'Insightful Analytics',
      description: 'Gain valuable insights to optimize your content performance.',
      icon: <ChartBarIcon className="h-6 w-6" />,
    },
    {
      title: 'Effortless Workflow',
      description: 'Streamline your content creation process with our intuitive tools.',
      icon: <RocketLaunchIcon className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Features</h2>
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.3 },
              }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
