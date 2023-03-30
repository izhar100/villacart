import React from 'react'
import { Flex,Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <Flex m={100} justifyContent={'center'} alignItems="center"><Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='red.500'
    size='xl'
/></Flex>
  )
}

export default Loader
