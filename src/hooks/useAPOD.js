import { useEffect, useState } from 'react';

const apiUrl = process.env.REACT_APP_NASA_API_URL || "https://api.nasa.gov";
const apiKey = process.env.REACT_APP_NASA_API_KEY;

const fetchAPOD = async () => {
  try {
    const response = await fetch(`${apiUrl}/planetary/apod?api_key=${apiKey}`);
    const data = await response.json();
    console.log("APOD Data:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch APOD:", error);
    throw error;
  }
};

export const useAPOD = () => {
    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAPOD = async () => {
            try {
                const data = await fetchAPOD();
                setApodData(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        getAPOD();
    }, []);

    return { apodData, loading, error };
};