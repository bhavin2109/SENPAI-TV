
import React, { useState } from 'react';
import { Code, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with product listings, shopping cart, user authentication, and payment processing.",
      image: "/placeholder.svg",
      tags: ["mongodb", "express", "react", "node"],
      liveUrl: "#",
      codeUrl: "#",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Real-time dashboard for social media analytics with data visualization and user engagement metrics.",
      image: "/placeholder.svg",
      tags: ["react", "node", "express", "mongodb"],
      liveUrl: "#",
      codeUrl: "#",
      category: "fullstack"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with user roles, task assignments, and progress tracking.",
      image: "/placeholder.svg",
      tags: ["react", "redux", "mongodb"],
      liveUrl: "#",
      codeUrl: "#",
      category: "frontend"
    },
    {
      id: 4,
      title: "RESTful API Service",
      description: "Scalable API service for handling data processing and integration with third-party services.",
      image: "/placeholder.svg",
      tags: ["express", "node", "mongodb"],
      liveUrl: "#",
      codeUrl: "#",
      category: "backend"
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description: "Real-time messaging platform with private and group chats, file sharing, and user presence.",
      image: "/placeholder.svg",
      tags: ["react", "node", "socket.io", "mongodb"],
      liveUrl: "#",
      codeUrl: "#",
      category: "fullstack"
    },
    {
      id: 6,
      title: "Blog CMS",
      description: "Content management system for blogs with markdown support, categories, and user comments.",
      image: "/placeholder.svg",
      tags: ["react", "node", "express", "mongodb"],
      liveUrl: "#",
      codeUrl: "#",
      category: "fullstack"
    }
  ];
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70">Explore my recent work built with MERN stack technologies</p>
        </div>
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === filter.id 
                  ? 'bg-primary text-white' 
                  : 'bg-muted text-foreground/70 hover:bg-primary/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-muted rounded-lg overflow-hidden border border-border card-hover"
            >
              <div className="aspect-video bg-background/50 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge text-xs">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-1 text-sm text-primary hover:text-primary/80"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a 
                    href={project.codeUrl}
                    className="flex items-center gap-1 text-sm text-secondary hover:text-secondary/80"
                  >
                    <Code size={16} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
