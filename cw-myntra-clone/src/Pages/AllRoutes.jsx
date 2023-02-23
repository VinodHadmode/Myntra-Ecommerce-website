import React from 'react'
import { Routes,Route } from 'react-router'
import Home from './Home'
import Men from './Men'
import Women from './Women'
import Kids from './Kids'
import HomeLiving from './HomeLiving'
import Beauty from './Beauty'
import Studio from './Studio'

function AllRoutes() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/kids" element={<HomeLiving/>}/>
        <Route path="/kids" element={<Beauty/>}/>
        <Route path="/kids" element={<Studio/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
