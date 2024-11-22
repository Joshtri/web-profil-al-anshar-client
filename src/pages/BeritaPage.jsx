import React, { useEffect } from 'react'
import Layout from './Layout'
import BeritaSection from '../components/Berita/BeritaSection'

function BeritaPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  return (
    <Layout>
        <BeritaSection/>
    </Layout>
  )
}

export default BeritaPage