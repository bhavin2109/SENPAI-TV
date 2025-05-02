import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SkillBar from '../ui/SkillBar';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const technicalSkills = [
    { name: "React & React Native", percentage: 95 },
    { name: "Three.js & WebGL", percentage: 85 },
    { name: "JavaScript/TypeScript", percentage: 90 },
    { name: "Node.js & Express", percentage: 80 },
    { name: "CSS & Tailwind", percentage: 92 },
  ];

  const designSkills = [
    { name: "UI/UX Design", percentage: 88 },
    { name: "3D Modeling", percentage: 75 },
    { name: "Animation", percentage: 82 },
    { name: "Responsive Design", percentage: 95 },
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50 dark:bg-dark-800 relative"
    >
      <div className="section-container">
        <motion.div
          style={{ opacity, y }}
        >
          <h2 className="section-title mb-12">My Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <motion.h3 
                className="text-xl md:text-2xl font-bold mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Technical Skills
              </motion.h3>
              
              <div className="space-y-2">
                {technicalSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <motion.h3 
                className="text-xl md:text-2xl font-bold mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Design Skills
              </motion.h3>
              
              <div className="space-y-2">
                {designSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 0.1 + 0.2}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;