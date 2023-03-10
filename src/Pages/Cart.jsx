import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BoxShadow } from '../components/BoxShadow'
import CheckOut from '../components/Checkout'
import { addOrders, fetchCart,removeCartItem } from '../Redux/products/action'

const Cart = () => {
    const cart =useSelector((store)=>store.ecommerceData.cart)
    const dispatch = useDispatch()
   
    useEffect(()=>{
           dispatch(fetchCart())
          dispatch(removeCartItem())

        },[dispatch])
        const remmoveProduct =(id)=>{
             dispatch(removeCartItem(id))
        }

    const checkoutHandler = ()=>{
         dispatch(addOrders(cart))
    }

  return (
    <>
       <Box>
        {/* {
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
        } */}


        <Heading as="h2" size="xl" textAlign={"center"}>
            Cart
        </Heading>
       {
        cart?.map((ele)=>{
            return(

                <CartItem key={ele.id} id={ele.id} title={ele.title} description={ele.description} price={ele.price} image={ele.image} remmoveProduct={remmoveProduct} />
            )
        })
       }
       <CheckOut  cart={cart} checkoutHandler={checkoutHandler}/>
       </Box>
    </>
  )
}

function CartItem({id,title, description, price,image,remmoveProduct}){
    return(
        <Box boxShadow={BoxShadow} rounded="lg" width={"fit-content"} margin="auto" marginBottom={"2rem"}>
            <Stack direction={{base:"column",md:"row"}} justifyContent="center" alignItems="center">

            <Box height={"300px"} width="300px" 
            position="relative"
            padding="0 1rem"
             _after={{
                transition: 'all .3s ease',
                content: '""',
                w: '80%',
                h: '80%',
                pos: 'absolute',
                top: "50%",
                left: "50%",
                transform: `translate(-50%,-50%)`,
                backgroundImage: `url(${image})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}>
                <Image 
                rounded={"lg"}
                height={300}
                width={300}
                objectFit={"contain"}
                src={image}
                />
            </Box>
            <Box height={"300px"} width="300px">
                <Stack p={4}>
                <Heading as="h4" size="lg" textOverflow={"ellipsis"}>{title}</Heading>
                <Box overflow={"hidden"} whiteSpace="nowrap" >
                <Text textOverflow={"ellipsis"} width="100px">
                    {description}
                </Text>
                </Box>
                <Text 
                color={useColorModeValue("gray.900","gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
                >
                    ???{price*30}
                </Text>
                <Button variant={"outline"} leftIcon={<DeleteIcon/>} onClick={()=>remmoveProduct(id)}>Remove</Button>
                </Stack>
            </Box>
            </Stack>
        </Box>
    )
}



export default Cart
