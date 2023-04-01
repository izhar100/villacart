import React, { useEffect, useState,useContext } from 'react'
import { Link } from 'react-router-dom'
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
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import cardlogo from "../assets/images/PaymentMethod.png"
import PaymentSuccess from '../alerts/PaymentSuccess'
import {CartContext} from '../Contexts/CartProvider'
function Orderdone() {
    const value=useContext(CartContext)
    const {total}=value
    const { isOpen, onOpen, onClose } = useDisclosure()
    React.useEffect(() => {
        onOpen()
    }, [])
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [cardNumber, setCardNumber] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvv, setCvv] = useState('')
    const [holdername, setName] = useState('')
    const [isPaymentDone, setDone] = useState(false)
    const handlePayment = () => {
        if (cardNumber == '') {
            window.location.href = "#cardNum"
        } else if (expiry == '') {
            window.location.href = "#expiry"
        } else if (cvv == '') {
            window.location.href = "#cvv"
        } else if (holdername == '') {
            window.location.href = "#holdername"
        }
        else {
            setDone(true)
        }
    }
    useEffect(() => {
        console.log(isPaymentDone)
    }, [isPaymentDone])
    return (
        <>{isPaymentDone ?
            <>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalBody pt={7}>
                            <PaymentSuccess />
                        </ModalBody>

                        <ModalFooter>
                            <Flex w='100%' justifyContent={'center'}>
                                <Link to={'/'}><Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Go to Home Page
                                </Button></Link>
                            </Flex>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
            :
            <Box mt={'20px'} fontFamily={'Georgia'} h={'50vh'}>
                <Text textAlign={'center'} fontSize={'30px'}>
                    Make Payment to Confirm Order
                </Text>
                <Flex mt={'20px'} justifyContent={'center'}>
                    <Button _hover={{ bg: 'black' }} bg='#AD0027' color='white' onClick={onOpen}>Proceed to Payment</Button>
                </Flex>
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Credit/Debit Card Payment of <span style={{ color: '#AD0027' }}>₹ {total}.00</span></ModalHeader>
                        <Flex justifyContent={'center'}><img width={'200px'} src={cardlogo} alt="cards" /></Flex>
                        <ModalCloseButton />
                        <form id="paymentform" onSubmit={(e) => {
                            e.preventDefault()
                        }}>
                            <ModalBody pb={6}>
                                <FormControl isRequired>
                                    <FormLabel>CARD NUMBER</FormLabel>
                                    <Input ref={initialRef} id='cardNum' type='number' placeholder='**** **** **** ****' onChange={(e) => setCardNumber(e.target.value)} />
                                </FormControl>

                                <FormControl mt={4} isRequired>
                                    <Flex gap={2}>
                                        <Box w={'80%'}><FormLabel>CARD EXPIRY</FormLabel>
                                            <Input id='date' type='date' onChange={(e) => setExpiry(e.target.value)} /></Box>
                                        <Box><FormLabel>CARD CVV</FormLabel>
                                            <Input id='cvv' type='number' placeholder='***' onChange={(e) => setCvv(e.target.value)} /></Box>
                                    </Flex>
                                </FormControl>
                                <FormControl mt={4} isRequired>
                                    <FormLabel>CARD HOLDER NAME</FormLabel>
                                    <Input id='holdername' type='text' placeholder='Ex: Izhar Ashraf' onChange={(e) => setName(e.target.value)} />
                                </FormControl>
                            </ModalBody>
                        </form>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={handlePayment}>
                                Pay
                            </Button>
                            <Link to="/cart"><Button onClick={onClose}>Cancel</Button></Link>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        }
        </>
    )
}

export default Orderdone
