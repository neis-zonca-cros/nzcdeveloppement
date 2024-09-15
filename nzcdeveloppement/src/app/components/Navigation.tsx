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
        <ul className="h-full flex flex-col justify-center items-center space-y-4 font-agrandir text-4xl text-title">
        <li>
            <a href="#nzc" onClick={handleLinkClick}>
              NZC
            </a>
          </li>
          <li>
            <a href="#apropos" onClick={handleLinkClick}>
              À Propos
            </a>
          </li>
          <li>
            <a href="#competences" onClick={handleLinkClick}>
              Compétences
            </a>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}
