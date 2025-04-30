
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70">Passionate about creating efficient and beautiful web applications</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30 z-10 rounded-lg"></div>
            <div className="aspect-square bg-muted rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-semibold mb-4">Professional Developer</p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 items-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <p className="text-sm">5+ years of experience</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <p className="text-sm">20+ completed projects</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <p className="text-sm">Full-stack development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Hi, I'm <span className="text-primary">Bhavin</span></h3>
            <p className="text-foreground/80">
              I'm a full-stack developer specializing in building exceptional digital experiences using the MERN stack. With a strong foundation in MongoDB, Express.js, React.js, and Node.js, I create efficient, scalable, and user-friendly applications.
            </p>
            <p className="text-foreground/80">
              My journey in web development started 5 years ago, and since then, I've worked with various clients ranging from startups to established companies. I'm passionate about writing clean code and implementing best practices to deliver high-quality solutions.
            </p>
            <div className="flex gap-4 pt-4">
              <div>
                <h4 className="text-xl font-bold text-primary">50+</h4>
                <p className="text-sm text-foreground/70">Completed Projects</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary">30+</h4>
                <p className="text-sm text-foreground/70">Satisfied Clients</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent">5+</h4>
                <p className="text-sm text-foreground/70">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
