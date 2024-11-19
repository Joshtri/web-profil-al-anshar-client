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
import ArtikelPage from './pages/ArtikelPage'
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

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
