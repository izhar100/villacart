import {
    PinInput, PinInputField,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,Flex,useDisclosure,HStack,Button, useToast
} from '@chakra-ui/react'
import { useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {CartContext} from "../Contexts/CartProvider"
const realOTP='5555'
function OTP() {
    const value=useContext(CartContext)
    const {auth,handleAuth}=value;
    const navigate=useNavigate()
    const toast=useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [otp,setOtp]=useState('')
    useEffect(()=>{
        onOpen()
    },[auth])
    if(auth===true){
       navigate('/')
    }
    const authOTP=()=>{
        if(otp==realOTP){
            toast({
                title: 'Login Success',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position:'top'
              })
              handleAuth()
        }else{
            toast({
                title: 'Wrong! OTP did not match',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position:'top'
              })
        }
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent p={10}>
                    <Text as='b' fontSize={'20px'} textAlign={'center'}>Enter OTP</Text>
                    <ModalBody>
                        <Flex justifyContent={'center'}>
                        <HStack>
                            <PinInput manageFocus={true}>
                                <PinInputField onChange={(e)=>setOtp(otp+e.target.value)} />
                                <PinInputField onChange={(e)=>setOtp(otp+e.target.value)} />
                                <PinInputField onChange={(e)=>setOtp(otp+e.target.value)}/>
                                <PinInputField onChange={(e)=>setOtp(otp+e.target.value)} />
                            </PinInput>
                        </HStack>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Flex w='100%' justifyContent={'center'}>
                        <Button _hover={{backgroundColor:"#9C0000"}} color='white' bg='#9C0000' mr={3} onClick={authOTP}>
                            SUBMIT
                        </Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default OTP;
