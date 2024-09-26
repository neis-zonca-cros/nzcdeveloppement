"use client";
import React, { useRef } from "react";
import { motion, useSpring, useScroll } from "framer-motion";
import "./globals.css";
import APropos from "./APropos/page";
import Competences from "./Competences/page";
import NZC from "./components/NZC";
import { Navigation } from "./components/Navigation";
import Contact from "./Contact/page";
import Prestations from "./Prestations/page";
import Footer from "./components/Footer";

export default function Home() {
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
        className="no-scrollbar overflow-y-scroll overflow-x-hidden min-h-screen w-screen scroll-smooth bg-background"
      >
        <motion.div className="no-scrollbar flex flex-col">
          <NZC />
          <APropos />
          <Competences />
          <Prestations />
          <Contact />
          <Footer />
        </motion.div>
        <motion.div
          className="no-scrollbar absolute left-0 right-0 h-5 bg-load top-0 origin-left"
          style={{ scaleX }}
        />
      </div>
    </div>
  );
}
