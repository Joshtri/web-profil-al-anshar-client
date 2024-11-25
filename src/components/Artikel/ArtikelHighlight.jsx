import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

function ArtikelHighlight() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch articles from API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/v1/article`
        );
        console.log("Articles fetched:", response.data); // Debugging
        if (response.data && Array.isArray(response.data.data)) {
          setPosts(response.data.data);
        } else {
          console.error("Invalid data format");
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Function to truncate HTML content to a specific word count
  const truncateHTMLContent = (htmlContent, wordLimit) => {
    if (!htmlContent || typeof htmlContent !== "string") {
      return ""; // Return empty string if content is invalid
    }
    const textContent = htmlContent.replace(/<\/?[^>]+(>|$)/g, "");
    const words = textContent.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : textContent;
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Error fetching articles: {error}
      </div>
    );
  }

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Ikhtisar Artikel</h1>
          <p className="text-gray-600 mt-2">
            Temukan artikel menarik yang telah kami publikasikan.
          </p>
        </div>

        {/* Article List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Title */}
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {post.judul}
              </h2>

              {/* Content (truncated HTML) */}
              <p
                className="text-gray-600 mb-4"
                dangerouslySetInnerHTML={{
                  __html: truncateHTMLContent(post.konten, 50),
                }}
              ></p>

              {/* Read More Button */}
              <button
                onClick={() => navigate(`/article/${post.id}`)}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaBookOpen className="mr-2" />
                Baca Selengkapnya
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArtikelHighlight;
