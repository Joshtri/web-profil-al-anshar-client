import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function KiblatDirectionLeaflet() {
  const latitude = -10.19412205426673; // Latitude lokasi pengguna
  const longitude = 123.55233222413244; // Longitude lokasi pengguna
  const mapRef = useRef(null); // Reference untuk map container
  const [qiblaDirection, setQiblaDirection] = useState(null);
  const [error, setError] = useState(null);

  // Fetch arah kiblat dari API
  useEffect(() => {
    const fetchQiblaDirection = async () => {
      try {
        const response = await axios.get(
          `https://api.aladhan.com/v1/qibla/${latitude}/${longitude}`
        );
        setQiblaDirection(response.data.data.direction); // Mendapatkan arah kiblat dalam derajat
      } catch (err) {
        console.error("Error fetching Qibla direction:", err);
        setError("Tidak dapat memuat data arah kiblat.");
      }
    };

    fetchQiblaDirection();
  }, []);

  // Initialize Leaflet map
  useEffect(() => {
    if (qiblaDirection !== null) {
      // Create map
      const map = L.map(mapRef.current).setView([latitude, longitude], 5);

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add marker for user's location
      const userMarker = L.marker([latitude, longitude]).addTo(map);
      userMarker.bindPopup("Lokasi Anda").openPopup();

      // Add marker for Ka'bah
      const kaabaLat = 21.4225; // Latitude Ka'bah
      const kaabaLng = 39.8262; // Longitude Ka'bah
      const kaabaMarker = L.marker([kaabaLat, kaabaLng], {
        icon: L.icon({
          iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        }),
      }).addTo(map);
      kaabaMarker.bindPopup("Ka'bah, Mekah");

      // Add a line connecting user's location to Ka'bah
      const line = L.polyline(
        [
          [latitude, longitude],
          [kaabaLat, kaabaLng],
        ],
        { color: "red", weight: 2 }
      ).addTo(map);

      // Fit the map to show both markers
      map.fitBounds(line.getBounds());
    }
  }, [qiblaDirection]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!qiblaDirection) {
    return <div className="text-center">Memuat arah kiblat...</div>;
  }

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">Peta Arah Kiblat</h2>
      <p className="text-lg mb-6 text-gray-700">
        Arah kiblat dari lokasi Anda adalah{" "}
        <strong>{qiblaDirection.toFixed(2)}°</strong>. Garis merah pada peta
        menunjukkan arah menuju Ka'bah.
      </p>
      {/* Map Container */}
      <div
        ref={mapRef}
        className="w-full h-96 rounded-lg shadow-lg border border-gray-300"
        style={{ maxWidth: "800px" }}
      ></div>
      <p className="text-center mt-4 text-gray-600">
        Peta ini menunjukkan arah kiblat dari lokasi Anda ke Ka'bah di Mekah.
      </p>
    </div>
  );
}

export default KiblatDirectionLeaflet;
