import React from 'react';
import Layout from '../../pages/Layout';
// import MisiVisi from '../../components/MisiVisi'; // Import MisiVisi

function Sejarah() {
  return (
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Sejarah Masjid Al-Anshar</h1>
          <p className="text-lg text-gray-600 mt-3">
            Menggali kembali perjalanan Masjid Al-Anshar yang menjadi pusat keislaman di Kota Kupang.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Deskripsi Sejarah */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Awal Berdirinya Masjid Al-Anshar
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Masjid Al-Anshar didirikan pada tahun 1980 di Kota Kupang sebagai
              wujud dari semangat kebersamaan umat Islam. Berawal dari sebuah
              musholla kecil, masjid ini terus berkembang berkat dukungan dari
              masyarakat sekitar dan para dermawan. Dengan visi menjadi pusat
              dakwah dan pendidikan, Masjid Al-Anshar telah menjadi tempat
              yang mempersatukan umat Islam dalam kegiatan ibadah, sosial, dan
              pembelajaran.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Renovasi besar dilakukan pada tahun 2005 untuk memperluas kapasitas masjid
              demi menampung jamaah yang semakin meningkat. Hingga saat ini,
              Masjid Al-Anshar menjadi simbol keislaman yang membanggakan bagi
              masyarakat Kota Kupang.
            </p>
          </div>

          {/* Gambar Ilustrasi */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/500"
              alt="Masjid Al-Anshar"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Misi dan Visi */}
        {/* <MisiVisi /> */}
      </div>
    
  );
}

export default Sejarah;
