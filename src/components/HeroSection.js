import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const HeroSection = () => {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`);
        setApod(response.data);
      } catch (error) {
        console.error("Error fetching APOD:", error);
      }
    };

    fetchAPOD();
  }, []);

  if (!apod) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${apod.url})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ textShadow: '0 0 10px rgba(0, 0, 255, 0.5)' }}
        >
          {apod.title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ backdropFilter: 'blur(10px)' }}
        >
          {apod.explanation}
        </motion.p>
        <div className="flex space-x-4">
          <motion.button
            className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
            whileHover={{ scale: 1.1 }}
          >
            <i className="fas fa-rocket mr-2"></i> Launch Explorer
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-gray-700 text-white rounded hover:bg-gray-600"
            whileHover={{ scale: 1.1 }}
          >
            <i className="fas fa-satellite mr-2"></i> Live Data
          </motion.button>
        </div>
      </div>
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <i className="fas fa-arrow-down text-2xl"></i>
      </motion.div>
    </div>
  );
};

export default HeroSection;