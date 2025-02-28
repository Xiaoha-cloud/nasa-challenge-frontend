import React from 'react';
import { motion } from 'framer-motion';

const DataCard = ({ data }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-4 bg-white rounded-lg shadow-lg"
    >
      <h3 className="text-sm font-bold">{data.title}</h3>
      <p className="text-xs">{data.description}</p>
      <div className="mt-2">
        <p className="text-xs">Speed: {data.speed}</p>
        <p className="text-xs">Altitude: {data.altitude}</p>
        <p className="text-xs">Crew: {data.crew}</p>
      </div>
    </motion.div>
  );
};

export default DataCard;