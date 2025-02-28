import { useState, useEffect } from "react";
import axios from "axios";

export const useNASAImages = (query, page) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://images-api.nasa.gov/search`, {
          params: {
            q: query,
            media_type: 'image',
            page: page
          }
        });
        setImages(response.data.collection.items);
      } catch (error) {
        console.error("NASA Images API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  return { images, loading };
};