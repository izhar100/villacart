import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Button, Box,Text } from '@chakra-ui/react'
import payments from "../assets/images/PaymentMethod.png"

const Empty = () => {
    return (
        <>
            <Box fontFamily={'Georgia'} margin={'auto'} width={'15%'} textAlign='center'>
                <Flex m={4}>
                    <img width={'100%'} src="https://www.craftsvilla.com/assets/group-6.png" alt="empty" />
                </Flex>
                <Flex m={4} justifyContent={'center'}><Text fontSize={'22px'}>Your Cart is Empty</Text></Flex>
                <Link to='/menu'><Flex mt={4} mb={5} justifyContent={'center'}><Button _hover={{bg:'#AD0027'}} bg='#AD0027' as='b' color={'white'}>CONTINUE SHOPPING</Button></Flex></Link>
            </Box>
            <br />
            <hr />
            <br />
            <Box m='auto' w='80%'>
             <Box w='20%'>
                <img src={payments} alt="" />
             </Box>
             <Box mt='5px' fontFamily={'Georgia'} bg={'#AD0027'}>
                <Text fontSize={'15px'} pl='20px' as='b' color={'white'}>'Over 25 lakh happy customers!'</Text>
             </Box>
            </Box>
            <br />
            <br />
        </>
    )
}

export default Empty
