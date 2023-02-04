import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const CartCounter = () => {
    const cart = useSelector((store)=>store.ecommerceData.cart)
    
  return (
    <Box
     textColor={"white"}
     backgroundColor="black" 
     borderRadius={"50%"} width="20px" 
     height="20px"
     textAlign="center"
     paddingBottom="20px"
     position={'absolute'}
     right="0"
     top="0"
     >
      {cart?.length ? cart.length : 0}
    </Box>
  )
}

export default CartCounter
