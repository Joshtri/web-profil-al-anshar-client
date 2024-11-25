// import React from 'react'
import Layout from './Layout'
import KegiatanSection from '../components/Kegiatan/KegiatanSection'
import { useEffect } from 'react';

function KegiatanPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only once when the component mounts
  return (
    <Layout>
        <KegiatanSection/>
    </Layout>
  )
}

export default KegiatanPage