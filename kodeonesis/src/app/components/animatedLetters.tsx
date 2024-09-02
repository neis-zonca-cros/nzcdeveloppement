// components/AnimatedLetters.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const letterVariants = {
    Z: {
      hidden: { opacity: 0, y: 100, rotate: 0 },
      visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 3, type: 'spring', stiffness: 100, damping: 60 } },
    },
    C: {
      hidden: { opacity: 0, y: -30, rotate: 10 },
      visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 3, type: 'spring', stiffness: 100, damping: 60 } },
    },
    N: {
      hidden: { opacity: 0, x: 100, rotate: 0 },
      visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 3, type: 'spring', stiffness: 100, damping: 60 } },
    },
  };

const AnimatedLetters = () => {
  const { scrollY } = useScroll();

  const color = useTransform(scrollY, [0, 1000], ['#333', '#ff5722']);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex space-x-4">
        <motion.div
          variants={letterVariants.N}
          initial="hidden"
          animate="visible"
        style={{ color: color}}
          className="text-6xl font-bold"
        >
          N
        </motion.div>
        <motion.div
          variants={letterVariants.Z}
          initial="hidden"
          animate="visible"
        style={{color: color }}
          className="text-6xl font-bold"
        >
          Z
        </motion.div>
        <motion.div
          variants={letterVariants.C}
          initial="hidden"
          animate="visible"
            style={{ color: color }}
          className="text-6xl font-bold"
        >
          C
        </motion.div>
      </div>
      
    </div>
  );
};

export default AnimatedLetters;
