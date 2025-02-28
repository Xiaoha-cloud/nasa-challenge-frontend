import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { motion } from 'framer-motion';

// Configure axios to retry requests
axiosRetry(axios, { retries: 3 });

const MissionTimeline = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY');
        setMissions(response.data.photos);
      } catch (error) {
        console.error("Error fetching mission timeline:", error);
      }
    };

    fetchMissions();
  }, []);

  return (
    <div className="overflow-x-scroll flex space-x-4 p-4">
      {missions.map((mission, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="p-4 bg-white rounded-lg shadow-lg"
        >
          <h3 className="text-sm font-bold">{mission.rover.name}</h3>
          <p className="text-xs">{mission.camera.full_name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default MissionTimeline;
