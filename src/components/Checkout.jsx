import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    // ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
    Box,
    useColorModeValue,
    Flex,
    Image,
    
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function CheckOut({cart,checkoutHandler}) {
    var total=0;
    for(let i=0;i<cart.length;i++){
           total=total+cart[i].price*30;
    }


    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <Box>
          <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              onClick={onOpen}
              >
                  check out
            </Button>

        {/* <Button onClick={onOpen}>Open Modal</Button> */}
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Order</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {cart.map(product=>{
                  return(
                      <Flex>
                      <Box key={product.id} mb="1rem">
                          <Image 
                          border={"1px solid black"}
                           rounded={"lg"}
                           src={product.image}
                           objectFit={"contain"} 
                           alt="product image" 
                           boxSize="100px" />
                      </Box>
                      <Box maxW={"250px"} ml="1rem" mt="0.2rem">
                          <Text fontSize="lg">{product.title}</Text>
                          <Text fontSize="lg">₹{product.price*30}</Text>

                      </Box>
                     
                      </Flex>
                  )
              })}
            </ModalBody>
  
            <Box>
                <Flex justifyContent={"space-evenly"}>
              <Text fontSize={"xl"} mt="2" >Total:₹{total}</Text>
              <Link to="/orders">
              <Button colorScheme='blue' mr={3} mb="4" onClick={checkoutHandler} onClose={onClose}>
                Confirm
              </Button>
              </Link>
                </Flex>
            </Box>
          </ModalContent>
        </Modal>
      </Box>
    )
  }

  export default CheckOut;