import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaCalendarAlt } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';

const DUMMY_ANNOUNCEMENTS = [
  {
    id: 1,
    title: 'Jadwal Sholat Jumat',
    date: '24 November 2024',
    time: '12:30 WITA',
    description: 'Sholat Jumat akan dimulai pada pukul 12:30 WITA, diikuti dengan khutbah oleh Ustadz Ahmad Zaki.',
  },
  {
    id: 2,
    title: 'Kajian Akbar',
    date: '25 November 2024',
    time: '18:00 WITA',
    description: 'Kajian akbar dengan tema "Meneladani Rasulullah SAW dalam Kehidupan Sehari-Hari" oleh Ustadz Abdul Rahman.',
  },
  {
    id: 3,
    title: 'Gotong Royong Masjid',
    date: '26 November 2024',
    time: '08:00 WITA',
    description: 'Mari bersama membersihkan dan merapikan masjid. Kami mengundang semua jamaah untuk ikut berpartisipasi.',
  },
];

function PengumumanSection() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Pengumuman</h1>
        <p className="text-lg text-gray-600 mt-3">
          Temukan informasi terbaru tentang kegiatan dan jadwal di Masjid Al-Anshar.
        </p>
      </div>

      {/* Announcement Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DUMMY_ANNOUNCEMENTS.map((announcement) => (
          <motion.div
            key={announcement.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Card Header */}
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between cursor-pointer" onClick={() => toggleExpand(announcement.id)}>
              <h2 className="text-lg font-bold">{announcement.title}</h2>
              <FaBullhorn className="text-2xl" />
            </div>

            {/* Card Body */}
            <motion.div
              className={`p-4 transition-all duration-500 ${expanded === announcement.id ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, height: 0 }}
              animate={expanded === announcement.id ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <FaCalendarAlt className="mr-2 text-blue-500" /> {announcement.date}
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <AiOutlineClockCircle className="mr-2 text-blue-500" /> {announcement.time}
              </p>
              <p className="text-gray-700 dark:text-gray-400">{announcement.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PengumumanSection;
