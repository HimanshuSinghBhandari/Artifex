import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from './pricing-card';

const PricingSection: React.FC = () => {
    const pricingData = [
        {
          title: 'Basic',
          price: 0,
          features: [
            'Generate high-quality AI-powered content.',
            'Customize content with templates and options.',
            'Access comprehensive content library.',
            'Collaborate with team seamlessly.',
            'Analyze content performance with analytics.'
          ],
          isFree: true,
          Buy: 'Buy now'
        },
        {
          title: 'Standard',
          price: 999,
          features: [
            'Generate high-quality content with additional features.',
            'Customize content with advanced tools.',
            'Explore premium content library options.',
            'Utilize advanced collaboration and workflow features.',
            'Unlock advanced analytics and reporting capabilities.'
          ],
          discount: 20,
          Buy: 'Choose Standard'
        },
        {
          title: 'Plus',
          price: 4999,
          features: [
            'Unlock most powerful content generation capabilities.',
            'Comprehensive customization tools for unique content.',
            'Access exclusive, high-performing premium content.',
            'Advanced project management.',
            'advanced analytics features.'
          ],
          discount: 10,
          Buy: 'Choose Plus'
        }
      ];
      
  return (
    <motion.div
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 md:mt-[5rem] mt-[1rem] text-white text-center">Pricing Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((card, index) => (
            <PricingCard
              key={index}
              title={card.title}
              price={card.price}
              features={card.features}
              isFree={card.isFree}
              discount={card.discount}
              buy={card.Buy}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PricingSection;
