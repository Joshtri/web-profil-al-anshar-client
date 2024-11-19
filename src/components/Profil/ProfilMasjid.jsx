import React from 'react';
import Layout from '../../pages/Layout';

function ProfilMasjid() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Profil Masjid Al-Anshar</h1>
          <p className="text-lg text-gray-600 mt-3">
            Menjadi pusat keislaman, pendidikan, dan kegiatan sosial bagi umat Islam di Kota Kupang.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Deskripsi Profil */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tentang Masjid Al-Anshar</h2>
            <p className="text-gray-700 leading-relaxed">
              Masjid Al-Anshar merupakan salah satu masjid terbesar dan tertua di Kota Kupang.
              Berdiri pada tahun 1980, masjid ini menjadi tempat berkumpulnya umat Islam untuk
              beribadah, berdakwah, dan menjalankan berbagai kegiatan sosial. Masjid Al-Anshar
              memiliki arsitektur yang memadukan nilai-nilai keislaman dengan kearifan lokal,
              menciptakan suasana yang damai dan khusyuk bagi para jamaah.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Dengan fasilitas yang lengkap, seperti ruang shalat yang luas, perpustakaan Islam,
              ruang belajar, dan aula serbaguna, masjid ini menjadi pusat kegiatan keagamaan dan
              edukasi yang melayani seluruh lapisan masyarakat.
            </p>
          </div>

          {/* Gambar Masjid */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/500"
              alt="Masjid Al-Anshar"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Visi dan Misi */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Visi dan Misi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visi</h3>
              <p className="text-gray-700">
                Menjadi pusat keislaman, pendidikan, dan kegiatan sosial yang berkontribusi
                pada pembangunan masyarakat yang bertakwa, berilmu, dan beramal.
              </p>
            </div>
            {/* Misi */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Misi</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Menyelenggarakan kegiatan ibadah dengan suasana yang khusyuk dan nyaman.</li>
                <li>Mengadakan pendidikan Al-Qur'an dan keislaman untuk anak-anak hingga dewasa.</li>
                <li>Melakukan kegiatan sosial untuk membantu masyarakat yang membutuhkan.</li>
                <li>Menjadi tempat silaturahmi dan dakwah bagi seluruh umat Islam.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProfilMasjid;
