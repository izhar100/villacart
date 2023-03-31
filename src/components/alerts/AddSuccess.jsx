import React from 'react'
import { useToast,Button } from '@chakra-ui/react'

const AddSuccess = () => {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Account created.',
            status: 'success',
            duration: 1000,
            isClosable:true,
            position:'top-right'
          })
        }
      >
        Success: Successfully Added in Cart
      </Button>
    )
}

export default AddSuccess
