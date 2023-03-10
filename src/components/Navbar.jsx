import React from "react";
import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Icon,
    Link,
    // Button
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,

  } from '@chakra-ui/icons';
  import { SiHomeassistantcommunitystore } from "react-icons/si";
  import {Link as RouterLink} from "react-router-dom"
import Profile from "./Profile";
import { BsCart3 } from "react-icons/bs";
import CartCounter from "./CartCounter";
  

const Navbar=()=>{
  
    const { isOpen, onToggle } = useDisclosure();

    return (
      <Box >
        {/* as="header" position="fixed" w="100%" */}
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Link as={RouterLink} to="/">
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              Fake Shop
            </Text>
                </Link>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              {/* <DesktopNav /> */}
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            {/* <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button> */}
            <Link as={RouterLink} to="/cart">
            <Box position="relative" padding="0 0.5rem 0 0">
              <CartCounter/>
            <Icon as={BsCart3} boxSize="2rem" />
            </Box>
            </Link>
            <Link as={RouterLink} to="/products">

            <Icon as={SiHomeassistantcommunitystore} boxSize="2rem"/>
            </Link>
            <Profile/>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          {/* <MobileNav /> */}
        </Collapse>
      </Box>
        )
}

export default Navbar;