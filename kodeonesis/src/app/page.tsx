"use client"

import React, { useRef } from "react";
import { motion, useSpring, useScroll } from "framer-motion";
import "./globals.css";
import Page1 from "./page1";
import Page2 from "./page2";

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
      <div
        ref={scrollRef}
        className="overflow-y-scroll overflow-x-hidden h-screen w-screen scroll-smooth bg-background"
      >
        <motion.div className="flex flex-col">
          <Page1 scrollRef={scrollRef} />
          <Page2 />
        </motion.div>

        <motion.div
          className="absolute left-0 right-0 h-5 bg-load top-0 origin-left"
          style={{ scaleX }}
        />
      </div>
    </div>
  );
};

