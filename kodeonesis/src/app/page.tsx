"use client";

import React, { useEffect, useRef, useState } from 'react';
import AnimatedLetters from "./components/animatedLetters";
import { motion, useScroll, useSpring } from 'framer-motion';
import './globals.css';
import { Navigation } from './components/navigation'


export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    scaleX.set(scrollXProgress.get());
  }, [scrollXProgress, scaleX]);

  return (
    <div>
    <div 
      ref={scrollRef} 
      className="flex-shrink-0 overflow-x-scroll h-screen w-screen scroll-smooth"
    >
      <Navigation />
      <motion.div
        className="flex"
        style={{ width: '300vw' }}
      >
        <section 
          className="w-screen h-screen flex items-center justify-center bg-blue-400 overflow-y-hidden"
        >
          <AnimatedLetters scrollXProgress={scrollXProgress} />
        </section>

        <section 
          className="flex-shrink-0 w-screen h-screen overflow-y-hidden"
        >
          <h1 className="text-6xl text-white">Section 1</h1>
        </section>

        <motion.div className="relative" style={{ height: '300vh'}}>
          <section 
            className="flex-shrink-0 w-screen h-screen flex items-center justify-center bg-green-400 overflow-y-auto"
            style={{ maxHeight: '300vh' }}
          >
            <h1 className="text-6xl text-white">Section 2</h1>
          </section>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute left-0 right-0 h-1 bg-red-500 bottom-24" 
        style={{ scaleX }} 
      />
    </div>
  </div>
  );
}