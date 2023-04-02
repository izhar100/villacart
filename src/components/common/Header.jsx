import { Text, Box, Spacer, Flex, Input, InputGroup, InputLeftAddon, InputRightAddon, Stack} from '@chakra-ui/react';
import { Link,useNavigate } from 'react-router-dom';
import { MdSearch } from "react-icons/md";
import { MdRoom } from "react-icons/md";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import logo from "../assets/images/Villa-Cart.png"
import { CartContext } from '../Contexts/CartProvider';
import { useContext, useState } from 'react';
import Login from '../Login/Login';
const Header = () => {
    const [query,setQuery]=useState('')
    const navigate=useNavigate()
    const value=useContext(CartContext)
    const {data,auth,handleQuery}=value
    const handleSearchClick=()=>{
        handleQuery(query)
        navigate('/menu')
    }
    return (<>
        <Stack>
            <Box w='100%' margin={'auto'} p={4} color='white' textAlign="center" border="1px solid black">
                <Text as='b' fontFamily="Muli" color="#9C0000">GET RS 50 OFF ON ORDERS ABOVE RS 100</Text>
            </Box>
            <Box position={"absolute"} right={"86"} top={"55"} width={'15px'} as='b' color={'#9C0000'} borderRadius="10px" bg="#DDDDDD" fontSize='12px' textAlign={"center"}>
               <Text>{data.length}</Text>
            </Box>
            <Flex alignItems={'center'}>
                <Flex width={'20%'} justifyContent={'center'}>
                    <Link to='/'><img src={logo} width="200px" alt="logo" /></Link>
                </Flex>
                <Box width={'50%'} fontFamily={'Merriweather'}>
                    <Flex alignItems={'center'} gap="8px">
                        <InputGroup size='md' bg={"#DDDDDD"} fontSize="14px" borderRadius={"5px"}>
                            <InputLeftAddon bg={"#DDDDDD"} children='SEARCH' />
                            <Input onChange={(e)=>setQuery(e.target.value)} placeholder='Search here for products in Giridih' />
                            <InputRightAddon _hover={{cursor:"pointer"}} bg={'#DDDDDD'} children={<MdSearch size={'80%'} />} onClick={handleSearchClick} />
                        </InputGroup>
                        <Spacer />
                        <Flex alignItems={'center'}><MdRoom size={'9%'} /><Text>Giridih,Jharkhand</Text></Flex>
                    </Flex>
                </Box>
                <Box width={'30%'}>
                    <Flex fontFamily={'Merriweather'} fontSize="18px" gap="10px" alignItems={'center'} justifyContent="center">
                        <Flex gap="10px" alignItems={'center'}>
                            {auth?<Flex _hover={{cursor:"pointer"}} gap="5px"><FaUser size={"20px"} />
                            My Account</Flex>:<Link to='/login'><Flex _hover={{cursor:"pointer"}} gap="5px"><FaUser size={"20px"} />
                            Sign In / Register</Flex></Link>}
                            <Flex gap='5px'>
                                <IoIosHeartEmpty size={"25px"} />
                                <Text>WishList</Text>
                            </Flex>
                            |
                        </Flex>
                        <Link to='/cart'>
                        <Box _hover={{cursor:"pointer"}} ml={'20px'}>
                            <Flex alignItems={'center'} gap="5px">
                                <FaShoppingCart />
                                <Text>Cart</Text>
                            </Flex>
                        </Box>
                        </Link>
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