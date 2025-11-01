import React from 'react';
import { motion } from 'framer-motion';

const statistics = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '25+', label: 'Happy Clients' },
  { value: '3+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
];

// Framer Motion Variants for Staggered Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="lg:grid lg:grid-cols-2 lg:gap-12 items-center"
          initial="hidden"
          whileInView="visible" // Animation triggers when component enters viewport
          viewport={{ once: true, amount: 0.2 }} // Only animate once
          variants={containerVariants}
        >
          {/* Left Column: Text Content and Statistics */}
          <div className="order-2 lg:order-1">
            <motion.h2 
              className="text-4xl font-extrabold text-gray-900 mb-6"
              variants={itemVariants}
            >
              About Build Right Studios
            </motion.h2>

            <motion.p 
              className="mt-4 text-lg text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              We are a passionate freelance development agency specializing in creating robust,
              scalable, and innovative digital solutions. Our expertise spans across web development,
              software engineering, cloud infrastructure, and modern technology implementations.
            </motion.p>

            <motion.p 
              className="mt-4 text-lg text-gray-600 leading-relaxed mb-10"
              variants={itemVariants}
            >
              With a focus on quality, performance, and client satisfaction, we work closely with
              businesses of all sizes to transform their ideas into powerful digital experiences that drive
              growth and success.
            </motion.p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-y-10 sm:gap-y-12 sm:grid-cols-4 sm:gap-x-8">
              {statistics.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center sm:text-left"
                  variants={itemVariants} 
                >
                  <p className="text-4xl font-bold text-indigo-600">{stat.value}</p>
                  <p className="mt-2 text-base text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Image and Floating Badge */}
          <motion.div 
            className="mt-10 lg:mt-0 relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }} // Delay after text starts
          >
            {/* Image Container - Add a subtle shadow/border-radius as in the original */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              {/* Replace with your actual image component or use a direct <img> tag */}
              <div className="h-96 w-full bg-cover bg-center ">
                {/* You would use an <img> tag here with a class `h-full w-full object-cover` */}
              </div>
            </div>

            {/* Floating Orange Badge - Positioned Absolute */}
            <div className="absolute bottom-[-20px] left-0 sm:left-4 z-10">
              <div className="bg-orange-600 text-white p-4 pr-6 rounded-lg shadow-xl flex items-center space-x-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944c-1.347 0-2.671.192-3.957.568M21 12c0 1.856-.47 3.655-1.36 5.25l-2.02-2.02a3 3 0 00-4.242 0l-2.02 2.02A11.955 11.955 0 013 12c0-1.856.47-3.655 1.36-5.25l2.02 2.02a3 3 0 004.242 0l2.02-2.02A11.955 11.955 0 0121 12z" />
                </svg>
                <div>
                  <p className="text-xs">Quality First</p>
                  <p className="font-semibold text-sm">Development Agency</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;