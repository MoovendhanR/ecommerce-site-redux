import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Product from '../Pages/Product'
import Products from '../Pages/Products'

const AllRoutes = () => {
  return (
    <div>
          <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
          </Routes>
      
    </div>
  )
}

export default AllRoutes
