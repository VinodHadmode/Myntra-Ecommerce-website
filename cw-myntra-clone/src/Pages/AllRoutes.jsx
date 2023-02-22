import React from 'react'
import { Routes,Route } from 'react-router'
import Home from './Home'
import Men from './Men'
import Women from './Women'
import Kids from './Kids'
import Navbar from '../Components/Navbar'

function AllRoutes() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/kids" element={<Kids/>}/>

      </Routes>
    </div>
  )
}

export default AllRoutes
