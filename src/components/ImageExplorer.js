import React, { useState, useEffect, useCallback } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import { motion } from 'framer-motion';
import axios from 'axios';

const categories = ["Planets", "Galaxies", "ISS", "Moon Missions"];

const ImageExplorer = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchImages = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}&page=${page}`);
      setImages(prevImages => [...prevImages, ...response.data.collection.items]);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleCategoryClick = (category) => {
    setQuery(category);
    setImages([]);
    setPage(1);
  };

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 4 + columnIndex;
    const image = images[index];
    if (!image) return null;

    return (
      <motion.div
        style={style}
        whileHover={{ scale: 1.05 }}
        className="relative overflow-hidden rounded-lg shadow-lg"
      >
        <img src={image.links[0].href} alt={image.data[0].title} className="w-full h-auto" />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-black bg-opacity-50 text-white p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-sm font-bold">{image.data[0].title}</h3>
          <p className="text-xs">{image.data[0].date_created}</p>
          <p className="text-xs">{image.data[0].center}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        {categories.map(category => (
          <button
            key={category}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <Grid
        columnCount={4}
        columnWidth={250}
        height={800}
        rowCount={Math.ceil(images.length / 4)}
        rowHeight={300}
        width={1000}
      >
        {Cell}
      </Grid>
      {loading && <p className="text-center">Loading...</p>}
    </div>
  );
};

export default ImageExplorer;
