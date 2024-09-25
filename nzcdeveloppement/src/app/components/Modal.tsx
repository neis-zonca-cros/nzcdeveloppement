import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return isOpen ? (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-background bg-opacity-90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={modalRef}
        className="w-3/3 m-5 md:w-2/3 lg:w-1/3 bg-background shadow-2xl p-6 rounded-lg relative max-h-screen overflow-y-auto text-center"
        initial={{ scale: 0.7, opacity: 0, zIndex: 0 }}
        animate={{ scale: 1, opacity: 1, zIndex: 10 }}
        exit={{ scale: 0.7, opacity: 0, zIndex: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button onClick={onClose} className="absolute top-5 right-5">
          <FontAwesomeIcon icon={faXmark} color="#bcbcbc" size="xl"/>
        </button>
        {children}
      </motion.div>
    </motion.div>
  ) : null;
};

export default Modal;
