import React from 'react'
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
import { Link } from 'react-router-dom'
import cardlogo from "../assets/images/PaymentMethod.png"

function Orderdone() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    React.useEffect(() => {
        onOpen()
    }, [])
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (
        <>
            <Box mt={'20px'} fontFamily={'Georgia'} h={'50vh'}>
                <Text textAlign={'center'} fontSize={'30px'}>
                    Make Payment to Confirm Order
                </Text>
                <Flex mt={'20px'} justifyContent={'center'}>
                    <Button _hover={{bg:'black'}} bg='#AD0027' color='white' onClick={onOpen}>Proceed to Payment</Button>
                </Flex>
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Credit/Debit Card Payment</ModalHeader>
                        <Flex justifyContent={'center'}><img width={'200px'} src={cardlogo} alt="cards" /></Flex>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>CARD NUMBER</FormLabel>
                                <Input type='number' ref={initialRef} placeholder='**** **** **** ****' />
                            </FormControl>

                            <FormControl mt={4}>
                                <Flex gap={2}>
                                    <Box w={'80%'}><FormLabel>CARD EXPIRY</FormLabel>
                                    <Input type='date' /></Box>
                                    <Box><FormLabel>CARD CVV</FormLabel>
                                    <Input type='number' placeholder='***' /></Box>
                                </Flex>
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>CARD HOLDER NAME</FormLabel>
                                <Input type='text' ref={initialRef} placeholder='Ex: Izhar Ashraf' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3}>
                                Payment
                            </Button>
                            <Link to="/cart"><Button onClick={onClose}>Cancel</Button></Link>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </>
    )
}

export default Orderdone
