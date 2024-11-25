import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function KiblatDirectionCombined() {
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
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
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
    <div className="flex flex-col items-center p-6 space-y-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">Arah Kiblat</h2>
      <p className="text-lg mb-6 text-gray-700 text-center">
        Arah kiblat dari lokasi Anda adalah{" "}
        <strong>{qiblaDirection.toFixed(2)}°</strong>. Visualisasi di bawah ini
        menunjukkan arah kiblat melalui peta dan kompas interaktif.
      </p>

      {/* Compass Container */}
      <div className="relative w-72 h-72 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full border-4 border-blue-500 shadow-lg">
        {/* North Indicator */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-lg font-bold text-red-500">
          N
        </div>
        {/* South Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-lg font-bold text-gray-500">
          S
        </div>
        {/* East Indicator */}
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2 text-lg font-bold text-gray-500">
          E
        </div>
        {/* West Indicator */}
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-lg font-bold text-gray-500">
          W
        </div>

        {/* Decorative Inner Ring */}
        <div className="absolute inset-6 border-4 border-dashed border-blue-300 rounded-full"></div>

        {/* Qibla Arrow */}
        <div
          className="absolute w-8 h-40 bg-green-500 rounded-full transform origin-bottom"
          style={{
            transform: `rotate(${qiblaDirection}deg)`,
          }}
        ></div>

        {/* Arrow Head */}
        <div
          className="absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rotate-45 origin-center"
          style={{
            transform: `rotate(${qiblaDirection}deg) translateY(-50%)`,
          }}
        ></div>
      </div>

      {/* Map Container */}
      <div
        ref={mapRef}
        className="w-full h-96 rounded-lg shadow-lg border border-gray-300"
        style={{ maxWidth: "800px" }}
      ></div>
      <p className="text-center mt-4 text-gray-600">
        Peta ini menunjukkan arah kiblat dari lokasi Anda ke Ka'bah di Mekah.
        Garis merah menghubungkan lokasi Anda dengan Ka'bah.
      </p>

      {/* Descriptive Information */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-lg max-w-lg">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">
          Informasi Kiblat
        </h3>
        <p className="text-gray-700">
          Arah kiblat dihitung berdasarkan lokasi Anda:{" "}
          <strong>Latitude: {latitude}</strong> dan{" "}
          <strong>Longitude: {longitude}</strong>. Arah ini menunjuk langsung ke
          Ka'bah di Mekah dengan sudut{" "}
          <strong>{qiblaDirection.toFixed(2)}°</strong> dari utara geografis.
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Ka'bah</strong> adalah arah yang harus diikuti oleh umat Islam
          saat melaksanakan sholat. Pastikan perangkat Anda tidak terhalang oleh
          objek logam atau magnet yang dapat memengaruhi kompas.
        </p>
      </div>
    </div>
  );
}

export default KiblatDirectionCombined;
