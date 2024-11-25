// import React from 'react'
import { useEffect } from 'react';
import VisiMisi from '../components/VisiMisi/VisiMisi'
import Layout from './Layout'

function VisiMisiPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only once when the component mounts
  return (
    <Layout>
        <VisiMisi/>
    </Layout>
  )
}

export default VisiMisiPage