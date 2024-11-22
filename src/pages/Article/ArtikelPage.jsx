// import React from 'react'
import Layout from '../Layout'
import ArtikelSection from '../../components/Artikel/ArtikelSection'
import { useEffect } from 'react';

function ArtikelPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  return (
    <Layout>
        <ArtikelSection/>
    </Layout>
  )
}

export default ArtikelPage