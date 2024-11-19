import { useState } from 'react';
import { FaShareAlt, FaBookOpen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Data Dummy Artikel
const DUMMY_ARTICLES = [
  {
    _id: '1',
    judul: 'Pentingnya Menjaga Kesehatan Mental',
    coverImageUrl: 'https://placehold.co/400x300',
    createdAt: '2024-11-01',
    penulisId: { firstName: 'Ahmad', lastName: 'Fauzi' },
  },
  {
    _id: '2',
    judul: 'Pengaruh Teknologi dalam Pendidikan',
    coverImageUrl: 'https://placehold.co/400x300',
    createdAt: '2024-11-05',
    penulisId: { firstName: 'Siti', lastName: 'Aisyah' },
  },
  {
    _id: '3',
    judul: 'Tips Mengelola Waktu untuk Ibu Rumah Tangga',
    coverImageUrl: 'https://placehold.co/400x300',
    createdAt: '2024-11-10',
    penulisId: { firstName: 'Rahma', lastName: 'Putri' },
  },
];

function ArtikelSection() {
  const [posts] = useState(DUMMY_ARTICLES); // Gunakan data dummy
  const navigate = useNavigate();

  const handleShare = (title) => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(`${title} - ${shareUrl}`);
    alert('Link artikel berhasil disalin!');
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-100">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 mt-3">ARTIKEL</h1>

      {/* Grid Artikel */}
      <div className="grid grid-cols-1 p-14 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-10 pt-4">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={post.coverImageUrl || 'https://placehold.co/400x300'}
                alt={post.judul}
                className="w-full h-32 sm:h-40 object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold mt-3">{post.judul}</h2>

            {/* Date and Comment Count in the Same Line */}
            <p className="text-gray-600 mt-2 text-sm flex items-center">
              {new Date(post.createdAt).toLocaleDateString('id-ID')}
              <span className="mx-2 text-red-500">•</span> {/* Red bullet separator */}
              0 Komentar
            </p>

            {/* Author Information */}
            <p className="text-gray-500 text-sm mt-1">
              {post.penulisId ? `By ${post.penulisId.firstName} ${post.penulisId.lastName}` : 'Penulis tidak diketahui'}
            </p>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-4">
              <button
                className="bg-blue-700 text-white px-3 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-500 transition"
                onClick={() => navigate(`/article/${post._id}`)}
              >
                <FaBookOpen />
                <span>Baca</span>
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-3 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-400 transition"
                onClick={() => handleShare(post.judul)}
              >
                <FaShareAlt />
                <span>Bagikan</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtikelSection;
