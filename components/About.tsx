'use client';

import { motion } from 'framer-motion';
import { skills, skillLevels } from '@/app/data/portfolio';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-16"></div>
        </motion.div>

        {/* Skill Levels */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillLevels.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="relative group bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="relative text-lg font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400 bg-clip-text text-transparent">
                {skill.name}
              </h3>
              <div className="relative flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`h-2 w-full rounded-full ${
                      i < skill.level
                        ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  ></motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              variants={itemVariants}
              className="relative group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="relative text-xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 dark:from-indigo-400 dark:to-pink-400 bg-clip-text text-transparent border-b-2 border-indigo-500 pb-2">
                {skillCategory.category}
              </h3>
              <ul className="relative space-y-2">
                {skillCategory.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
                      whileHover={{ scale: 1.5 }}
                    ></motion.span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
