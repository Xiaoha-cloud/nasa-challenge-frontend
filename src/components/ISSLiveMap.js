import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const ISSLiveMap = () => {
  const [issPosition, setIssPosition] = useState([0, 0]);

  useEffect(() => {
    const fetchIssPosition = async () => {
      try {
        const response = await axios.get('https://api.wheretheiss.at/v1/satellites/25544');
        setIssPosition([response.data.latitude, response.data.longitude]);
      } catch (error) {
        console.error("Error fetching ISS position:", error);
      }
    };

    fetchIssPosition();
    const interval = setInterval(fetchIssPosition, 5000);
    return () => clearInterval(interval);
  }, []);

  const issIcon = new L.Icon({
    iconUrl: '/iss-icon.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0, -25],
    className: 'iss-icon-glow'
  });

  return (
    <Map center={issPosition} zoom={2} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={issPosition} icon={issIcon}>
        <Popup>
          ISS Current Location<br />Latitude: {issPosition[0]}<br />Longitude: {issPosition[1]}
        </Popup>
      </Marker>
    </Map>
  );
};

export default ISSLiveMap;