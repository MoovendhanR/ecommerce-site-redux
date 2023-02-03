import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Products from '../Pages/Products'

const AllRoutes = () => {
  return (
    <div>
          <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<Products/>}/>

          </Routes>
      
    </div>
  )
}

export default AllRoutes
