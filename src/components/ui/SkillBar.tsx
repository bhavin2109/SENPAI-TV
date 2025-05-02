import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      setIsVisible(true);
    }
  }, [controls, inView]);

  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${percentage}%`,
      transition: {
        duration: 1.2,
        ease: [0.31, 0.62, 0.4, 1],
        delay: delay,
      },
    },
  };

  const percentageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: delay + 0.5 },
    },
  };

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
        <motion.span 
          className="text-primary-500 font-semibold"
          variants={percentageVariants}
          initial="hidden"
          animate={controls}
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
          variants={barVariants}
          initial="hidden"
          animate={controls}
        />
      </div>
    </div>
  );
};

export default SkillBar;