import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import { ChevronDown, ArrowRight } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';
import Blob from '../3d/Blob';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          
          <Blob position={[-2, 1, -5]} scale={1.5} />
          <Blob position={[2, -1, -3]} scale={1} lightColor="#8B5CF6" darkColor="#3B82F6" />
          
          <Environment preset="city" />
          <Preload all />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 md:px-8 pt-20 relative z-10"
        style={{ y, opacity }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-gradient">Bhavin</span>
          </motion.h1>
          
          <div className="mb-8">
            <AnimatedText 
              text="Creative developer crafting immersive digital experiences" 
              className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 dark:text-gray-200"
            />
          </div>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="#projects" 
              className="btn-primary flex items-center gap-2 w-full sm:w-auto"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>
            
            <a 
              href="#contact" 
              className="btn-outline w-full sm:w-auto"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll Down */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} className="text-gray-500 dark:text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;