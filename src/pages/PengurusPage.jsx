import React, { useEffect } from 'react'
import Layout from './Layout'
import PengurusSection from '../components/Pengurus/PengurusSection'

function PengurusPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  return (
    <Layout>
        <PengurusSection/>
    </Layout>
  )
}

export default PengurusPage