import React from 'react'
import Layout from './Layout'
import HomeSection from '../components/Home/HomeSection'
import GaleriSection from '../components/Gallery/GalerrySection'
import ContactSection from '../components/Contact/ContactSection'

function HomePage() {
  return (
    <Layout>
        <HomeSection/>
        <GaleriSection/>
        <ContactSection/>
    </Layout>
  )
}

export default HomePage