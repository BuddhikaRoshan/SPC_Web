"use client";

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Next.js
const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface Location {
  name: string;
  address: string;
  phone: string;
  email: string;
  position: [number, number];
}

interface MapComponentProps {
  locations: Location[];
}

const MapComponent = ({ locations }: MapComponentProps) => {
  useEffect(() => {
    // Only run on client-side
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    // Clear any existing map instance
    mapElement.innerHTML = '';

    // Initialize the map with a view of Sri Lanka
    const map = L.map('map').setView([7.8731, 80.7718], 8); // Increased zoom level to 8

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ' OpenStreetMap contributors',
      minZoom: 7,  // Prevent zooming out too far
      maxZoom: 18   // Maximum zoom level
    }).addTo(map);

    // Create bounds to fit all locations
    const bounds = L.latLngBounds(
      locations.map(loc => loc.position)
    );

    // Add some padding to the bounds
    bounds.pad(0.1);

    // Fit map to bounds after a short delay to ensure tiles are loaded
    setTimeout(() => {
      map.fitBounds(bounds);
    }, 100);

    // Add markers for each location
    locations.forEach(location => {
      const marker = L.marker(location.position, { icon: defaultIcon }).addTo(map);
      
      // Add popup with location info
      marker.bindPopup(`
        <div class="p-2">
          <h4 class="font-semibold text-amber-700">${location.name}</h4>
          <p class="text-sm text-gray-600">${location.address}</p>
          <p class="text-sm text-gray-600"> ${location.phone}</p>
          <p class="text-sm text-gray-600"> ${location.email}</p>
        </div>
      `);
    });

    // Clean up on unmount
    return () => {
      map.remove();
    };
  }, [locations]);

  return (
    <div 
      id="map" 
      style={{ 
        height: '500px', 
        width: '100%', 
        borderRadius: '0.5rem',
        zIndex: 0 // Ensure map renders above other elements
      }} 
    />
  );
};

export default MapComponent;
