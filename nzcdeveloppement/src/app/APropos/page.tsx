// aPropos.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function calculateAge(birthDate: string): number {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }

  return age;
}

const APropos = () => {
  const [refSection2, inViewSection2] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const birthDate: string = "1993-05-28";
  const age: number = calculateAge(birthDate);
  return (
    <section
      ref={refSection2}
      id="apropos"
      className="no-scrollbar overflow-x-hidden flex flex-col min-h-screen w-screen items-center justify-start p-2 md:p-10 lg:p-10"
    >
      <motion.img
        src="/neis.jpg"
        alt="My Image"
        initial={{ y: 50, opacity: 0 }}
        animate={inViewSection2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
        className="w-40 md:w-48 lg:w-48 pt-2 rounded-full mb-5"
      />
      <div className="w-[80%]">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={
            inViewSection2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
          }
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
            delay: 0.4,
          }}
          className="text-center"
        >
          <p className="text-sm md:text-base lg:text-base font-body text-title">
            <span className="font-agrandir text-base md:text-xl lg:text-xl">
              Néïs
            </span>
            , {age} ans, <br />
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={
            inViewSection2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
          }
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 25,
            delay: 0.6,
          }}
          className="text-center"
        >
          <p className="text-sm md:text-lg lg:text-lg font-body text-title">
            Fondatrice de{" "}
            <span className="font-agrandir text-base md:text-xl lg:text-xl">
              NZC
            </span>{" "}
            Développement
          </p>
        </motion.div>
        <br />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={
            inViewSection2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
          }
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 30,
            delay: 0.8,
          }}
          className="text-center"
        >
          <p className="text-sm md:text-lg lg:text-lg font-body text-title">
            Créer des sites est mon
            <span className="font-agrandir text-base md:text-xl lg:text-xl">
              {" "}
              artisanat
            </span>
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={
            inViewSection2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
          }
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 35,
            delay: 1.0,
          }}
          className="text-center"
        >
          <p className="text-sm md:text-lg lg:text-lg font-body text-title">
            Des œuvres discrètes faites de lignes de{" "}
            <span className="font-agrandir text-base md:text-xl lg:text-xl">
              {" "}
              code{" "}
            </span>
            pour faire vivre vos{" "}
            <span className="font-agrandir text-base md:text-xl lg:text-xl">
              besoins !
            </span>
          </p>
        </motion.div>
        <br />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={
            inViewSection2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
          }
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 40,
            delay: 1.2,
          }}
          className="text-center"
        >
          <p className="text-sm md:text-lg lg:text-lg font-body text-title">
            Ancienne soignante et travailleuse sociale, je suis sensible à la
            rencontre de l’autre et attachée à l’idée d’accompagner mes clients
            avec
            <span className="font-agrandir text-base md:text-xl lg:text-xl">
              {" "}
              bienveillance, transparence,
            </span>{" "}
            et dans le respect de valeurs
            <span className="font-agrandir text-base md:text-xl lg:text-xl">
              {" "}
              éthiques.
            </span>
          </p>
        </motion.div>
        <br />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={
            inViewSection2 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
          }
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 45,
            delay: 1.4,
          }}
          className="text-center"
        >
          <p className="text-sm md:text-lg lg:text-lg font-body text-title">
            Véritable artisanat, j’ai à cœur de créer avec
            <span className="font-agrandir text-base md:text-xl lg:text-xl">
              {" "}
              soin et précision.
            </span>{" "}
            Chaque projet est
            <span className="font-agrandir text-base md:text-xl lg:text-xl">
              {" "}
              unique
            </span>{" "}
            , et je m’engage à l’aborder avec la même attention aux détails
            qu’un créateur d’objets faits main. Mêler
            <span className="font-agrandir text-base md:text-xl lg:text-xl">
              {" "}
              rigueur
            </span>{" "}
            et
            <span className="font-agrandir text-base md:text-xl lg:text-xl">
              {" "}
              créativité
            </span>{" "}
            pour concevoir sur la
            <span className="font-agrandir text-base md:text-xl lg:text-xl">
              {" "}
              durée.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default APropos;
