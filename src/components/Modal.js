import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, image, title, explanation }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <motion.div
        className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg w-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <div className="relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
          <img src={image} alt={title} className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2 text-gray-700">{explanation}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;