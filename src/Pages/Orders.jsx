import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductSimple from '../components/ProductSimple'
import { fetchOrders } from '../Redux/products/action'

const Orders = () => {
    const orders = useSelector((store)=>store.ecommerceData.orders)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchOrders())
    },[dispatch])
    
    console.log(orders)
  return (
    <Box>
           <Heading>Orders</Heading>
           {orders?.length && orders.map((pro)=>{
            return <ProductSimple  key={pro.id}
            num={pro.id}
            image={pro.image} 
            title={pro.title}
            price={pro.price}
            rating={pro.rating.rate}
            numReviews={pro.rating.count} />
           })}
    </Box>
  )
}

export default Orders
