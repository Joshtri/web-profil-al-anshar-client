import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaToilet, FaParking, FaFan, FaPray, FaHome } from 'react-icons/fa';
import { GiWashingMachine, GiClothes } from 'react-icons/gi';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import toiletImg from '../../assets/fasilitasImg/toilet.webp';
import parkirImg from '../../assets/fasilitasImg/tempatParkir.webp';
import lemariSendalImg from '../../assets/fasilitasImg/lemariSepatu.webp';
import mukenahImg from '../../assets/fasilitasImg/mukenah.webp';
import acImg from '../../assets/fasilitasImg/ac.webp';
import mandiJenazahImg from '../../assets/fasilitasImg/mandijenazah.webp';
import wudhuImg from '../../assets/fasilitasImg/mandiwudhu.webp';
import sdImg from '../../assets/fasilitasImg/SD.webp';

const FASILITAS = [
  {
    kategori: 'Fasilitas Utama',
    items: [
      { name: 'Tempat Wudhu', image: wudhuImg, icon: <GiWashingMachine />, desc: 'Fasilitas tempat wudhu yang bersih dan nyaman untuk jamaah.' },
      { name: 'Toilet', image: toiletImg, icon: <FaToilet />, desc: 'Toilet yang terawat untuk kebutuhan jamaah.' },
      { name: 'Rumah Marbot', image: 'https://via.placeholder.com/400x300?text=Rumah+Marbot', icon: <FaHome />, desc: 'Tempat tinggal bagi pengurus masjid.' },
      { name: 'Gudang Masjid', image: 'https://via.placeholder.com/400x300?text=Gudang+Masjid', icon: <FaHome />, desc: 'Gudang penyimpanan perlengkapan masjid.' },
      { name: 'Pemandian Jenazah', image: mandiJenazahImg, icon: <GiClothes />, desc: 'Fasilitas pemandian jenazah yang sesuai syariat.' },
    ],
  },
  {
    kategori: 'Fasilitas Pendidikan',
    items: [
      { name: 'SD-Yayasan Al Anshar An-Nur', image: sdImg, icon: <FaPray />, desc: 'Sekolah dasar dengan pendidikan berbasis nilai-nilai Islam.' },
    ],
  },
  {
    kategori: 'Perlengkapan Ibadah & Masjid',
    items: [
      { name: 'Tempat Sandal', image: lemariSendalImg, icon: <FaFan />, desc: 'Lemari untuk menyimpan sandal jamaah.' },
      { name: 'Lemari Mukenah', image: mukenahImg, icon: <GiClothes />, desc: 'Lemari untuk menyimpan mukenah dengan rapi.' },
      { name: 'AC', image: acImg, icon: <FaFan />, desc: 'Pendingin udara untuk kenyamanan jamaah.' },
    ],
  },
  {
    kategori: 'Fasilitas Pendukung',
    items: [
      { name: 'Area Parkir', image: parkirImg, icon: <FaParking />, desc: 'Area parkir luas dan aman untuk kendaraan jamaah.' },
    ],
  },
];

function FasilitasSection() {
  const [expanded, setExpanded] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Fasilitas Masjid Al-Anshar</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-3">
          Berikut adalah fasilitas yang tersedia di Masjid Al-Anshar untuk mendukung kegiatan ibadah dan kenyamanan jamaah.
        </p>
      </div>

      {FASILITAS.map((kategori, index) => (
        <div key={index} className="mb-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md overflow-hidden">
          <div
            onClick={() => toggleExpand(index)}
            className="bg-blue-500 text-white cursor-pointer p-4 flex justify-between items-center"
          >
            <h2 className="text-xl font-bold">{kategori.kategori}</h2>
            <motion.span
              className="transform"
              animate={{ rotate: expanded === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
            </motion.span>
          </div>

          {expanded === index && (
            <motion.div
              className="p-4 bg-gray-50 dark:bg-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array(6)
                    .fill(0)
                    .map((_, idx) => (
                      <div key={idx} className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4">
                        <Skeleton height={150} />
                        <Skeleton height={20} className="mt-4" />
                      </div>
                    ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {kategori.items.map((fasilitas, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-md overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={fasilitas.image}
                        alt={fasilitas.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4 text-center">
                        <div className="flex justify-center items-center mb-3 text-blue-500 text-2xl">
                          {fasilitas.icon}
                        </div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">{fasilitas.name}</h2>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{fasilitas.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FasilitasSection;
