import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import LOginPage from './pages/LoginPage'

const App = () => {
  return (
    <div className="h-screen bg-[url('/src/assets/bgImage.svg')] bg-cover bg-center">
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LOginPage />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
</div>


  )
}

export default App



