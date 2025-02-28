import React from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '../components/HeroSection';
import MissionTimeline from '../components/MissionTimeline';
import DataCard from '../components/DataCard';
import { useAPOD } from '../hooks/useAPOD';
import { useNASAImages } from '../hooks/useNASAImages';

const ISSLiveMap = dynamic(() => import('../components/ISSLiveMap'), { ssr: false });

const DataHub = () => {
    const { apodData, loading: apodLoading, error: apodError } = useAPOD();
    const { nasaImages, loading: imagesLoading, error: imagesError } = useNASAImages();

    if (apodLoading || imagesLoading) {
        return <div className="loader">Loading...</div>;
    }

    if (apodError || imagesError) {
        console.error("Error fetching data:", apodError || imagesError);
        return <div className="error">Error loading data</div>;
    }

    console.log("APOD Data:", apodData);
    console.log("NASA Images:", nasaImages);

    return (
        <div className="data-hub">
            <HeroSection apodData={apodData} />
            <MissionTimeline />
            <ISSLiveMap />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {nasaImages.map((image) => (
                    <DataCard key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
};

export default DataHub;