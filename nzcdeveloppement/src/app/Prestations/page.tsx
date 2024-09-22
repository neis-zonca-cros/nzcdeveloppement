"use client";
import React, { useState } from "react";
import Modal from "../components/Modal";
import AnimatedButton from "../components/AnimatedButton";
import {
  faRulerCombined,
  faPencil,
  faDatabase,
  faRocket,
  faHeart,
  faPerson,
  faPeopleGroup,
  faPeopleLine,
  faPeopleArrows,
  faPeopleRobbery,
  faPersonCane,
  faLightbulb,
  faShoePrints,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CgFigma } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPeopleRoof } from "react-icons/fa6";
import { faWheelchair } from "@fortawesome/free-solid-svg-icons/faWheelchair";

const Prestations = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const openModal = (modalIndex: number) => setActiveModal(modalIndex);
  const closeModal = () => setActiveModal(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const [refSection3, inViewSection3] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <div
      id="prestations"
      className="no-scrollbar overflow-x-hidden flex flex-col h-screen w-screen items-center justify-center p-10"
      ref={refSection3}
    >
      <div className="flex flex-col items-center pb-10 mb-10 w-screen">
        <p className="text-lg md:text-xl lg:text-2xl font-body text-title text-center">
          Mes
          <span className="font-agrandir text-xl md:text-2xl lg:text-2xl">
            {" "}
            prestations
          </span>
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 gap-6 font-agrandir lg:flex lg:flex-row lg:space-x-20 justify-center items-center w-full max-w-screen-sm lg:max-w-screen-lg"
        variants={containerVariants}
        initial="hidden"
        animate={inViewSection3 ? "visible" : "hidden"}
      >
        <motion.div variants={buttonVariants} className="flex justify-center">
          <AnimatedButton onClick={() => openModal(1)}>
            Un site pour présenter votre entreprise
          </AnimatedButton>
        </motion.div>
        <motion.div variants={buttonVariants} className="flex justify-center">
          <AnimatedButton onClick={() => openModal(2)}>
            Un site pour vendre vos produits
          </AnimatedButton>
        </motion.div>
        <motion.div variants={buttonVariants} className="flex justify-center">
          <AnimatedButton onClick={() => openModal(3)}>
            Une application mobile pour toutes vos idées
          </AnimatedButton>
        </motion.div>
        <motion.div variants={buttonVariants} className="flex justify-center">
          <AnimatedButton onClick={() => openModal(4)} icon={faHeart}>
            Fait avec passion et
          </AnimatedButton>
        </motion.div>
      </motion.div>

      {/* Modals */}
      {activeModal === 1 && (
        <Modal isOpen={true} onClose={closeModal}>
          <h2 className="font-agrandir text-base md:text-xl lg:text-xl p-5 text-title">
            Vous êtes...
          </h2>
          <p className="text-sm md:text-base lg:text-base font-body text-title">
            Soignants, artistes, artisans, consultants, photographes, coachs,
            restaurateurs, entrepreneurs, associations et ONG, conférenciers,
            auteurs.
          </p>
          <p className="text-sm md:text-base lg:text-base font-body text-title pt-5 text-center">
            Ici, il y a de la place pour chacun !
          </p>
          <div className="flex justify-center pt-2 text-title flex-row space-x-2">
            <FontAwesomeIcon
              icon={faWheelchair}
              className="py-5 text-2xl md:text-4xl lg:text-4xl"
              color="#bcbcbc"
            />
            <FontAwesomeIcon
              icon={faPerson}
              className="py-5 text-2xl md:text-4xl lg:text-4xl"
              color="#bcbcbc"
            />
            <FontAwesomeIcon
              icon={faPeopleRobbery}
              className="py-5 text-2xl md:text-4xl lg:text-4xl"
              color="#bcbcbc"
            />
            <FontAwesomeIcon
              icon={faPersonCane}
              className="py-5 text-2xl md:text-4xl lg:text-4xl"
              color="#bcbcbc"
            />
          </div>
        </Modal>
      )}

      {activeModal === 2 && (
        <Modal isOpen={true} onClose={closeModal}>
          <h2 className="font-agrandir text-base md:text-xl lg:text-xl p-5 text-title">
            Vous vendez ...
          </h2>
          <p className="text-sm md:text-base lg:text-base font-body text-title">
            Vêtements, peintures, musiques, meubles, articles de décoration,
            livres, jouets et jeux, produits alimentaires, services (cours...)
          </p>
          <p className="text-sm md:text-base lg:text-base font-body text-title pt-5 text-center">
            J&apos;ai hâte de découvrir votre artisanat !
          </p>
          <div className="flex justify-center pt-2 text-title">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="py-5 text-2xl md:text-4xl lg:text-4xl"
              color="#bcbcbc"
            />
          </div>
        </Modal>
      )}

      {activeModal === 3 && (
        <Modal isOpen={true} onClose={closeModal}>
          <h2 className="font-agrandir text-base md:text-xl lg:text-xl p-5 text-title">
            Vous avez besoin d&apos;une application de...
          </h2>
          <p className="text-sm md:text-base lg:text-base font-body text-title">
            Gestion de tâches, jeux, recettes de cuisine, voyage, méditation
            et bien-être, gestion financière, réseaux sociaux, éducatives, suivi de santé.
          </p>
          <p className="text-sm md:text-base lg:text-base font-body text-title pt-5 text-center">
            On réfléchit ensemble ? 
          </p>
          <div className="flex justify-center pt-2 text-title">
          <FontAwesomeIcon
              icon={faShoePrints}
              className="py-5 text-2xl md:text-4xl lg:text-4xl"
              color="#bcbcbc"
            />
          </div>
        </Modal>
      )}

      {activeModal === 4 && (
        <Modal isOpen={true} onClose={closeModal}>
          <h2 className="font-agrandir text-base md:text-xl lg:text-xl p-5 text-title">
          Prendre soin de vos idées et les mettre en valeur. <br />
          Avancer pas à pas ensemble avec et pour vous. 
          </h2>
          <div className="flex justify-center pt-2 text-title">
          <FontAwesomeIcon
              icon={faHeart}
              className="py-5 text-2xl md:text-4xl lg:text-4xl"
              color="#bcbcbc"
            />
          </div>

        </Modal>
      )}
    </div>
  );
};

export default Prestations;
