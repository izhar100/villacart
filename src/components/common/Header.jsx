import { Text, Box, Spacer, Flex, Input, InputGroup, InputLeftAddon, InputRightAddon, Stack} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdSearch } from "react-icons/md";
import { MdRoom } from "react-icons/md";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import logo from "../assets/images/Villa-Cart.png"
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartProvider';
const Header = () => {
    const value=useContext(CartContext)
    const {data}=value
    console.log("on home page",data)
    return (<>
        <Stack>
            <Box w='100%' p={4} color='white' textAlign="center" border="1px solid black">
                <Text as='b' fontFamily="Muli" color="#9C0000">GET RS 50 OFF ON ORDERS ABOVE RS 100</Text>
            </Box>
            <Box position={"absolute"} right={"86"} top={"55"} width={'15px'} as='b' color={'#9C0000'} borderRadius="10px" bg="#DDDDDD" fontSize='12px' textAlign={"center"}>
               <Text>{data?data.length:'0'}</Text>
            </Box>
            <Flex alignItems={'center'}>
                <Flex width={'20%'} justifyContent={'center'}>
                    <Link to='/'><img src={logo} width="200px" alt="logo" /></Link>
                </Flex>
                <Box width={'50%'} fontFamily={'Merriweather'}>
                    <Flex alignItems={'center'} gap="8px">
                        <InputGroup size='md' bg={"#DDDDDD"} fontSize="14px" borderRadius={"5px"}>
                            <InputLeftAddon bg={"#DDDDDD"} children='SEARCH' />
                            <Input placeholder='Search here for products in Giridih' />
                            <InputRightAddon _hover={{cursor:"pointer"}} bg={'#DDDDDD'} children={<MdSearch size={'80%'} />} />
                        </InputGroup>
                        <Spacer />
                        <Flex alignItems={'center'}><MdRoom size={'9%'} /><Text>Giridih,Jharkhand</Text></Flex>
                    </Flex>
                </Box>
                <Box width={'30%'}>
                    <Flex fontFamily={'Merriweather'} fontSize="18px" gap="10px" alignItems={'center'} justifyContent="center">
                        <Flex gap="10px" alignItems={'center'}>
                            <Flex gap="5px"><FaUser size={"20px"} />
                                Sign In / Register</Flex>
                            <Flex gap='5px'>
                                <IoIosHeartEmpty size={"25px"} />
                                <Text>WishList</Text>
                            </Flex>
                            |
                        </Flex>
                        <Box ml={'20px'}>
                            <Flex alignItems={'center'} gap="5px">
                                <FaShoppingCart />
                                <Text>Cart</Text>
                            </Flex>
                        </Box>
                        <Box>

                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Stack>
        <Box bg='#902735'>
            <Flex justifyContent={'center'} margin={'auto'} as='b' textColor={'white'} fontFamily="Georgia" fontSize={'18px'}>
                <Link to="/menu"><Box to="/menu" p={3} _hover={{bg:'#EAE5DC',color:"#902735",cursor:"pointer"}} ><Text>Menu</Text></Box></Link>
                <Link to='/stores'><Box p={3} _hover={{bg:'#EAE5DC',color:"#902735",cursor:"pointer"}} ><Text>Stores Near Me</Text></Box></Link>
                <Box p={3} _hover={{bg:'#EAE5DC',color:"#902735",cursor:"pointer"}} ><Text>Products Near Me</Text></Box>
                <Box p={3} _hover={{bg:'#EAE5DC',color:"#902735",cursor:"pointer"}} ><Text>Grocery</Text></Box>
                <Box p={3} _hover={{bg:'#EAE5DC',color:"#902735",cursor:"pointer"}} ><Text>Cloths</Text></Box>
            </Flex>
        </Box>
    </>
    )
}
export { Header }