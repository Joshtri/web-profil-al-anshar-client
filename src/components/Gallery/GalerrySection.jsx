import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaImage } from 'react-icons/fa';
import moment from 'moment';

function SkeletonCard() {
  return (
    <div className="max-w-sm bg-gray-200 border border-gray-300 rounded-lg shadow-md animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
}

function GalerrySection() {
  const [galleryData, setGalleryData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleShowMore = () => {
    setVisibleItems((prevVisible) => prevVisible + 6);
  };

  // Fetch gallery data from backend API
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/galeri`);
        console.log('Response data:', response.data); // Debugging data
        if (response.data && response.data.data) {
          setGalleryData(response.data.data); // Pastikan data valid sebelum diatur
        } else {
          console.error('Invalid data format:', response.data);
          setGalleryData([]); // Atur ke array kosong jika data tidak valid
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching gallery data:', err);
        setError(err.message);
        setLoading(false);
      }
    };
  
    fetchGalleryData();
  }, []);
  

  // Intersection Observer to detect when GallerySection is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const section = document.getElementById('gallery');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  if (loading) {
    return (
      <section className="relative" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">Error fetching gallery data.</p>
      </div>
    );
  }

  return (
    <section className="relative" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 relative">
        {/* Gallery Section Wrapper */}
        <motion.div
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Galeri Kegiatan</h1>
            <p className="text-gray-600 mt-2">
              <FaImage className="inline-block text-blue-600 mr-2" /> Dokumentasi kegiatan yang telah dilakukan oleh Masjid Al-Anshar
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(galleryData) && galleryData.slice(0, visibleItems).map((item, index) => (             
              <motion.div
                key={item.id || index} // Gunakan item.id jika tersedia, atau fallback ke index
                className="max-w-sm bg-gray-50 border border-gray-200 rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 * index }}
              >
                {/* Image */}
                <img
                  className="w-full h-48 object-cover"
                  src={item.imageGaleri}
                  alt={item.caption}
                />

                {/* Card Body */}
                <div className="p-4">
                  <h5 className="text-lg font-bold text-gray-900">{item.caption}</h5>
                  <p className="text-sm text-gray-500 flex items-center">
                    <FaCalendarAlt className="mr-2 text-gray-700" />
                    {moment(item.tanggal_caption).locale('id').format('DD MMMM YYYY')}
                  </p>
                  <p className="text-gray-700 mt-2">{item.deskripsi_caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {visibleItems < galleryData.length && (
            <div className="text-center mt-8">
              <button
                onClick={handleShowMore}
                className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center"
              >
                <FaImage className="mr-2" /> Tampilkan Lebih Banyak
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default GalerrySection;
