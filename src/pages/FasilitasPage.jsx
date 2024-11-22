import React, { useEffect } from 'react'
import Layout from './Layout'
import FasilitasSection from '../components/Fasilitas/FasilitasSection'

function FasilitasPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  return (
    <Layout>
        <FasilitasSection/>
    </Layout>
    )
}

export default FasilitasPage