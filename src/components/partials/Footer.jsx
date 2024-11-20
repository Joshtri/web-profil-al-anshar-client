import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { MdLocationCity } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-6 px-4">
      {/* Main Content */}
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        {/* Contact Information */}
        <div className="text-center md:text-left border border-gray-600 p-4 rounded-lg shadow-md max-w-sm">
          <h2 className="text-lg md:text-xl font-bold flex items-center justify-center md:justify-start">
            <MdLocationCity className="mr-2" /> Alamat
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
          <p className="mt-4 text-lg font-semibold border-t border-gray-700 pt-4">Social Media</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://www.instagram.com/yasipikan/"
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

        {/* Google Maps */}
        <div className="relative overflow-hidden rounded-lg shadow-md max-w-sm w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4669.820236068144!2d123.55012846698737!3d-10.194043639872243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c569b8959d90a5b%3A0xa866185ee2d6380d!2sMasjid%20Al%20Anshar%20Alak!5e0!3m2!1sen!2sid!4v1731973953942!5m2!1sen!2sid"
            className="w-full h-60 rounded-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Masjid Al-Anshar"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Masjid Al-Anshar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
