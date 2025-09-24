import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LOginPage from './pages/LOginPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (

    
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain">
      <Routes>
        <Route path ='/'element={<HomePage />}/>
        <Route path ='/login'element={<LOginPage />}/>
        <Route path ='/profile'element={<ProfilePage />}/>

       
      </Routes>
    </div>
  )
}

export default App
