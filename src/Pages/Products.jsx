// import { Box, Stack } from "@chakra-ui/react";
import {
    Box,
    
    Heading,
    
    Stack,

    Flex,
  } from '@chakra-ui/react';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import FilterComponents from '../components/FileterComponent';
import ProductSimple from '../components/ProductSimple';
import { fetchData } from "../Redux/products/action";



const Products=()=>{
    const products =useSelector((store)=>store.ecommerceData.products)
    const dispatch=useDispatch();
    const [searchParams]=useSearchParams();
    useEffect(()=>{
         if(products?.length===0){
           let params={
               category:searchParams.getAll("category"),
           }
            dispatch(fetchData(params))
        }
    },[dispatch,products?.length,searchParams])
    return(
        <Box>
            <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>
             <Box minWidth={"15rem"}>
                <FilterComponents/>
             </Box>
          
            <Box>
                <Heading as="h3">Products</Heading>
                <Flex flexWrap="wrap" justifyContent="space-around">
                    {products.map(pro=>{
                        return( 
                       <ProductSimple 
                       key={pro.id}
                        num={pro.id}
                        image={pro.image} 
                        title={pro.title}
                        price={pro.price}
                        rating={pro.rating.rate}
                        numReviews={pro.rating.count}
                        />)
                    })}
                </Flex>
                
            </Box>
            </Stack>

        </Box>
    )
}

export  default Products;