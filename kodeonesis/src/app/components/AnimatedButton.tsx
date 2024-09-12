import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AnimatedButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  icon: any;
  shape?: 'circle' | 'square' | 'rounded'; // Formes possibles pour le bouton
  borderRadius?: string; // Rayon des coins pour une forme personnalisée
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  onClick,
  children,
  icon,
  shape = 'circle', 
  borderRadius = 'full', 
}) => {
  let shapeClass = 'rounded-full'; 

  if (shape === 'square') {
    shapeClass = 'rounded-none'; 
  } else if (shape === 'rounded') {
    shapeClass = `rounded-${borderRadius}`; 
  }

  return (
    <motion.button
      onClick={onClick}
      className={`w-36 h-36 md:w-48 md:h-48 lg:w-48 lg:h-48 bg-title text-background ${shapeClass} flex flex-col items-center justify-center`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="text-lg px-10">{children}</span>
      <FontAwesomeIcon icon={icon} className="text-2xl md:text-4xl lg:text-4xl" />
    </motion.button>
  );
};

export default AnimatedButton;
