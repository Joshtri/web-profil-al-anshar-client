import React from 'react';

function VisiMisi() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Misi dan Tujuan Masjid Al-Anshar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Pusat Keislaman</h3>
          <p className="text-gray-600">
            Menjadi tempat ibadah dan kegiatan keislaman yang mempererat ukhuwah Islamiyah.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Pendidikan Islam</h3>
          <p className="text-gray-600">
            Mengadakan pengajian, pendidikan Al-Qur'an, dan pelatihan keislaman bagi masyarakat.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Kegiatan Sosial</h3>
          <p className="text-gray-600">
            Berperan aktif dalam kegiatan sosial untuk membantu masyarakat yang membutuhkan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VisiMisi;
