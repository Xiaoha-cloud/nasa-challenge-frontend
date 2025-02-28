import React from 'react';
import { motion } from 'framer-motion';

const ImageCard = ({ image, title, description }) => {
  return (
    <motion.div
      className="max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default ImageCard;