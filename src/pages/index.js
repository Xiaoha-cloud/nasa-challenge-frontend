import React, { useEffect, useState } from 'react';
import { fetchAPODData } from '../utils/api';
import HeroSection from '../components/HeroSection';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAPODData();
        setApodData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <div>
        <h1>Astronomy Picture of the Day</h1>
        {apodData && (
          <div>
            <h2>{apodData.title}</h2>
            <img src={apodData.url} alt={apodData.title} />
            <p>{apodData.explanation}</p>
          </div>
        )}
      </div>
      <Footer />
      {/* Add other sections/components here */}
    </div>
  );
};

export default HomePage;