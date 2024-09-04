"use client";

import React, { useEffect, useRef, useState } from 'react';
import AnimatedLetters from "./components/animatedLetters";
import { motion, useScroll, useSpring } from 'framer-motion';
import './globals.css';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    scaleX.set(scrollYProgress.get());
  }, [scrollYProgress, scaleX]);

  return (
    <div>
      <div
        ref={scrollRef}
        className="overflow-y-scroll h-screen w-screen scroll-smooth"
      >
        <motion.div
          className="flex flex-col"
          style={{ height: '300vh' }}
        >
          <section
            className="flex h-screen items-center justify-center"
          >
            <AnimatedLetters scrollXProgress={scrollYProgress} />
          </section>

          <section
            className="flex h-screen items-center justify-center bg-red-400"
          >
            <h1 className="text-6xl text-white">Section 1</h1>
          </section>

          <section
            className="flex h-screen items-center justify-center bg-green-400"
            style={{ maxHeight: '300vh' }}
          >
            <h1 className="text-6xl text-white">Section 2</h1>
          </section>

        </motion.div>



        <motion.div
          className="absolute left-0 right-0 h-1 bg-red-500 bottom-24"
          style={{ scaleX }}
        />
      </div>
    </div>
  );
}