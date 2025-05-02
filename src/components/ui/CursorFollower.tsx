import React, { useEffect, useState } from 'react';

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
      
      const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      
      const handleMouseEnter = () => {
        setIsVisible(true);
      };
      
      const handleMouseLeave = () => {
        setIsVisible(false);
      };
      
      const handleMouseOver = (e: MouseEvent) => {
        if ((e.target as HTMLElement).tagName === 'A' || 
            (e.target as HTMLElement).tagName === 'BUTTON' ||
            (e.target as HTMLElement).closest('a') || 
            (e.target as HTMLElement).closest('button')) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };
      
      document.addEventListener('mousemove', updatePosition);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseover', handleMouseOver);
      
      return () => {
        document.removeEventListener('mousemove', updatePosition);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseover', handleMouseOver);
      };
    }
  }, []);

  if (!isVisible) return null;
  
  return (
    <div 
      className="cursor-follower" 
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHovering ? '60px' : '40px',
        height: isHovering ? '60px' : '40px',
        backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.2)',
      }}
    />
  );
};

export default CursorFollower;