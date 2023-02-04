import { Box, Center, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
 import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/products/action";

  function ProductSimple({num,image, title, price}) {
    const {id} = useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
      if(id){
          dispatch(getSingleProduct(id))//getsingle
      }
  },[dispatch,id])
    console.log(id)
    return (
      <Center py={12}>
        <Link to={`/products/${num}`}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
                  {/* <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={image}
          /> */}
           <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'contain'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {title}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
             ₹{price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
             ₹{price+200}
            </Text>
          </Stack>
        </Stack>
      </Box>
      </Link>
    </Center>
  );
}


export default ProductSimple;