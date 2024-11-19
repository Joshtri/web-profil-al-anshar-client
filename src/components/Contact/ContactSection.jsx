import React from 'react';
import Layout from '../../pages/Layout';

function ContactSection() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative" id="contact">
        {/* Header */}
        <div className="text-center my-8">
          <h1 className="text-3xl font-bold text-gray-900">Hubungi Kami</h1>
          <p className="text-gray-600 mt-2">
            Jika Anda memiliki pertanyaan, saran, atau ingin mengetahui lebih banyak tentang Masjid Al-Anshar, silakan hubungi kami melalui informasi berikut.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informasi Kontak */}
          <div className="bg-white shadow-lg rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-gray-900">Informasi Kontak</h2>
            <p className="text-gray-600 mt-4">
              <strong>Alamat:</strong> Jalan Raya Masjid No. 123, Kota Kupang, NTT
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Email:</strong> info@masjidalanshar.com
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Telepon:</strong> +62 812-3456-7890
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Jam Operasional:</strong> Senin - Minggu, 05:00 - 22:00 WITA
            </p>
          </div>

          {/* Google Maps */}
          <div className="bg-white shadow-lg rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Lokasi Kami</h2>
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
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactSection;
