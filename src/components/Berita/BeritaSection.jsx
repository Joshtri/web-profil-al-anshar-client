import React, { useEffect, useState } from 'react';

// Daftar sumber RSS berita Indonesia
const RSS_SOURCES = [
//   { label: 'Kompas - Nasional', url: 'https://rss.kompas.com/nasional' },
//   { label: 'Detik - Berita Utama', url: 'https://rss.detik.com/index.php/detikcom' },
  { label: 'Republika - Nasional', url: 'https://www.republika.co.id/rss/nasional' },
  { label: 'Antara News - Terkini', url: 'https://www.antaranews.com/rss/terkini' },
  { label: 'CNN Indonesia - Berita Pilihan', url: 'https://www.cnnindonesia.com/nasional/rss' },
];

function RSSSection() {
  const [selectedSource, setSelectedSource] = useState(RSS_SOURCES[0].url); // Default RSS feed
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRSS = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(selectedSource)}`
        );
        const data = await response.json();

        // Ambil gambar dari properti lain jika thumbnail tidak tersedia
        const updatedArticles = data.items.map((article) => {
          return {
            ...article,
            image: article.thumbnail || article.enclosure?.link || null, // Gunakan enclosure jika thumbnail tidak ada
          };
        });

        setArticles(updatedArticles.slice(0, 6)); // Ambil 6 \rita pertama
        setLoading(false);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
        setLoading(false);
      }
    };

    fetchRSS();
  }, [selectedSource]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Berita Terkini</h1>
        <p className="text-lg text-gray-600 mt-3">
          Pilih sumber berita untuk melihat informasi terbaru dari media Indonesia.
        </p>
      </div>

      {/* Dropdown untuk memilih sumber berita */}
      <div className="text-center mb-6">
        <select
          className="border border-gray-300 rounded-md shadow-sm py-2 px-4 text-gray-700 focus:ring-blue-500 focus:border-blue-500"
          value={selectedSource}
          onChange={(e) => setSelectedSource(e.target.value)}
        >
          {RSS_SOURCES.map((source) => (
            <option key={source.url} value={source.url}>
              {source.label}
            </option>
          ))}
        </select>
      </div>

      {/* Konten Berita */}
      {loading ? (
        <div className="text-center text-gray-600">Memuat berita...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            >
              {/* Gambar Artikel */}
              {article.image ? (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}

              {/* Isi Artikel */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900">
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(article.pubDate).toDateString()}
                </p>
                <p className="text-gray-700 mt-2">{article.description?.slice(0, 100)}...</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RSSSection;
