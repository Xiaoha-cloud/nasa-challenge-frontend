import { useState, useEffect } from 'react';
import axios from 'axios';

export const useNASAData = () => {
  const [nasaData, setNasaData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNASAData = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/techport/api/projects', {
          params: {
            api_key: 'DEMO_KEY'
          }
        });
        setNasaData(response.data.projects);
      } catch (error) {
        console.error("Error fetching NASA data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNASAData();
  }, []);

  return { nasaData, loading };
};
