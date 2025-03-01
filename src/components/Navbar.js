import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [missions, setMissions] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/DONKI/notifications', {
          params: {
            api_key: 'DEMO_KEY'
          }
        });
        setMissions(response.data);
      } catch (error) {
        console.error("Error fetching missions:", error);
      }
    };

    fetchMissions();
  }, []);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white bg-black bg-opacity-50 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-lg font-bold text-blue-500"
          >
            NASA Explorer
          </motion.div>
          <div className="hidden md:flex space-x-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-sm text-gray-700 hover:text-blue-500 cursor-pointer"
            >
              Home
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-sm text-gray-700 hover:text-blue-500 cursor-pointer"
            >
              Data Hub
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-sm text-gray-700 hover:text-blue-500 cursor-pointer"
            >
              Research
            </motion.div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search space data..."
            value={query}
            onChange={handleSearch}
            className="p-2 border border-gray-300 rounded"
          />
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-sm text-gray-700 hover:text-blue-500 cursor-pointer"
            >
              Login
            </motion.div>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 text-white text-sm p-2">
        <marquee>
          {missions.map((mission, index) => (
            <span key={index} className="mx-4">
              {mission.messageType}: {mission.messageBody}
            </span>
          ))}
        </marquee>
      </div>
    </div>
  );
};

export default Navbar;