import { useState } from 'react';
import { Navbar } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Navbar toggle state
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const navigate = useNavigate(); // Navigation hook
  const location = useLocation(); // Location hook

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown)); // Open or close dropdowns
  };

  const handleScrollToSection = (id) => {
    if (location.pathname !== '/') {
      // If user is not on HomePage, navigate to HomePage with state
      navigate('/', { state: { scrollTo: id } });
    } else {
      // If user is already on HomePage, scroll directly
      const targetSection = document.getElementById(id);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <header className="fixed w-full top-0 z-50">
      <Navbar
        fluid={true}
        rounded={true}
        className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-800"
      >
        {/* Logo with Brand Name */}
        <Navbar.Brand href="/">
          <span className="text-2xl font-bold p-2 text-white">
            Website Masjid Al-Anshar
          </span>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle onClick={toggleNavbar} />

        {/* Navbar Links */}
        <Navbar.Collapse className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <Link
            to="/"
            onClick={() => handleScrollToSection('home')}
            className="text-white text-lg px-3 py-2 hover:bg-blue-800 rounded"
          >
            Beranda
          </Link>

          {/* Dropdown: About */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => handleDropdownToggle('about')}
              className="text-white text-lg px-3 py-2 hover:bg-blue-800 rounded flex items-center"
            >
              Tentang
              <svg
                className="ml-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {openDropdown === 'about' && (
              <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    to="/fasilitas-masjid"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Fasilitas Masjid
                  </Link>
                  <Link
                    to="/profil-masjid"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Profil Masjid Al-Anshar
                  </Link>
                  <Link
                    to="/sejarah"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Sejarah
                  </Link>
                  <Link
                    to="/sejarah"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Pengurus
                  </Link>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleScrollToSection('contact')}
            className="text-white text-lg px-3 py-2 hover:bg-blue-800 rounded"
          >
            Kontak
          </button>

          <button
            onClick={() => handleScrollToSection('gallery')}
            className="text-white text-lg px-3 py-2 hover:bg-blue-800 rounded"
          >
            Galeri
          </button>

          {/* Dropdown: Other */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => handleDropdownToggle('service')}
              className="text-white text-lg px-3 py-2 hover:bg-blue-800 rounded flex items-center"
            >
              Other
              <svg
                className="ml-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {openDropdown === 'service' && (
              <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    to="/berita"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Berita Terkini
                  </Link>
                  <Link
                    to="/artikel"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Artikel
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default CustomNavbar;