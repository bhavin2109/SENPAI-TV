import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CursorFollower from './components/ui/CursorFollower';
import ThemeProvider from './context/ThemeProvider';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CursorFollower />
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-dark-900 z-50">
      <motion.div
        className="text-4xl font-bold text-gradient"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.span
          className="inline-block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          B
        </motion.span>
        <motion.span
          className="inline-block"
          animate={{ y: [0, -10, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.1 
          }}
        >
          h
        </motion.span>
        <motion.span
          className="inline-block"
          animate={{ y: [0, -10, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.2
          }}
        >
          a
        </motion.span>
        <motion.span
          className="inline-block"
          animate={{ y: [0, -10, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.3
          }}
        >
          v
        </motion.span>
        <motion.span
          className="inline-block"
          animate={{ y: [0, -10, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.4
          }}
        >
          i
        </motion.span>
        <motion.span
          className="inline-block"
          animate={{ y: [0, -10, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          n
        </motion.span>
      </motion.div>
    </div>
  );
};

export default App;