import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import HomePage from '../Pages/HomePage'
import Orders from '../Pages/Orders'
import Product from '../Pages/Product'
import Products from '../Pages/Products'

const AllRoutes = () => {
  return (
    <div>
           <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orders" element={<Orders/>} />
          </Routes>
      
    </div>
  )
}

export default AllRoutes
