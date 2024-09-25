"use client"

import React, { useRef } from "react";
import { motion, useSpring, useScroll } from "framer-motion";
import "./globals.css";
import APropos from "./APropos/page";
import Competences from "./Competences/page";
import NZC from "./components/NZC";
import { Navigation } from "./components/Navigation";
import Contact from "./Contact/page";
import Prestations from "./Prestations/page";
import { FaLinkedin } from "react-icons/fa6";


export default function Home() {
  const currentYear = new Date().getFullYear();

  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <Navigation /> 
      <div
        ref={scrollRef}
        className="no-scrollbar overflow-y-scroll overflow-x-hidden h-screen w-screen scroll-smooth bg-background"
      >
        <motion.div className="no-scrollbar flex flex-col">
          <NZC />
          <APropos />
          <Competences />
          <Prestations />
          <Contact/>
          <footer className="text-title text-center">
        <div className="mx-auto flex flex-col text-sm md:text-base lg:text-base">
          <p className="pb-5">
            &copy; {currentYear} NZC Développement. Tous droits réservés.
          </p>
          <p className="pb-5">N°SIRET: 93271239100014</p>
          <a
            href="https://www.linkedin.com/in/néïs-zonca-cros"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm md:text-base lg:text-base justify-center text-title hover:underline"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </a>
        </div>
      </footer>
        </motion.div>

        <motion.div
          className="no-scrollbar absolute left-0 right-0 h-5 bg-load bottom-0 origin-left"
          style={{ scaleX }}
        />
      </div>
    </div>
  );
};

