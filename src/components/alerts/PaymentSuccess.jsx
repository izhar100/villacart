import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Text,Box
} from '@chakra-ui/react'
const orderid=`#ABC${Math.random()}`

function PaymentSuccess() {
        const [count, setCount] = useState(10);
        const Navigate=useNavigate()
        useEffect(() => {
          const intid = setInterval(() => {
            setCount((count) => {
              if (count === 1) {
                clearInterval(intid);
                Navigate('/')
                return 0;
              }
              return count - 1;
            });
          }, 1000);
        }, []);
    return <>
        <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            fontFamily={'Georgia'}
            p={'10px'}
        >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                PAYMENT SUCCESS
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
            <Box p='5px'>
                <Text>Returning to home page in...</Text>
                <Text color={'green'} pt={'5px'}>{count} seconds</Text>
            </Box>
            <Text as='b'>Order Id: {orderid}</Text>
            <Text>Thanks for choosing VillaCart! Keep shopping !</Text>  
            </AlertDescription>
        </Alert>
    </>
}
export default PaymentSuccess
