import React, { useContext } from 'react'
import { Box, Flex, Text, Button, Input,Textarea} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Empty from './Empty';
import { CartContext } from '../Contexts/CartProvider';

const Cart = () => {
  const value = useContext(CartContext)
  const { data, total } = value;
  console.log(data)

  if (data.length === 0) {
    return <Empty />
  }
  return (
    <>
      <Box fontFamily={'Georgia'} w='80%' mb={5} mt={5} m={'auto'}>
        <Box mt={5}>
          <Flex><Link to='/'><Text color='#AD0027'>Home</Text></Link>/cart</Flex>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Box w='20%'>
              <Text as={'b'}>My Cart({data.length} items)</Text>
            </Box>
            <Flex justifyContent={'space-between'} alignItems={'center'} width={'40%'}>
              <Text as={'b'}>Subtotal : ₹ {total}</Text>
              <Button onClick={()=>window.location.href="#form"} color={'white'} _hover={{ backgroundColor: "#AD0027" }} pl='18%' pr='18%' bg={'#AD0027'}>Place Order</Button>
            </Flex>
          </Flex>
          <br />
          <hr />
          <Box mt='10px' width={'80%'}>
            <Flex color={'grey'}>
              <Box width={'45%'}><Text>Item Details</Text></Box>
              <Flex width={'55%'} justifyContent={'space-between'}>
                <Box ml="20px"><Text>Quantity</Text></Box>
                <Box><Text>MRP</Text></Box>
              </Flex>
            </Flex>
            {
              data.map((item) => {
                return <Flex key={item.id} mt="20px">
                  <Box width={'45%'}>
                    <Flex>
                      <img src={item.image1} alt={item.name} />
                      <Box pl={3} pr={2}>
                        <Text noOfLines={1}>{item.name}</Text>
                        <br />
                        <Text color={'#AD0027'} fontSize={'12px'}>Remove</Text>
                      </Box>
                    </Flex>
                  </Box>
                  <Flex width={'55%'} justifyContent={'space-between'}>
                    <Box>
                      <Flex justifyContent={'center'} gap='5px'>
                        <Box _hover={{ cursor: "pointer" }} pl={'10px'} pr='10px' borderRadius={'50%'} border='1px solid #AD0027'><Text as='b' color={'#AD0027'} fontSize={'20px'}>-</Text></Box>
                        <Box pl={'10px'} borderRadius={'50%'} pr='10px' border='1px solid #AD0027'><Text fontSize={'20px'}>{item.qty}</Text></Box>
                        <Box _hover={{ cursor: "pointer" }} as='b' pl={'10px'} pr='10px' border='1px solid #AD0027' borderRadius={'50%'}><Text fontSize={'20px'} color='#AD0027'>+</Text></Box>
                      </Flex>
                    </Box>
                    <Box><Text>₹ {item.price * item.qty}</Text></Box>
                  </Flex>
                </Flex>
              })
            }
          </Box>
        </Box>
        <br />
        <Flex>
          <Box w='75%' id='form'>
            <Text as='b'>Delivery Address</Text>
            <Flex gap={2}>
              <Box>
                <Text>Full Name</Text>
                <Input border={'2px solid #AD0027'} placeholder='Enter full name here'/>
              </Box>
              <Box>
                <Text>Email</Text>
                <Input type='email' border={'2px solid #AD0027'} placeholder='Enter Email here'/>
              </Box>
              <Box>
                <Text>Phone No.</Text>
                <Input type='number' border={'2px solid #AD0027'} placeholder='Enter Phone no. here'/>
              </Box>
            </Flex>
            <Flex>
            <Box>
                <Text>Address</Text>
                <Input w={'426px'} border={'2px solid #AD0027'} placeholder="Enter delivery address here"/>
              </Box> 
              <Box ml={3}>
                <Text>Pin code</Text>
                <Input type='number' border={'2px solid #AD0027'} placeholder='Pin Code here'/>
              </Box>
            </Flex>
          </Box>
          <Box width={'25%'}>
            <Text as='b'>PRICE DETAILS</Text>
            <Flex mt='5px' mb='5px' color={'grey'} justifyContent={'space-between'}>
              <Text>Total MRP</Text>
              <Text>₹ {total}</Text>
            </Flex>
            <Flex fontSize={'18px'} justifyContent={'space-between'}>
              <Text as='b'>Subtotal</Text>
              <Text as='b'>₹ {total}</Text>
            </Flex>
            <Link to="/confirmation"><Button _hover={{ bg: '#AD0027' }} color='white' bg={'#AD0027'} mt='10px' mb='50px' pl='34%' pr='34%'>Place Order</Button></Link>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Cart
