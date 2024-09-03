import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

interface AnimatedLettersProps {
  scrollXProgress: any; 
}
const letterVariants = {
  Z: {
    hidden: { opacity: 0, y: 500, rotate: 400 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 3, type: 'spring', stiffness: 100, damping: 60 } },
  },
  C: {
    hidden: { opacity: 0, y: -500, rotate: -500 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 3, type: 'spring', stiffness: 100, damping: 60 } },
  },
  N: {
    hidden: { opacity: 0, x: 500, rotate: -600 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 3, type: 'spring', stiffness: 100, damping: 60 } },
  },
};

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({ scrollXProgress }) => {
  const yZ = useTransform(scrollXProgress, [0, 1], [0, 500]);
  const rotateZ = useTransform(scrollXProgress, [0, 1], [0, 400]);

  const yC = useTransform(scrollXProgress, [0, 1], [0, -500]);
  const rotateC = useTransform(scrollXProgress, [0, 1], [0, -500]);

  const xN = useTransform(scrollXProgress, [0, 1], [0, 500]);
  const rotateN = useTransform(scrollXProgress, [0, 1], [0, -600]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-4">
        <motion.div
          variants={letterVariants.N}
          style={{ x: xN, rotate: rotateN }}

          initial="hidden"
          animate="visible"
          className="text-9xl font-bold"
        >
          N
        </motion.div>
        <motion.div
          variants={letterVariants.Z}
          style={{ y: yZ, rotate: rotateZ }}

          initial="hidden"
          animate="visible"
          className="text-9xl font-bold"
        >
          Z
        </motion.div>
        <motion.div
          variants={letterVariants.C}
          style={{ y: yC, rotate: rotateC }}

          initial="hidden"
          animate="visible"
          className="text-9xl font-bold"
        >
          C
        </motion.div>
        
      </div>

    </div>
  );
};

export default AnimatedLetters;
