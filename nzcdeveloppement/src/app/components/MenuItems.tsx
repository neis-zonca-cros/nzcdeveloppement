import { motion } from "framer-motion";
import { buttonVariants } from "./AnimatedVariants";

export const MenuItem = ({
    href,
    label,
    onClick,
    isOpen,
  }: {
    href: string;
    label: string;
    onClick: () => void;
    isOpen: boolean;
  }) => (
    <li className="pt-5">
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        animate={isOpen ? "visible" : "hidden"}
      >
        <a
          href={href}
          className="flex shadow-2xl w-80 px-10 py-5 rounded-full text-center justify-center"
        >
          {label}
        </a>
      </motion.div>
    </li>
  );