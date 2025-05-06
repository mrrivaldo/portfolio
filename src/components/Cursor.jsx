import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
    }

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => setIsActive(true));
      el.addEventListener('mouseleave', () => setIsActive(false));
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setIsActive(true));
        el.removeEventListener('mouseleave', () => setIsActive(false));
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`custom-cursor ${isActive ? 'active' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  );
};

export default Cursor; 