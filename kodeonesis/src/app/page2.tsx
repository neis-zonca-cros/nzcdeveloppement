// Page2.tsx
"use client";

import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";



const Page2 = () => {
    const [refSection2, inViewSection2] = useInView({ triggerOnce: false, threshold: 0.8 });

    return (
        <section
            ref={refSection2}
            className="flex flex-col h-screen w-screen items-center justify-start p-10"
        >
<motion.img
    src="/neis.jpg"
    alt="My Image"
    initial={{ y: 50, opacity: 0 }}
    animate={inViewSection2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
    transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}  
    className="w-[10%] rounded-full mb-5"
 />

<motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={inViewSection2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
    transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.4 }}  
    className="text-center"
>
    <h1 className="text-4xl font-bold text-white">My Title</h1>
    <p className="text-xl mt-2 text-white">This is the description that appears with a bounce effect.</p>
</motion.div>

        </section>

    );
};

export default Page2;
