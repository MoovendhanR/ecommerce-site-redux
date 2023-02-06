import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import HomePage from '../Pages/HomePage'
import Login from '../Pages/Login'
import Orders from '../Pages/Orders'
import Product from '../Pages/Product'
import Products from '../Pages/Products'
import Register from '../Pages/Register'

const AllRoutes = () => {
  return (
    <div>
           <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orders" element={<Orders/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
          </Routes>
      
    </div>
  )
}

export default AllRoutes
