import React, { useState } from 'react'
import firebase from './firebase'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/images/Villa-Cart.png"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input, Box, Text, Flex,
    useToast
} from '@chakra-ui/react'
import Home from '../home/Home'
import { FaCartPlus } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { BsMinecartLoaded } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import OTP from './Otp'

const Login = () => {
    const [checkOtp,setOtp]=useState(false)
    const toast = useToast()
    const [phoneNumber, setPhoneNumber] = useState('')
    const navigate=useNavigate()
    const handleclick = () => {
        if (phoneNumber.length !== 10) {
            toast({
                title: 'Phone Number Must be of 10 digits.',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position:'top'
              })
        }
        else{
            toast({
                title:`OTP successfully sent to ${phoneNumber}`,
                status: 'success',
                duration: 3000,
                isClosable: true,
                position:'top'
              })
            setOtp(true)
        }
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [flag, setFlag] = useState(false)

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    React.useEffect(() => {
        onOpen()
        console.log(flag)
    }, [flag])
    const handleClose=()=>{
        navigate('/')
    }
    return (
        <> <Home />
           { checkOtp?<OTP/>:
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                size={'xl'}
                closeOnOverlayClick={false}
            >
                <ModalOverlay />
                <ModalContent>
                    <Flex w='100%' justifyContent={'right'}>
                        <Button onClick={handleClose} p={'0px'} bg='white' borderRadius={'50%'}><ImCancelCircle/></Button>
                    </Flex>
                    <ModalBody p={10}>
                        <Flex gap={5}>
                            <Box w='50%'>
                                <Text fontSize={'22px'} textAlign={'center'}>BENEFITS</Text>
                                <br />
                                <Box>
                                    <Flex justifyContent={'center'}>
                                        <BsMinecartLoaded color='#9C0000' size={'40px'} />
                                    </Flex>
                                </Box>
                                <Flex justifyContent={'center'}><Text as='b' fontSize={'13px'}>Manage Orders</Text></Flex>
                                <Flex justifyContent={'center'}><Text fontSize={'13px'}>Track, Return & Cancel your orders</Text></Flex>
                                <br />
                                <Box>
                                    <Flex justifyContent={'center'}>
                                        <ImPriceTag color='#9C0000' size={'40px'} />
                                    </Flex>
                                </Box>
                                <Flex justifyContent={'center'}><Text fontSize={'13px'} as='b'>Access Products that you love</Text></Flex>
                                <Flex justifyContent={'center'}><Text fontSize={'13px'}>Seamless access to Wishlist & Cart items</Text></Flex>
                                <br />
                                <Box>
                                    <Flex justifyContent={'center'}>
                                        <FaCartPlus color='#9C0000' size={'40px'} />
                                    </Flex>
                                </Box>
                                <Flex justifyContent={'center'}><Text fontSize={'13px'} as='b'>Quicker Checkout</Text></Flex>
                                <Flex justifyContent={'center'}><Text textAlign={'center'} fontSize={'13px'}>Saved Addresses & bank details for 3 step checkout</Text></Flex>
                            </Box>
                            <Box>
                                <form id='form' onSubmit={(e) => e.preventDefault()} >
                                    <Box w='100%'><img width={'150px'} src={logo} alt='logo' /></Box>
                                    <br />
                                    <Text textDecoration={'underline'} fontSize={'20px'} as='b'>{flag ? "Login/SignUp" : "Register"}</Text>
                                    <br />
                                    <br />
                                    <Text>Please provide your Mobile No.</Text>
                                    <FormControl>
                                        <Input border={'2px solid #9C0000'} onChange={(e) => setPhoneNumber(e.target.value)} ref={initialRef} placeholder='Enter 10 digit Mobile No.' />
                                    </FormControl>
                                    <br />
                                    <Flex justifyContent={'center'}>
                                        <Button onClick={handleclick} _hover={{ backgroundColor: 'black' }} bg='#9C0000' w='90%' color='white'>CONTINUE</Button>
                                    </Flex>
                                    <Text onClick={(e) => {
                                        e.preventDefault()
                                        setFlag(!flag)
                                    }} _hover={{ cursor: 'pointer' }} textAlign={'center'}>{flag ? "Already Registered? Login" : "New User?Register"}</Text>
                                </form>
                            </Box>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
             }
        </>

    )
}

export default Login
