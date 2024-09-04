import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

interface AnimatedLettersProps {
  scrollXProgress: any; 
}
const letterVariants = {
  Z: {
    hidden: { opacity: 0, y: 200, rotate: 100 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 3, type: 'spring', stiffness: 100, damping: 60 } },
  },
  C: {
    hidden: { opacity: 0, y: -200, rotate: -100 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 3, type: 'spring', stiffness: 100, damping: 60 } },
  },
  N: {
    hidden: { opacity: 0, x: 200, rotate: -200 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 3, type: 'spring', stiffness: 100, damping: 60 } },
  },
};

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({ scrollXProgress }) => {
  const yZ = useTransform(scrollXProgress, [0, 1], [0, 200]);
  const rotateZ = useTransform(scrollXProgress, [0, 1], [0, 100]);

  const yC = useTransform(scrollXProgress, [0, 1], [0, -200]);
  const rotateC = useTransform(scrollXProgress, [0, 1], [0, -100]);

  const xN = useTransform(scrollXProgress, [0, 1], [0, 200]);
  const rotateN = useTransform(scrollXProgress, [0, 1], [0, -200]);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex space-x-4">
        <div className='flex flex-col justify-center items-center'>
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
          variants={letterVariants.C}
          style={{ x: yC, rotate: rotateC }}

          initial="hidden"
          animate="visible"
          className="text-2xl font-bold"
        >
          Néïs
        </motion.div></div>
        <div className='flex flex-col justify-center items-center'>
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
          variants={letterVariants.N}
          style={{ y: xN, rotate: rotateN }}

          initial="hidden"
          animate="visible"
          className="text-2xl font-bold"
        >
          ZONCA
        </motion.div></div>
        <div className='flex flex-col justify-center items-center'>
        <motion.div
          variants={letterVariants.C}
          style={{ y: yC, rotate: rotateC }}

          initial="hidden"
          animate="visible"
          className="text-9xl font-bold"
        >
          C
        </motion.div>
        <motion.div
          variants={letterVariants.Z}
          style={{ y: yZ, rotate: rotateZ }}

          initial="hidden"
          animate="visible"
          className="text-2xl font-bold"
        >
          CROS
        </motion.div></div>
        
      </div>

    </div>
  );
};

export default AnimatedLetters;
