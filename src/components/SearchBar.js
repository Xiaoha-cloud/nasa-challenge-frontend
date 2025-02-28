import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      try {
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}`);
        onSearch(response.data.collection.items);
      } catch (error) {
        console.error('Error fetching data from NASA API:', error);
      }
    }
  };

  return (
    <motion.form
      className="flex items-center justify-center p-4"
      onSubmit={handleSearch}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search NASA images..."
        className="border border-gray-300 rounded-lg p-2 w-80"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white rounded-lg p-2">
        Search
      </button>
    </motion.form>
  );
};

export default SearchBar;