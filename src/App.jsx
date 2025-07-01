// import { Home } from 'lucide-react'
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import PackegesLishting from './pages/packegeLishling/PackegeLishting'
import PackageDetails from './pages/packegeDetails/PackegesDetails'
import Blog from './pages/blog/Blog'
import Allblog from './pages/blog/Allblog'
import ContactPage from './pages/contact/Contact'
import NewPage from './pages/Page/NewPage'
import Search from './pages/search/Search'
import AllDestinations from './pages/destinations/AllDestinations'
import Destinations from './pages/destinations/Destinations'
import TermsOfUse from './pages/termsOfUse/TermsOfUse'


function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/holiday/:id" element={<PackegesLishting />} />
      <Route path="/packegesdetails/:id" element={<PackageDetails />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/allblog" element={<Allblog />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/:slug" element={<NewPage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/alldestination" element={<AllDestinations />} />
      <Route path="/destination/:id" element={<Destinations />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />

    
      
    </Routes>
    </>
  )
}

export default App
