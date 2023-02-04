import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductSimple from '../components/ProductSimple'
import { fetchCart } from '../Redux/products/action'

const Cart = () => {
    const cartItems =useSelector((store)=>store.ecommerceData.cart)
    const dispatch = useDispatch()
   
    useEffect(()=>{
           dispatch(fetchCart())
    },[dispatch])
  console.log(cartItems)
  return (
    <>
       <Box>
        {
            cartItems.map((pro)=>{
                return <ProductSimple 
                        key={pro.id}
                        num={pro.id}
                        image={pro.image} 
                        title={pro.title}
                        price={pro.price}
                        rating={pro.rating.rate}
                        numReviews={pro.rating.count}
                />
            })
        }
       </Box>
    </>
  )
}

export default Cart
