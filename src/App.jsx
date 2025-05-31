import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Authpage from './pages/auth'

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Authpage />} />
    
      
    </Routes>
    </>
  )
}

export default App
