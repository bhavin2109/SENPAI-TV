import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const projects = [
    {
      title: "3D Product Configurator",
      description: "An interactive 3D product configurator allowing users to customize products in real-time with WebGL.",
      image: "https://images.pexels.com/photos/2882634/pexels-photo-2882634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Three.js", "React", "WebGL", "GSAP"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with 3D product previews, animations, and a seamless checkout experience.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Next.js", "Framer Motion", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Interactive Data Visualization",
      description: "A data visualization dashboard with interactive 3D charts and graphs for financial analytics.",
      image: "https://images.pexels.com/photos/7947782/pexels-photo-7947782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["D3.js", "Three.js", "TypeScript", "React"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AR Shopping Experience",
      description: "An augmented reality shopping experience allowing users to visualize products in their space before purchasing.",
      image: "https://images.pexels.com/photos/8985528/pexels-photo-8985528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["AR.js", "WebXR", "React Native", "Three.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "3D Portfolio Template",
      description: "A customizable 3D portfolio template for creative professionals with immersive animations.",
      image: "https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Three.js", "GSAP", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Interactive Storytelling App",
      description: "An interactive storytelling application with 3D scenes and animations that respond to user choices.",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["WebGL", "GSAP", "React", "Three.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-16 md:py-24 relative"
    >
      <div className="section-container">
        <motion.div
          style={{ opacity, y }}
        >
          <div className="mb-12">
            <h2 className="section-title">My Projects</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mt-4">
              A collection of projects showcasing my skills in web development, 3D visualization, and interactive design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;