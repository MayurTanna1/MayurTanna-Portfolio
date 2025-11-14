'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/app/data/portfolio';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

export default function Contact() {
  const contactItems = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: 'LinkedIn',
      value: personalInfo.linkedin,
      link: `https://linkedin.com/${personalInfo.linkedin}`,
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <SiUpwork className="text-2xl" />,
      label: 'Upwork',
      value: 'mayurtannaios',
      link: personalInfo.upwork,
      color: 'from-green-600 to-green-700'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            I'm currently available for freelance work and exciting iOS development opportunities.
            Let's collaborate on your next big project!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : undefined}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-4"
            >
              <div className={`p-4 bg-gradient-to-br ${item.color} text-white rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {item.label}
                </div>
                <div className="text-gray-800 dark:text-white font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-12"
        >
          <div className="flex items-center justify-center gap-3 text-xl">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            <span className="text-gray-800 dark:text-white font-semibold">
              {personalInfo.location}
            </span>
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="/MayurTanna_iOS.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold text-lg group"
          >
            <FaDownload className="group-hover:animate-bounce" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mayur Tanna. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
