import React, { useState, useEffect, useCallback } from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Research = () => {
  const [papers, setPapers] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  const fetchPapers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.nasa.gov/techport/api/projects', {
        params: {
          api_key: 'DEMO_KEY',
          q: query
        }
      });
      setPapers(response.data.projects);
    } catch (error) {
      console.error("Error fetching papers:", error);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchPapers();
  }, [fetchPapers]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    const updateChartData = () => {
      const labels = papers.map((paper, index) => `Paper ${index + 1}`);
      const data = papers.map(paper => paper.estimatedCompletionDate);
      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Research Papers',
            data: data,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          },
        ],
      });
    };

    updateChartData();
  }, [papers]);

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search research papers..."
          value={query}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <Line data={chartData} />
      </div>
      <Masonry
        breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {papers.map((paper, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-sm font-bold">{paper.title}</h3>
            <p className="text-xs">{paper.description}</p>
          </motion.div>
        ))}
      </Masonry>
      {loading && <p className="text-center">Loading...</p>}
    </div>
  );
};

export default Research;
