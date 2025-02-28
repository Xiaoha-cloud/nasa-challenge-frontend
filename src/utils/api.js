import axios from "axios";

console.log("NASA_API_URL:", process.env.REACT_APP_NASA_API_URL);
console.log("NASA_API_KEY:", process.env.REACT_APP_NASA_API_KEY);

const api = axios.create({
  baseURL: process.env.REACT_APP_NASA_API_URL, 
});

export const fetchAPOD = async () => {
  try {
    const apiKey = process.env.REACT_APP_NASA_API_KEY;
    const apiUrl = process.env.REACT_APP_NASA_API_URL;
    if (!apiKey) {
      throw new Error("API key is missing! Check .env.local configuration.");
    }
    const response = await api.get(`/planetary/apod?api_key=${apiKey}`);
    if (!response.status === 200) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = response.data;
    console.log("APOD Data:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch APOD:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Ensure the function name matches the one being imported
export const fetchAPODData = fetchAPOD;

export const fetchNASAImages = async (query) => {
  try {
    const response = await api.get(`/search?q=${query}`);
    return response.data.collection.items;
  } catch (error) {
    console.error("Error fetching NASA images:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const fetchISSData = async () => {
  try {
    const response = await axios.get('http://api.open-notify.org/iss-now.json');
    return response.data;
  } catch (error) {
    console.error("Error fetching ISS data:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// Remove the incorrect fetchStatus function
// export const fetchStatus = async () => {
//   const response = await api.get(`/status?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
//   return response.data;
// };
