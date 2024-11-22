// import React from 'react'
import Layout from '../Layout'
import ReadArticle from '../../components/Artikel/ReadArticle'
import { useEffect } from 'react';

function ReadArticlePage() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []); // The empty dependency array ensures this runs only once when the component mounts
    
  return (
    <Layout>
        <ReadArticle/>
    </Layout>
  )
}

export default ReadArticlePage