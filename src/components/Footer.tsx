
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-heading mb-4">DevPortfolio</h3>
            <p className="text-foreground/70 mb-4">
              Building exceptional digital experiences with the MERN stack.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76c-1.15 0-2.07-.9-2.07-2.02 0-1.1.94-2 2.07-2 1.15 0 2.07.9 2.07 2 0 1.12-.94 2.02-2.07 2.02zm14.63 12.34h-3.62v-5.3c0-1.24-.03-2.84-1.74-2.84-1.74 0-2.01 1.35-2.01 2.76v5.38H9.13V9.24h3.48v1.6h.05c.45-.85 1.54-1.74 3.18-1.74 3.4 0 4.02 2.2 4.02 5.05v5.95z"></path>
                </svg>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.83-.26.83-.58v-2.03c-3.34.73-4.03-1.6-4.03-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.3 3.48 1 .1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.14 3 .4c2.28-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.18.76.84 1.23 1.9 1.23 3.22 0 4.6-2.8 5.63-5.48 5.93.43.36.81 1.1.81 2.2v3.28c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"></path>
                </svg>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.982 4.982 0 0 0 2.163-2.723 10.1 10.1 0 0 1-3.127 1.19 4.93 4.93 0 0 0-8.391 4.49 13.98 13.98 0 0 1-10.15-5.145 4.96 4.96 0 0 0 1.525 6.575 4.88 4.88 0 0 1-2.23-.616v.06a4.92 4.92 0 0 0 3.95 4.835 4.97 4.97 0 0 1-2.224.084 4.94 4.94 0 0 0 4.6 3.42 9.89 9.89 0 0 1-6.114 2.107c-.398 0-.79-.023-1.175-.068a13.91 13.91 0 0 0 7.548 2.212c9.057 0 14.01-7.502 14.01-14.008 0-.213-.005-.425-.014-.636A10.05 10.05 0 0 0 24 4.59z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-foreground/70 hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-foreground/70 mb-4">Subscribe to receive updates on my latest projects and tech articles.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="px-4 py-2 bg-muted border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary flex-grow"
              />
              <button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
          <p className="text-foreground/60 text-sm mt-2 sm:mt-0">
            Designed & Built with ❤️ using MERN Stack
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
