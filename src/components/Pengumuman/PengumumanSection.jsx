import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaBullhorn, FaCalendarAlt } from 'react-icons/fa';
import { AiOutlineClockCircle, AiOutlineFilePdf } from 'react-icons/ai';

function PengumumanSection() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch announcements from API
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/pengumuman`);
        console.log('Response data:', response.data); // Debugging data
        setAnnouncements(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching announcements:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">Error fetching announcements: {error}</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10" id="pengumuman">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Pengumuman</h1>
        <p className="text-lg text-gray-600 mt-3">
          Temukan informasi terbaru tentang kegiatan dan jadwal di Masjid Al-Anshar.
        </p>
      </div>

      {/* Announcement Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {announcements.map((announcement) => (
          <motion.div
            key={announcement.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Card Header */}
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">{announcement.judul_pengumuman}</h2>
              <FaBullhorn className="text-2xl" />
            </div>

            {/* Card Body */}
            <div className="p-4">
              <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <FaCalendarAlt className="mr-2 text-blue-500" /> {announcement.tanggal_pengumuman}
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <AiOutlineClockCircle className="mr-2 text-blue-500" /> 08:00 WITA
              </p>
              <p className="text-gray-700 dark:text-gray-400">{announcement.deskripsi_pengumuman}</p>

              {/* PDF Button */}
              {announcement.berkas_pengumuman_pdf && (
                <div className="mt-4 text-center">
                  <a
                    href={announcement.berkas_pengumuman_pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <AiOutlineFilePdf className="mr-2 text-lg" />
                    Lihat Berkas PDF
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PengumumanSection;
