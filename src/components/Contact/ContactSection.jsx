import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to detect when ContactSection is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Trigger when at least 10% of the section is visible
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Variants for Framer Motion
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative"
    >
      {/* Header */}
      <motion.div
        className="text-center my-8"
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={sectionVariants}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Hubungi Kami
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Jika Anda memiliki pertanyaan, saran, atau ingin mengetahui lebih
          banyak tentang Masjid Al-Anshar, silakan hubungi kami melalui
          informasi berikut.
        </p>
      </motion.div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Informasi Kontak */}
        <motion.div
          className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-6 border dark:border-gray-700"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Informasi Kontak
          </h2>
          <p className="text-gray-600 dark:text-gray-300 flex items-center mt-4">
            <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 mr-3" />
            <strong>Alamat:</strong> Jalan Raya Masjid No. 123, Kota Kupang,
            NTT
          </p>
          <p className="text-gray-600 dark:text-gray-300 flex items-center mt-4">
            <FaEnvelope className="text-green-600 dark:text-green-400 mr-3" />
            <strong>Email:</strong> info@masjidalanshar.com
          </p>
          <p className="text-gray-600 dark:text-gray-300 flex items-center mt-4">
            <FaPhoneAlt className="text-yellow-600 dark:text-yellow-400 mr-3" />
            <strong>Telepon:</strong> +62 812-3456-7890
          </p>
          <p className="text-gray-600 dark:text-gray-300 flex items-center mt-4">
            <FaClock className="text-purple-600 dark:text-purple-400 mr-3" />
            <strong>Jam Operasional:</strong> Senin - Minggu, 05:00 - 22:00 WITA
          </p>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-6 border dark:border-gray-700"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Lokasi Kami
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4669.820236068144!2d123.55012846698737!3d-10.194043639872243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c569b8959d90a5b%3A0xa866185ee2d6380d!2sMasjid%20Al%20Anshar%20Alak!5e0!3m2!1sen!2sid!4v1731973953942!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
            title="Google Map Masjid Al-Anshar"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
