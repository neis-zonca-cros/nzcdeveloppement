// components/Footer.tsx
import React from "react";
import { FaLinkedin } from "react-icons/fa6";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-title text-center p-10 pb-safe">
      <div className="mx-auto flex flex-col text-sm md:text-base lg:text-base">
        <p className="pb-2">
          &copy; {currentYear} NZC Développement. Tous droits réservés. N°SIRET: 93271239100014
          <a
          href="https://www.linkedin.com/in/néïs-zonca-cros"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm md:text-base lg:text-base justify-center text-title hover:underline"
        >
          <FaLinkedin className="mr-2" />
          LinkedIn
        </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
