import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import toiletImg from '../../assets/fasilitasImg/toilet.webp'
import parkirImg from '../../assets/fasilitasImg/tempatParkir.webp'
import lemariSendalImg from '../../assets/fasilitasImg/lemariSepatu.webp';

import mukenahImg from '../../assets/fasilitasImg/mukenah.webp';
import acImg from '../../assets/fasilitasImg/ac.webp';
import mandiJenazahImg from '../../assets/fasilitasImg/mandijenazah.webp';
import wudhuImg from '../../assets/fasilitasImg/mandiwudhu.webp';
import sdImg from '../../assets/fasilitasImg/SD.webp'
const FASILITAS = [
  {
    kategori: 'Fasilitas Utama',
    items: [

      { name: 'Tempat Wudhu', image:wudhuImg  },
      { name: 'Toilet', image: toiletImg },
      //tunggu ortng foto
      { name: 'Rumah Marbot', image: 'https://via.placeholder.com/400x300?text=Rumah+Marbot' },
         //tunggu ortng foto
      { name: 'Gudang Masjid', image: 'https://via.placeholder.com/400x300?text=Gudang+Masjid' },
      { name: 'Pemandian Jenazah', image: mandiJenazahImg },
    ],
  },

  {
    kategori: 'Fasilitas Pendidikan',
    items: [
      { name: 'SD-Yayasan Al Anshar An-Nur', image: sdImg },
    ],
  },

  {
    kategori: 'Perlengkapan Ibadah & Masjid',
    items: [
        //tunggu ortng foto
      { name: 'Informasi Al-Qur\'an', image: 'https://via.placeholder.com/400x300?text=Informasi+Al-Quran' },
         //tunggu ortng foto
      { name: 'Kotak Amal', image: 'https://via.placeholder.com/400x300?text=Kotak+Amal' },
      { name: 'Tempat Sandal', image: lemariSendalImg },
      { name: 'Lemari Mukenah', image: mukenahImg },
      { name: 'AC', image: acImg },
    ],
  },
  {
    kategori: 'Fasilitas Pendukung',
    items: [
      { name: 'Area Parkir', image: parkirImg },
    ],
  },
];

function FasilitasSection() {
  const [expanded, setExpanded] = useState(null); // State untuk dropdown
  const [loading, setLoading] = useState(true); // State untuk skeleton loading

  // Simulasikan delay loading (opsional)
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulasi loading 2 detik
    return () => clearTimeout(timer);
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Fasilitas Masjid Al-Anshar</h1>
        <p className="text-lg text-gray-600 mt-3">
          Berikut adalah fasilitas yang tersedia di Masjid Al-Anshar untuk mendukung kegiatan ibadah dan kenyamanan jamaah.
        </p>
      </div>

      {/* Per Kategori */}
      {FASILITAS.map((kategori, index) => (
        <div key={index} className="mb-6 border border-gray-300 rounded-lg shadow-md overflow-hidden">
          {/* Header Kategori */}
          <div
            onClick={() => toggleExpand(index)}
            className="bg-blue-500 text-white cursor-pointer p-4 flex justify-between items-center"
          >
            <h2 className="text-xl font-bold">{kategori.kategori}</h2>
            <span className={`transform ${expanded === index ? 'rotate-180' : 'rotate-0'}`}>
              ▼
            </span>
          </div>

          {/* Konten Fasilitas */}
          {expanded === index && (
            <div className="p-4 bg-white">
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array(6)
                    .fill(0)
                    .map((_, idx) => (
                      <div key={idx} className="bg-gray-200 rounded-lg p-4">
                        <Skeleton height={150} />
                        <Skeleton height={20} className="mt-4" />
                      </div>
                    ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {kategori.items.map((fasilitas, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
                    >
                      {/* Gambar Fasilitas */}
                      <img
                        src={fasilitas.image}
                        alt={fasilitas.name}
                        className="w-full h-48 object-cover"
                      />
                      {/* Deskripsi Fasilitas */}
                      <div className="p-4 text-center">
                        <h2 className="text-lg font-bold text-gray-900">{fasilitas.name}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FasilitasSection;
