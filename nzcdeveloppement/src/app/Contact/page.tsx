import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons/faPencil";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
          alert("Message envoyé!");
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
      className="no-scrollbar flex flex-col justify-center items-center h-screen w-screen"
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



      <form
        onSubmit={handleSubmit}
        className="w-2/3 md:w-1/3 lg:w-1/3 flex justify-center flex-col"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm md:text-base lg:text-base font-body text-title"
          >
            Prénom
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-title shadow-2xl rounded w-full py-2 px-3 bg-background text-title font-body focus:outline-none focus:ring-2 focus:ring-title focus:border-title"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm md:text-base lg:text-base font-body text-title"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-title shadow-2xl rounded w-full py-2 px-3 bg-background text-title font-body focus:outline-none focus:ring-2 focus:ring-title focus:border-title"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm md:text-base lg:text-base font-body text-title"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-title shadow-2xl rounded w-full py-2 px-3 bg-background text-title font-body focus:outline-none focus:ring-2 focus:ring-title focus:border-title"
          />
        </div>
        <button
          type="submit"
          className="bg-background shadow-xl font-agrandir text-lg md:text-xl lg:text-2xl rounded-full text-title px-4 py-2"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
