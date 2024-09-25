"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const letterVariants = {
    Z: {
        hidden: { opacity: 0, y: 200, rotate: 200 },
        visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: { duration: 3, type: "spring", stiffness: 100, damping: 60 },
        },
    },
    C: {
        hidden: { opacity: 0, y: -200, rotate: -50 },
        visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: { duration: 3, type: "spring", stiffness: 100, damping: 60 },
        },
    },
    N: {
        hidden: { opacity: 0, x: 200, rotate: 50 },
        visible: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: { duration: 3, type: "spring", stiffness: 100, damping: 60 },
        },
    },
    D: {
        hidden: { opacity: 0, x: 200, rotate: 0 },
        visible: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: { duration: 3, type: "spring", stiffness: 100, damping: 60 },
        },
    },
};

interface PageProps {
    scrollRef: React.RefObject<HTMLDivElement>;
}

const NZC = () => {



    return (
        <div id="nzc" className="no-scrollbar flex flex-col justify-center items-center h-screen w-screen">
            <div className="flex space-x-4">
                <div className="flex flex-col justify-center items-center">
                    <motion.div
                        variants={letterVariants.C}
                        initial="hidden"
                        animate="visible"
                        className="text-xl md:text-2xl lg:text-2xl font-bold text-title font-agrandir"
                    >
                        Néïs
                    </motion.div>
                    <motion.div
                        variants={letterVariants.N}
                        initial="hidden"
                        animate="visible"
                        className="text-9xl lg:text-extra-large lg:leading-custom-line font-bold text-title font-agrandir"
                    >
                        N
                    </motion.div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <motion.div
                        variants={letterVariants.N}
                        initial="hidden"
                        animate="visible"
                        className="text-xl md:text-2xl lg:text-2xl font-bold text-title font-agrandir"
                    >
                        ZONCA
                    </motion.div>
                    <motion.div
                        variants={letterVariants.Z}
                        initial="hidden"
                        animate="visible"
                        className="text-9xl lg:text-extra-large lg:leading-custom-line text-title font-agrandir"
                    >
                        Z
                    </motion.div>
                </div>
                <div className="flex flex-col justify-center items-center font-agrandir">
                    <motion.div
                        variants={letterVariants.Z}
                        initial="hidden"
                        animate="visible"
                        className="text-xl md:text-2xl lg:text-2xl font-bold text-title font-agrandir"
                    >
                        CROS
                    </motion.div>
                    <motion.div
                        variants={letterVariants.C}
                        initial="hidden"
                        animate="visible"
                        className="text-9xl lg:text-extra-large lg:leading-custom-line font-bold text-title font-agrandir"
                    >
                        C
                    </motion.div>
                </div>
            </div>
            <motion.div
                variants={letterVariants.D}
                initial="hidden"
                animate="visible"
                className="text-xl md:text-2xl lg:text-2xl mt-5 font-bold text-title font-agrandir"
            >
                Développement web & mobile
            </motion.div>
        </div>
    );
};

export default NZC;
