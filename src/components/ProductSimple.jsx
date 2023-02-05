import { Box, Center, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
 import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/products/action";
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

  function ProductSimple({num,image, title, price ,rating, numReviews }) {
    const {id} = useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
      if(id){
          dispatch(getSingleProduct(id))//getsingle
      }
  },[dispatch,id])
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
             ₹{price*30}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
             ₹{price*33}
            </Text>
          </Stack>
            <Box>
              <Rating rating={rating} numReviews={numReviews}/>
            </Box>
        </Stack>
      </Box>
      </Link>
    </Center>
  );
}


function Rating({ rating, numReviews }) {
  return (
    <Flex d="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Flex>
  );
}




export default ProductSimple;