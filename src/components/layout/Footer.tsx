import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com/' },
    { icon: <Mail size={20} />, url: 'mailto:contact@example.com' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-800 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <motion.a 
            href="#home"
            className="text-2xl font-bold text-gradient mb-6 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Bhavin
          </motion.a>
          
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center text-dark-600 dark:text-gray-300 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                aria-label={`Social link ${index + 1}`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-dark-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Bhavin. All rights reserved.
            </p>
            
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;