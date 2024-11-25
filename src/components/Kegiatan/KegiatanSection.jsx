import React from 'react';
import { FaPrayingHands, FaBook, FaHandsHelping, FaHeart, FaChartLine } from 'react-icons/fa';

function KegiatanSection() {
  const kegiatan = [
    { id: 1, nama: 'Khultum Subuh', icon: <FaPrayingHands /> },
    { id: 2, nama: 'Kajian Fiqih', icon: <FaBook /> },
    { id: 3, nama: 'Belajar Mengaji', icon: <FaBook /> },
    { id: 4, nama: 'Bantuan Parah Jemaah melalui Forum Komunikasi Dhuafa', icon: <FaHandsHelping /> },
    { id: 5, nama: 'Bantuan Kedukaan', icon: <FaHeart /> },
    { id: 6, nama: 'Bantuan Modal Usaha', icon: <FaChartLine /> },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Kegiatan Masjid</h1>
          <p className="text-gray-600 mt-2">
            Berikut adalah kegiatan yang dilakukan di Masjid Al-Anshar untuk meningkatkan kesejahteraan umat.
          </p>
        </div>

        {/* List of Activities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kegiatan.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center text-blue-500 text-4xl mb-4">
                {item.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 text-center">{item.nama}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KegiatanSection;