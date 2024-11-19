import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// import img1 from '../../assets/homeImg/black.jpg';
// import img2 from '../../assets/homeImg/black.jpg';
// import img3 from '../../assets/homeImg/black.jpg';
// import img4 from '../../assets/homeImg/black.jpg';

import childImg from '../../assets/homeImg/childImg.webp';
import frontImg from '../../assets/homeImg/frontImg.webp';
import outsideImg from '../../assets/homeImg/outsideImg.webp';
import insideImg from '../../assets/homeImg/insideImg.webp';
// Array of background images
const backgroundImages = [
  `url(${frontImg})`,
  `url(${insideImg})`,
  `url(${outsideImg})`,
  `url(${childImg})`,
];

function HomeSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section
      id="home"
      className="relative py-16 text-white animate-gradient-x"
      style={{
        backgroundImage: backgroundImages[currentImageIndex], // Dynamically set background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out", // Smooth fade effect
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto justify-center px-4 sm:px-6 lg:px-8 pb-16 pt-12">
        {/* Introduction */}
        <div className="text-center mb-10 mt-3">
          <h1 className="text-3xl font-bold mb-4">Masjid Al-Anshar</h1>
          <p className="text-xl p-3">
            Selamat datang di website resmi Masjid Al-Anshar. Kami hadir untuk
            memberikan informasi tentang kegiatan ibadah, program sosial, jadwal sholat, 
            serta kegiatan keagamaan lainnya. Masjid Al-Anshar berkomitmen untuk menjadi pusat
            keislaman yang bermanfaat bagi masyarakat, menciptakan suasana religius, dan
            mempererat ukhuwah Islamiyah.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-8">
          <Link
            to="/jadwal-kegiatan"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Lihat Galeri
          </Link>
          <Link
            to="/informasi-sholat"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          >
            Pengumuman
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
