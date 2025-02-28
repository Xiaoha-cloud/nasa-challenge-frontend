import React, { useEffect, useState } from 'react';
import { fetchAPOD, fetchNASAImages, fetchISSData } from './utils/api';
import './styles/global.css'; 



const App = () => {
  const [apodData, setApodData] = useState(null);
  const [nasaImages, setNasaImages] = useState(null);
  const [issData, setIssData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const apodResult = await fetchAPOD();
        setApodData(apodResult);

        const imagesResult = await fetchNASAImages();
        setNasaImages(imagesResult);

        const issResult = await fetchISSData();
        setIssData(issResult);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {apodData && <pre>{JSON.stringify(apodData, null, 2)}</pre>}
      {nasaImages && <pre>{JSON.stringify(nasaImages, null, 2)}</pre>}
      {issData && <pre>{JSON.stringify(issData, null, 2)}</pre>}
    </div>
  );
};

export default App;
