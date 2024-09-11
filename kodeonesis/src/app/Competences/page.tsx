"use client";
import React, { useState } from "react";
import Modal from "../components/Modal";
import AnimatedButton from "../components/AnimatedButton";
import {
  faRulerCombined,
  faPencil,
  faHeart,
  faDatabase,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const Competences = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div
      id="competences"
      className="no-scrollbar overflow-x-hidden flex flex-col h-screen w-screen items-center justify-center p-10"
    >
      <h1 className="text-2xl mb-4">Example Screen</h1>
      <div className="flex space-x-4 font-agrandir">
        <div className="flex flex-col items-center justify-center">
          <AnimatedButton
            onClick={openModal}
            icon={faDatabase}
            shape="rounded"
            borderRadius="lg"
          >
            Développement Back-End
          </AnimatedButton>
        </div>
        <div className="flex flex-col">
          <AnimatedButton onClick={openModal} icon={faRulerCombined}>
            Prototypage
          </AnimatedButton>
          <AnimatedButton onClick={openModal} icon={faPencil}>
            Développement Front-End
          </AnimatedButton>
        </div>
        <div className="flex flex-col items-center justify-center">
          <AnimatedButton
            onClick={openModal}
            icon={faRocket}
            shape="rounded"
            borderRadius="lg"
          >
            Déploiement
          </AnimatedButton>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl">Modal Content</h2>
        <p>This is an example of a modal content.</p>
      </Modal>
    </div>
  );
};
export default Competences;
