import { Avatar, Button, Flex, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import {Link as RouterLink} from "react-router-dom"

function Profile(){
    return(
         <Flex>
             <Menu>
                 <MenuButton 
                 as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0} 
                 >
                 <Avatar src="https://i.pravatar.cc/300"/>
                 </MenuButton>
                 <MenuList zIndex={100000}>
                    <Link as={RouterLink} to="/cart"> <MenuItem>Cart</MenuItem> </Link>
                    <Link as={RouterLink} to="/orders">  <MenuItem>Your Orders</MenuItem></Link>
                    <Link as={RouterLink} to="/login"><MenuItem>Login</MenuItem></Link>
                    <Link as={RouterLink} to="/logout"><MenuItem>Logout</MenuItem></Link>
                     {/* <MenuItem>Delete</MenuItem>
                     <MenuItem>Attend a Workshop</MenuItem> */}

                 </MenuList>
             </Menu>

         </Flex>
    )
}
export default Profile;