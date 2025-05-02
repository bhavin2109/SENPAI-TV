import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Globe, Palette } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="glass-card p-6 md:p-8 h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const services = [
    {
      icon: <Code size={26} />,
      title: "Web Development",
      description: "Building responsive and performant web applications with modern technologies and best practices.",
    },
    {
      icon: <Globe size={26} />,
      title: "3D Visualizations",
      description: "Creating immersive 3D experiences and visualizations for the web using WebGL and Three.js.",
    },
    {
      icon: <Palette size={26} />,
      title: "UI/UX Design",
      description: "Crafting intuitive user interfaces and experiences that are both beautiful and functional.",
    },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-16 md:py-24 relative"
    >
      <div className="section-container">
        <motion.div
          style={{ opacity, y }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="section-title mb-8">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
          
          <div className="space-y-6">
            <AnimatedText
              text="I'm a passionate creative developer with a focus on building immersive digital experiences."
              className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-6"
              once
            />
            
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              With over 69 years of experience in web development and digital design, I specialize in creating engaging user interfaces that combine aesthetic beauty with technical precision. My passion lies at the intersection of design and technology, where I strive to create meaningful digital experiences.
            </motion.p>
            
            <motion.p
              className="text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I'm constantly exploring new technologies and techniques to push the boundaries of what's possible on the web. From interactive 3D experiences to polished UI animations, I enjoy the challenge of bringing creative visions to life through code.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;