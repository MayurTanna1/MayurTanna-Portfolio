'use client';

import { motion } from 'framer-motion';
import { experience, education } from '@/app/data/portfolio';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function Experience() {
  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16"></div>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center gap-2">
            <FaBriefcase className="text-blue-600" />
            Professional Experience
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-0 ${
                  index % 2 === 0 ? 'md:right-0 md:-mr-2' : 'md:left-0 md:-ml-2'
                } left-0 -ml-2 md:ml-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900`}></div>

                <div className="ml-8 md:ml-0 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold mb-2">
                    {exp.period}
                  </span>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center gap-2">
            <FaGraduationCap className="text-purple-600" />
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-semibold mb-3">
                  {edu.period}
                </span>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {edu.degree}
                </h4>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {edu.location}
                </p>
                <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                  Grade: {edu.grade}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
