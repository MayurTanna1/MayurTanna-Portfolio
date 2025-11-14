'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { personalInfo } from '@/app/data/portfolio';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <motion.div
        className="max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          {/* Profile Circle */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
              <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl hover-tilt">
                M
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
            style={{
              backgroundSize: "200% auto",
              animation: "gradient 3s linear infinite"
            }}
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-light"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-8"
          >
            <FaMapMarkerAlt className="text-red-500" />
            <span>{personalInfo.location}</span>
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {personalInfo.summary}
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="relative group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaEnvelope className="relative z-10" />
              <span className="relative z-10">Email Me</span>
            </motion.a>
            <motion.a
              href={`tel:${personalInfo.phone}`}
              className="relative group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaPhone className="relative z-10" />
              <span className="relative z-10">Call</span>
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <motion.a
              href={`https://linkedin.com/${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-700 dark:text-gray-300 hover-scale"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={personalInfo.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 text-gray-700 dark:text-gray-300 hover-scale"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiUpwork className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <a href="#about" className="inline-block animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
                <div className="w-1.5 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mx-auto"></div>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
