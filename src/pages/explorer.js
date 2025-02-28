import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ImageCard from '../components/ImageCard';
import { useNASAImages } from '../hooks/useNASAImages';

const ExplorerPage = () => {
    const { images, loading, error } = useNASAImages();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading images</div>;

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <HeroSection />
            <main className="flex-grow p-4">
                <h1 className="text-2xl font-bold mb-4">NASA Image Explorer</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((image) => (
                        <ImageCard key={image.id} image={image} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ExplorerPage;