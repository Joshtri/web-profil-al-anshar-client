// import footerImg from '../../assets/footerImg.jpg';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { MdLocationCity } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-6 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-12">
                {/* Left Column: Image or Logo */}
                <div className="flex items-center justify-center md:justify-start">
                    {/* <img 
                        src={footerImg} 
                        alt="Logo" 
                        className="w-full h-auto max-w-xs md:max-w-md rounded-lg shadow-lg" 
                    /> */}
                </div>

                {/* Center Column: Text */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg md:text-xl font-semibold">Mari Membangun Bersama,</h2>
                    <h2 className="text-lg md:text-xl font-semibold">Menebarkan Kasih Allah Bagi Sesama</h2>
                </div>

                {/* Contact Information */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg md:text-3xl font-bold flex justify-center md:justify-start">
                        <MdLocationCity className="mr-1" /> Alamat:
                    </h2>
                    <p className="mt-3">Jl. El Tari No. 23, Kel. Oebobo, Kec. Oebobo</p>
                    <p>
                        Email:{" "}
                        <a href="mailto:yasipikan@gmail.com" className="text-blue-300 hover:underline">
                            yasipikan@gmail.com
                        </a>
                    </p>
                    <p>
                        Telepon:{" "}
                        <a href="tel:085237555490" className="text-blue-300 hover:underline">
                            085237555490
                        </a>,{" "}
                        <a href="tel:085253421441" className="text-blue-300 hover:underline">
                            085253421441
                        </a>,{" "}
                        <a href="tel:087778089663" className="text-blue-300 hover:underline">
                            087778089663
                        </a>
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="text-center md:text-left">
                    <p className="mb-2">Social Media</p>
                    <div className="flex space-x-4 justify-center md:justify-start">
                        <a
                            href="https://www.instagram.com/yasipikan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            <CiFacebook />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-6 text-center border-t border-gray-700 pt-4">
                <p className="text-sm">&copy; 2024 Yayasan Sirih Pinang Kebaikan. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;