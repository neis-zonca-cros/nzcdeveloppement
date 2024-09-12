"use client";
import React, { useState } from "react";
import Modal from "../components/Modal";
import AnimatedButton from "../components/AnimatedButton";
import {
  faRulerCombined,
  faPencil,
  faHeart,
  faDatabase,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Competences = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, 
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const [refSection3, inViewSection3] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <div
      id="competences"
      className="no-scrollbar overflow-x-hidden flex flex-col h-screen w-screen items-center justify-center p-10"
      ref={refSection3} 
    >
  <div className="flex flex-col items-center pb-10 mb-10 w-screen">
    <p className="text-lg md:text-xl lg:text-2xl font-body text-title text-center">
      Mon
      <span className="font-agrandir text-xl md:text-2xl lg:text-2xl">
        {" "}Savoir faire
      </span>
    </p>
  </div>

      <motion.div
  className="grid grid-cols-2 gap-6 font-agrandir lg:flex lg:flex-row lg:space-x-20 justify-center items-center w-full max-w-screen-sm lg:max-w-screen-lg" // Full width and max width adjustments
  variants={containerVariants}
  initial="hidden"
  animate={inViewSection3 ? "visible" : "hidden"}
>
        <motion.div variants={buttonVariants} className="flex justify-center">
          <AnimatedButton onClick={openModal} icon={faDatabase}></AnimatedButton>
        </motion.div>
        <motion.div variants={buttonVariants} className="flex justify-center">
          <AnimatedButton onClick={openModal} icon={faRulerCombined}></AnimatedButton>
        </motion.div>
        <motion.div variants={buttonVariants} className="flex justify-center">
          <AnimatedButton onClick={openModal} icon={faPencil}></AnimatedButton>
        </motion.div>
        <motion.div variants={buttonVariants} className="flex justify-center">
          <AnimatedButton onClick={openModal} icon={faRocket}></AnimatedButton>
        </motion.div>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl">Modal Content</h2>
        <p>This is an example of a modal content.</p>
      </Modal>
    </div>

  );
};

export default Competences;
