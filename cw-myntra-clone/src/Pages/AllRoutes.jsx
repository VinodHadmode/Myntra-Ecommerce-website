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
        <Route path="/shop/men" element={<Men/>}/>
        <Route path="/shop/women" element={<Women/>}/>
        <Route path="/shop/kids" element={<Kids/>}/>
        <Route path="/shop/home-living" element={<HomeLiving/>}/>
        <Route path="/shop/beauty" element={<Beauty/>}/>
        <Route path="/shop/studio" element={<Studio/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
