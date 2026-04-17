import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const links = document.querySelectorAll('button, a, input, [role="button"]');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: clicked ? 0.8 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.5 }}
        className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_10px_red]"
      />
      <motion.div
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: linkHovered ? 1.5 : 1,
          opacity: linkHovered ? 0.5 : 0.2,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 1 }}
        className="absolute w-10 h-10 border border-red-600 rounded-full"
      />
      {/* Target lines */}
      <motion.div
        animate={{ x: position.x - 30, y: position.y }}
        className="absolute w-15 h-[1px] bg-red-600/20"
      />
      <motion.div
        animate={{ x: position.x + 15, y: position.y }}
        className="absolute w-15 h-[1px] bg-red-600/20"
      />
      <motion.div
        animate={{ x: position.x, y: position.y - 30 }}
        className="absolute w-[1px] h-15 bg-red-600/20"
      />
      <motion.div
        animate={{ x: position.x, y: position.y + 15 }}
        className="absolute w-[1px] h-15 bg-red-600/20"
      />
    </div>
  );
}
