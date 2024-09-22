import React, { useState } from "react";
import Link from "next/link";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

export function Navigation() {
  const [isOpen, setOpen] = useState(false);

  const menuVariants = {
    hidden: {
      clipPath: "inset(0% 0% 100% 0%)", 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)", 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const handleLinkClick = () => {
    setOpen(false); 
  };

  const linkVariants = {
    hover: {
      scale: 1.05, 
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav className="fixed top-0 right-0 z-50">
      <div className="relative z-50 flex justify-between items-center p-4">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#bcbcbc" />
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 bg-load z-40"
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        <ul className="h-full flex flex-col justify-center items-center space-y-4 font-agrandir text-xl md:text-2xl lg:text-2xl text-title">
          <li className="pt-5">
            <motion.div
              variants={linkVariants}
              whileHover="hover"
              onClick={handleLinkClick}
            >
              <a href="#nzc" className="flex w-80 shadow-2xl justify-center px-10 py-5 rounded-full text-center">NZC Développement</a>
            </motion.div>
          </li>
          <li className="pt-5">
            <motion.div
              variants={linkVariants}
              whileHover="hover"
              onClick={handleLinkClick}
            >
              <a href="#apropos" className="flex w-80 shadow-2xl justify-center px-10 py-5 rounded-full text-center">
                À Propos
              </a>
            </motion.div>
          </li>
          <li className="pt-5">
            <motion.div
              variants={linkVariants}
              whileHover="hover"
              onClick={handleLinkClick}
            >
              <a href="#competences" className="flex shadow-2xl w-80 px-10 py-5 rounded-full text-center justify-center">Mon savoir faire</a>
            </motion.div>
          </li>
          <li className="pt-5">
            <motion.div
              variants={linkVariants}
              whileHover="hover"
              onClick={handleLinkClick}
            >
              <a href="#prestations" className="flex shadow-2xl w-80 px-10 py-5 rounded-full text-center justify-center">Mes Prestations</a>
            </motion.div>
          </li>
          <li className="pt-5">
            <motion.div
              variants={linkVariants}
              whileHover="hover"
              onClick={handleLinkClick}
            >
              <a href="#contact" className="flex shadow-2xl w-80 px-10 py-5 rounded-full text-center justify-center">Me contacter</a>
            </motion.div>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}
