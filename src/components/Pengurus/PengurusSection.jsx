import React from 'react';
import { motion } from 'framer-motion';

function PengurusSection() {
  const pengurusData = [
    {
      title: 'Ketua',
      name: 'H. Rudy Priyono, SKM, M.Kes',
    },
    {
      title: 'Seksi Imarah',
      name: 'Usman Koli, S.Pd.I, M.Pd',
      anggota: ['Abdul Halim', 'Ibu Sudirman'],
    },
    {
      title: 'Seksi Idarah',
      name: 'Ismail J. Samau',
      anggota: ['Aris Wangge', 'Mahmud Nolwala'],
    },
    {
      title: 'Seksi Rayah',
      name: 'Iwan Balawa',
      anggota: ['Anwar Pua Mbey', 'Ismail Olung (marbot)'],
    },
    {
      title: 'Bendahara',
      name: 'Zulrahman Irat',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10" id="pengurus">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Susunan Pengurus</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          Berikut adalah susunan pengurus Masjid Al-Anshar yang bertanggung jawab atas berbagai kegiatan
          dan operasional masjid.
        </p>
      </motion.div>

      {/* Pengurus Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pengurusData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">{item.title}</h2>
            <p className="text-gray-800 dark:text-gray-300 mt-2 font-medium">{item.name}</p>
            {item.anggota && (
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Anggota:</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                  {item.anggota.map((anggota, i) => (
                    <li key={i}>{anggota}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PengurusSection;
