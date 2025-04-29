
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="bg-muted py-1 px-4 rounded-full text-sm font-medium">
                Full Stack Developer
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building amazing digital experiences with 
              <span className="gradient-heading"> MERN Stack</span>
            </h1>
            <p className="text-lg text-foreground/70 md:pr-10">
              I create modern web applications using MongoDB, Express.js, React.js, and Node.js. Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
                View My Work
              </a>
              <a href="#contact" className="border border-border hover:border-primary bg-transparent text-foreground hover:text-primary font-medium px-6 py-3 rounded-lg transition-all text-center">
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative animate-bounce-subtle">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-70 blur-3xl -z-10"></div>
              <div className="w-full h-full rounded-full border-2 border-white/20 flex items-center justify-center p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-muted flex items-center justify-center">
                  <div className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full">
                    <div className="text-5xl sm:text-6xl font-bold gradient-heading">MERN</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
