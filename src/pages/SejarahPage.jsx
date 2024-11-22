import React, { useEffect } from 'react'
import Layout from './Layout'
import Sejarah from '../components/Sejarah/Sejarah'

function SejarahPage() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  return (
    <Layout>
        <Sejarah/>
    </Layout>
  )
}

export default SejarahPage