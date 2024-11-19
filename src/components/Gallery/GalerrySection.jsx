import  { useState } from 'react';
import Layout from '../../pages/Layout';

const dummyGallery = [
  {
    id: 1,
    caption: 'Kegiatan Bakti Sosial',
    tanggal_caption: '2024-11-20',
    deskripsi_caption: 'Kegiatan ini bertujuan membantu masyarakat sekitar.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    caption: 'Kajian Islam',
    tanggal_caption: '2024-11-19',
    deskripsi_caption: 'Kajian rutin setiap malam Jumat.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    caption: 'Pengajian Anak-Anak',
    tanggal_caption: '2024-11-18',
    deskripsi_caption: 'Pengajian untuk anak-anak di lingkungan sekitar masjid.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    caption: 'Gotong Royong Masjid',
    tanggal_caption: '2024-11-15',
    deskripsi_caption: 'Membersihkan dan merapikan lingkungan masjid.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    caption: 'Buka Puasa Bersama',
    tanggal_caption: '2024-11-10',
    deskripsi_caption: 'Buka puasa bersama dengan masyarakat sekitar.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    caption: 'Pengajian Remaja',
    tanggal_caption: '2024-11-05',
    deskripsi_caption: 'Pengajian untuk para remaja masjid.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    caption: 'Tabligh Akbar',
    tanggal_caption: '2024-10-30',
    deskripsi_caption: 'Acara tabligh akbar dengan pembicara tamu.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    caption: 'Pelatihan Imam Muda',
    tanggal_caption: '2024-10-25',
    deskripsi_caption: 'Pelatihan khusus untuk imam muda.',
    image: 'https://via.placeholder.com/150',
  },
];

function GalerrySection() {
  const [visibleItems, setVisibleItems] = useState(6); // Default 6 items

  const handleShowMore = () => {
    setVisibleItems((prevVisible) => prevVisible + 6); // Tambahkan 6 item lagi
  };

  return (
    <Layout>
      <section className='relative'  id="gallery">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 relative">
        {/* Bungkus seluruh bagian galeri di dalam card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Galeri Kegiatan</h1>
            <p className="text-gray-600 mt-2">
              Dokumentasi kegiatan yang telah dilakukan oleh Masjid Al-Anshar
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyGallery.slice(0, visibleItems).map((item) => (
              <div
                key={item.id}
                className="max-w-sm bg-gray-50 border border-gray-200 rounded-lg shadow-md overflow-hidden"
              >
                {/* Image */}
                <img
                  className="w-full h-48 object-cover"
                  src={item.image}
                  alt={item.caption}
                />

                {/* Card Body */}
                <div className="p-4">
                  <h5 className="text-lg font-bold text-gray-900">{item.caption}</h5>
                  <p className="text-sm text-gray-500">
                    <strong>Tanggal:</strong> {item.tanggal_caption}
                  </p>
                  <p className="text-gray-700 mt-2">{item.deskripsi_caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {visibleItems < dummyGallery.length && (
            <div className="text-center mt-8">
              <button
                onClick={handleShowMore}
                className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Tampilkan Lebih Banyak
              </button>
            </div>
          )}
        </div>
      </div>
      </section>
    </Layout>
  );
}

export default GalerrySection;