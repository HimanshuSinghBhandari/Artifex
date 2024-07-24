import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send a request to your backend
    // For demonstration, we'll use a timeout to simulate an API call
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setSubmitMessage('Thank you for your message. We will get back to you soon!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);

    // In a real application, you'd send a request to your backend like this:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   if (response.ok) {
    //     setSubmitMessage('Thank you for your message. We will get back to you soon!');
    //     setFormData({ name: '', email: '', subject: '', message: '' });
    //   } else {
    //     setSubmitMessage('There was an error sending your message. Please try again.');
    //   }
    // } catch (error) {
    //   setSubmitMessage('There was an error sending your message. Please try again.');
    // }
    // setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white md:mt-[5rem] mt-[2rem]">Contact Us</h2>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent focus:border-white focus:bg-opacity-30 focus:ring-0 text-white py-3 px-4"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent focus:border-white focus:bg-opacity-30 focus:ring-0 text-white py-3 px-4"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-white">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent focus:border-white focus:bg-opacity-30 focus:ring-0 text-white py-3 px-4"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-white bg-opacity-20 border-transparent focus:border-white focus:bg-opacity-30 focus:ring-0 text-white py-3 px-4"
          ></textarea>
        </div>
        <div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-3 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </div>
      </motion.form>
      {submitMessage && (
        <motion.p
          className="mt-4 text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {submitMessage}
        </motion.p>
      )}
    </div>
  );
};

export default ContactForm;