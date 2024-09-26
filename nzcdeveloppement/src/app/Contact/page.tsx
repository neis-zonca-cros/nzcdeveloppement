"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons/faPencil";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Swal from "sweetalert2";

const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [refSection3, inViewSection3] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            title: "Merci !",
            text: "Une réponse est en cours... !",
            confirmButtonText: "Fermer",
            customClass: {
              popup: "custom-swal",
            },
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="no-scrollbar flex flex-col justify-center min-h-screen items-center w-screen"
      ref={refSection3}
    >
      <FontAwesomeIcon
        icon={faPencil}
        className="py-5 text-3xl md:text-5xl lg:text-5xl"
        color="#bcbcbc"
      />
      <span className="mb-4 text-title font-body text-lg md:text-xl lg:text-2xl text-center">
        Besoin d&apos;un site vitrine, <br /> d&apos;un site de e-commerce,{" "}
        <br /> d&apos;une application mobile ?
      </span>
      <motion.div
        className="w-2/3 md:w-1/3 lg:w-1/3 flex justify-center flex-col"
        variants={containerVariants}
        initial="hidden"
        animate={inViewSection3 ? "visible" : "hidden"}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <motion.div
              variants={buttonVariants}
              className="block text-sm md:text-base lg:text-base font-body text-title"
            >
              <label htmlFor="name">Prénom</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-title shadow-2xl rounded w-full py-2 px-3 bg-background text-title font-body focus:outline-none focus:ring-2 focus:ring-title focus:border-title"
              />
            </motion.div>
          </div>
          <div className="mb-4">
            <motion.div
              variants={buttonVariants}
              className="block text-sm md:text-base lg:text-base font-body text-title"
            >
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-title shadow-2xl rounded w-full py-2 px-3 bg-background text-title font-body focus:outline-none focus:ring-2 focus:ring-title focus:border-title"
              />
            </motion.div>
          </div>
          <div className="mb-4">
            <motion.div
              variants={buttonVariants}
              className="block text-sm md:text-base lg:text-base font-body text-title"
            >
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-title shadow-2xl rounded w-full py-2 px-3 bg-background text-title font-body focus:outline-none focus:ring-2 focus:ring-title focus:border-title"
              />
            </motion.div>
          </div>
          <div className="flex justify-center items-center">
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="bg-background shadow-xl font-agrandir text-lg md:text-xl lg:text-2xl rounded-full text-title px-10 py-2"
            >
              Envoyer
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
