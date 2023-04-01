import {
    PinInput, PinInputField,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,Flex,useDisclosure,HStack,Button
} from '@chakra-ui/react'
import { useEffect } from 'react';

function OTP() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(()=>{
        onOpen()
    },[])
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
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Flex w='100%' justifyContent={'center'}>
                        <Button _hover={{backgroundColor:"#9C0000"}} color='white' bg='#9C0000' mr={3} onClick={onClose}>
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
