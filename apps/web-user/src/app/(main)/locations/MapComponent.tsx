'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const locations = [
  { id: 'da-nang', name: 'GoRide Đà Nẵng', position: [16.0544, 108.2022] as [number, number], bikes: 120 },
  { id: 'da-lat', name: 'GoRide Đà Lạt', position: [11.9404, 108.4583] as [number, number], bikes: 85 },
  { id: 'ha-no-i', name: 'GoRide Hà Nội', position: [21.0285, 105.8542] as [number, number], bikes: 200 },
  { id: 'tphcm', name: 'GoRide TP.HCM', position: [10.8231, 106.6297] as [number, number], bikes: 350 },
  { id: 'ninh-binh', name: 'GoRide Ninh Bình', position: [20.2526, 105.9745] as [number, number], bikes: 60 },
  { id: 'hue', name: 'GoRide Huế', position: [16.4637, 107.5909] as [number, number], bikes: 75 },
];

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && mapRef.current && !mapInstance.current) {
      // 1. Initialize custom icon
      const DefaultIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      // 2. Initialize Map
      mapInstance.current = L.map(mapRef.current).setView([16.0544, 108.2022], 6);

      // 3. Add Tile Layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstance.current);

      // 4. Add Markers
      locations.forEach(loc => {
        const marker = L.marker(loc.position, { icon: DefaultIcon }).addTo(mapInstance.current!);
        
        const popupContent = `
          <div style="padding: 4px; font-family: 'Plus Jakarta Sans', sans-serif;">
            <div style="font-weight: 800; color: #0f172a; margin-bottom: 4px; font-size: 14px;">${loc.name}</div>
            <div style="font-size: 12px; color: #0d9488; font-weight: 700;">${loc.bikes} xe sẵn sàng</div>
            <a href="/cars" style="display: inline-block; margin-top: 8px; color: #3b82f6; font-weight: 700; font-size: 12px; text-decoration: none;">Thuê xe ngay &rarr;</a>
          </div>
        `;
        
        marker.bindPopup(popupContent);
      });
    }

    // Cleanup on unmount
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div ref={mapRef} style={{ height: '100%', width: '100%', borderRadius: 'inherit' }} />
  );
}
