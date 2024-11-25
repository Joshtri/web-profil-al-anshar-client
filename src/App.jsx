import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SejarahPage from './pages/SejarahPage'
import VisiMisiPage from './pages/VisiMisiPage'
import ProfilMasjid from './components/Profil/ProfilMasjid'
import BeritaPage from './pages/BeritaPage'
import FasilitasPage from './pages/FasilitasPage'
import ArtikelPage from './pages/Article/ArtikelPage'
import PengurusPage from './pages/PengurusPage'
import KegiatanPage from './pages/KegiatanPage'
import ReadArticlePage from './pages/Article/ReadArticlePage'
import KiblatPage from './pages/KiblatPage'
import KiblatMapPage from './pages/KiblatMapPage'
// import ArtikelSection from './components/Artikel/ArtikelSection'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/sejarah' element={<SejarahPage/>}/>
          <Route path='/visi-misi' element={<VisiMisiPage/>}/>
          <Route path='/profil-masjid' element={<ProfilMasjid/>}/>
          <Route path='/berita' element={<BeritaPage/>}/>
          <Route path='/fasilitas-masjid' element={<FasilitasPage/>}/>
          <Route path='/artikel' element={<ArtikelPage/>}/>
          <Route path='/kegiatan-masjid' element={<KegiatanPage/>}/>
          <Route path='/pengurus' element={<PengurusPage/>}/>
          <Route path='/kegiatan' element={<KegiatanPage/>}/>
          <Route path="/artikel/:id" element={<ReadArticlePage />} />

          <Route path='/arah-kiblat' element={<KiblatPage/>}/>
          <Route path='/arah-kiblat-map' element={<KiblatMapPage/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
