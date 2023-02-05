import React from 'react'
import { useSelector } from 'react-redux'

const Orders = () => {
    const orders = useSelector((store)=>store.ecommerceData.orders)
  return (
    <div>
      
    </div>
  )
}

export default Orders
