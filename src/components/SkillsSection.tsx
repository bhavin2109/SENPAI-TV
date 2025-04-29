import React from 'react';

const SkillsSection = () => {
  const mernSkills = [
    {
      name: "MongoDB",
      icon: "M",
      color: "bg-green-600",
      description: "NoSQL database for modern applications",
      level: 90
    },
    {
      name: "Express.js",
      icon: "E",
      color: "bg-gray-600",
      description: "Fast, unopinionated web framework for Node.js",
      level: 85
    },
    {
      name: "React.js",
      icon: "R",
      color: "bg-blue-500",
      description: "JavaScript library for building user interfaces",
      level: 95
    },
    {
      name: "Node.js",
      icon: "N",
      color: "bg-green-500",
      description: "JavaScript runtime for server-side applications",
      level: 88
    }
  ];
  
  const otherSkills = [
    "TypeScript", "Next.js", "Redux", "GraphQL", "AWS", "Docker", 
    "Git", "RESTful APIs", "Jest", "Tailwind CSS", "Figma", "Firebase"
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70">Expertise in full-stack development with MERN technologies</p>
        </div>
        
        {/* MERN Stack Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mernSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-muted rounded-lg p-6 border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`${skill.color} w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold">{skill.name}</h3>
              </div>
              <p className="text-foreground/70 text-sm mb-4">{skill.description}</p>
              <div className="w-full bg-background/50 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="flex justify-end mt-1">
                <span className="text-xs text-foreground/70">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Skills */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-center">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill) => (
              <span 
                key={skill}
                className="tech-badge card-hover"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
