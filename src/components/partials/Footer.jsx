import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white py-8 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-12">
                {/* Left Column: Placeholder for Logo or Branding */}
                <div className="flex items-center justify-center md:justify-start">
                    {/* Tambahkan logo masjid di sini jika ada */}
                    <h1 className="text-2xl font-bold">Masjid Al-Anshar</h1>
                </div>

                {/* Center Column: Slogan */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg md:text-xl font-semibold">
                        Mari Bersama, Membangun Umat yang Bertakwa
                    </h2>
                    <h2 className="text-lg md:text-xl font-semibold">
                        Menebarkan Cahaya Islam di Bumi Kupang
                    </h2>
                </div>

                {/* Social Media Links */}
                <div className="text-center md:text-left">
                    <p className="mb-2">Ikuti Kami</p>
                    <div className="flex space-x-4 justify-center md:justify-start">
                        <a
                            href="https://www.instagram.com/masjidalanshar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            <CiFacebook size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-6 text-center border-t border-gray-700 pt-4">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Masjid Al-Anshar. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
