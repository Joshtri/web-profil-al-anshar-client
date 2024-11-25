import { useEffect } from 'react'
import Layout from './Layout'
import HomeSection from '../components/Home/HomeSection'
import GaleriSection from '../components/Gallery/GalerrySection'
// import ContactSection from '../components/Contact/ContactSection'
import { useLocation } from 'react-router-dom'
import PengumumanSection from '../components/Pengumuman/PengumumanSection'
import ArtikelPage from './Article/ArtikelPage'
import ArtikelHighlight from '../components/Artikel/ArtikelHighlight'

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetSection = document.getElementById(location.state.scrollTo);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [location.state]);
  return (
    <Layout>
        <HomeSection/>
        <PengumumanSection/>
        <GaleriSection/>
        {/* <ArtikelPage/> */}
        {/* <ContactSection/> */}
        <ArtikelHighlight/>
    </Layout>
  )
}

export default HomePage