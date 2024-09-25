import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { menuVariants } from "./AnimatedVariants";
import { MenuItem } from "./MenuItems";

export function Navigation() {
  const [isOpen, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const menuItems = [
    { href: "#nzc", label: "NZC Développement" },
    { href: "#apropos", label: "À Propos" },
    { href: "#competences", label: "Mon savoir faire" },
    { href: "#prestations", label: "Mes Prestations" },
    { href: "#contact", label: "Me contacter" },
  ];

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
          {menuItems.map((item) => (
            <MenuItem
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={handleLinkClick}
              isOpen={isOpen}
            />
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}
