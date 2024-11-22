import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import DOMPurify from 'dompurify';

function ReadArticle() {
  const { id } = useParams(); // Mengambil ID dari URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch article detail from API
  useEffect(() => {
    const fetchArticleDetail = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/article/${id}`);
        console.log('Article detail:', response.data); // Debugging
        setArticle(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching article detail:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticleDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Memuat artikel...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">Terjadi kesalahan: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      {/* Tombol Kembali */}
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-300 mb-8 transition"
      >
        <FaArrowLeft />
        <span>Kembali</span>
      </button>

      {article && (
        <div className="bg-white shadow-lg rounded-lg p-8">
          {/* Gambar Artikel */}
          <div className="flex justify-center mb-6">
            <img
              src={article.coverImageUrl || 'https://placehold.co/800x400'}
              alt={article.judul}
              className="w-full max-w-md h-auto rounded-lg shadow-md object-contain"
            />
          </div>

          {/* Judul Artikel */}
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">{article.judul}</h1>

          {/* Informasi Artikel */}
          <p className="text-center text-gray-500 text-sm mb-6">
            {new Date(article.createdAt).toLocaleDateString('id-ID')} |{' '}
            {article.penulisId
              ? `By ${article.penulisId.firstName} ${article.penulisId.lastName}`
              : 'Penulis tidak diketahui'}
          </p>

          {/* Garis Pemisah */}
          <hr className="border-gray-300 mb-6" />

          {/* Konten Artikel */}
          <div
            className="text-gray-700 text-lg leading-relaxed text-justify"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.konten || '<p>Konten tidak tersedia.</p>') }}
          ></div>

          {/* Tombol Navigasi atau Call to Action */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate(-1)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-500 transition"
            >
              Kembali ke Artikel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReadArticle;
