'use client';

import { motion } from 'framer-motion';
import { projects } from '@/app/data/portfolio';
import { FaAppStore, FaExternalLinkAlt } from 'react-icons/fa';
import { SiSwift, SiFirebase } from 'react-icons/si';

export default function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Explore some of my published iOS applications on the App Store
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <SiSwift className="text-2xl" />
                    <h3 className="text-xl font-bold line-clamp-1">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white bg-opacity-20 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* App Store Link */}
                <a
                  href={project.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg group-hover:scale-105 transform"
                >
                  <FaAppStore className="text-xl" />
                  <span>View on App Store</span>
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-xl">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              10+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-semibold">
              Years Experience
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-xl">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {projects.length}+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-semibold">
              Apps Published
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 rounded-xl">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              15+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-semibold">
              Projects Delivered
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 rounded-xl">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-semibold">
              Client Satisfaction
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
