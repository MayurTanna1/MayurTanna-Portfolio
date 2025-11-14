'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ARShowcase() {
  const [activeCard, setActiveCard] = useState(0);
  const [selectedTech, setSelectedTech] = useState('ARKit');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const arFeatures = [
    {
      title: "ARKit Experiences",
      description: "Creating immersive AR applications with object placement, face tracking, and world mapping",
      icon: "🥽",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "3D Modeling & Animation",
      description: "Building interactive 3D models with SceneKit and RealityKit for realistic AR experiences",
      icon: "🎨",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Computer Vision",
      description: "Implementing object detection, image recognition, and spatial mapping using Vision framework",
      icon: "👁️",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Real-time Rendering",
      description: "Optimized 3D rendering and AR tracking for smooth, real-time performance on iOS devices",
      icon: "⚡",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const techDemos = {
    'ARKit': {
      icon: '🪑',
      title: 'Furniture Placement',
      description: 'Place 3D furniture in real space',
      gradient: 'from-purple-500 to-pink-500',
      features: ['World Tracking', 'Plane Detection', 'Object Anchoring']
    },
    'RealityKit': {
      icon: '🎭',
      title: 'Realistic 3D Models',
      description: 'Photorealistic rendering & physics',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['PBR Materials', 'Animations', 'Physics Simulation']
    },
    'SceneKit': {
      icon: '🎮',
      title: '3D Game Scene',
      description: 'Interactive 3D environments',
      gradient: 'from-green-500 to-teal-500',
      features: ['Particle Systems', 'Lighting', '3D Interactions']
    },
    'Core ML': {
      icon: '🔍',
      title: 'Object Recognition',
      description: 'Real-time AI detection',
      gradient: 'from-orange-500 to-red-500',
      features: ['ML Models', 'Classification', 'Predictions']
    },
    'Vision': {
      icon: '😊',
      title: 'Face Tracking',
      description: 'Advanced facial recognition',
      gradient: 'from-pink-500 to-rose-500',
      features: ['Face Detection', 'Landmarks', 'AR Filters']
    }
  };

  return (
    <section id="ar-showcase" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="text-7xl">🥽</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            AR & 3D Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Specialized in creating cutting-edge Augmented Reality experiences and immersive 3D applications for iOS
          </p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {arFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -10,
                rotateY: 5,
                scale: 1.05
              }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveCard(index)}
              style={{ perspective: "1000px" }}
            >
              <div className={`relative bg-gradient-to-br ${feature.gradient} p-[2px] rounded-2xl overflow-hidden`}>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 h-full">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-4"
                    animate={activeCard === index ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating 3D iPhone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative glass rounded-3xl p-8 overflow-hidden">
            {/* AR Badge */}
            <motion.div
              className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ✨ AR Enabled
            </motion.div>

            {/* 3D Device Container */}
            <div className="relative">
              <motion.div
                className="relative mx-auto w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-900"
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Screen */}
                <motion.div
                  key={mounted ? selectedTech : 'initial'}
                  className={`absolute inset-2 bg-gradient-to-br ${techDemos[selectedTech as keyof typeof techDemos].gradient} rounded-[2.5rem] overflow-hidden`}
                  initial={false}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* AR Content Simulation */}
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                    {/* Floating AR Elements - Behind content */}
                    <motion.div
                      className="absolute top-16 left-8 w-10 h-10 bg-white/15 backdrop-blur-sm rounded-xl z-0"
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-16 right-8 w-12 h-12 bg-white/15 backdrop-blur-sm rounded-full z-0"
                      animate={{
                        y: [0, 15, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    />
                    <motion.div
                      className="absolute top-24 right-6 w-8 h-8 bg-white/15 backdrop-blur-sm rounded-lg z-0"
                      animate={{
                        x: [0, 10, 0],
                        rotate: [0, 90, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                      }}
                    />

                    {/* Main Content - On top */}
                    <motion.div
                      className="text-white text-center relative z-10"
                      initial={false}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.div
                        className="text-7xl mb-3"
                        animate={{
                          scale: [1, 1.15, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      >
                        {techDemos[selectedTech as keyof typeof techDemos].icon}
                      </motion.div>
                      <h4 className="text-base font-bold mb-1">{techDemos[selectedTech as keyof typeof techDemos].title}</h4>
                      <p className="text-xs opacity-90 mb-3">{techDemos[selectedTech as keyof typeof techDemos].description}</p>

                      {/* Features */}
                      <div className="space-y-1.5 mt-4">
                        {techDemos[selectedTech as keyof typeof techDemos].features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={false}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: mounted ? 0.3 + idx * 0.1 : 0 }}
                            className="flex items-center justify-center gap-2 text-xs bg-white/25 backdrop-blur-sm rounded-full px-3 py-1.5 relative z-10"
                          >
                            <span className="text-xs">✓</span>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl"></div>
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-30 -z-10"></div>
            </div>

            {/* Tech Stack Tags */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {['ARKit', 'RealityKit', 'SceneKit', 'Core ML', 'Vision'].map((tech, i) => (
                <motion.button
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    selectedTech === tech
                      ? `bg-gradient-to-r ${techDemos[tech as keyof typeof techDemos].gradient} text-white shadow-lg`
                      : 'glass text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white'
                  }`}
                >
                  {tech}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
