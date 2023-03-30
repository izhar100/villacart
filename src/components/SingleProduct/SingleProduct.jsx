import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { singleProductdata } from '../../api/api'
import { Flex, Box, Text, Button, Grid } from '@chakra-ui/react'
import Loader from '../common/Loader'
import { IoIosHeartEmpty } from "react-icons/io";
import { FaAngleDoubleDown } from "react-icons/fa";
import { CartContext } from '../Contexts/CartProvider'

const SingleProduct = () => {
    const value=useContext(CartContext)
    const {addtoCart}=value
    const { id } = useParams()
    const [product, setProduct] = React.useState({})
    const [loading, setLoading] = React.useState(true)
    const getData = (id) => {
        singleProductdata(id).then((data) => {
            setProduct(data.data)
            setLoading(false)
        })
    }
    React.useEffect(() => {
        getData(id)
    }, [id])
    if (loading) {
        return <Loader />
    }
    console.log(product)
    return (
        <>
            <Box fontFamily={'Georgia'} m={5}>
                <Flex>
                    <Flex justifyContent={'center'} width="40%">
                        <Box width={'300px'}><img width={'100%'} src={product.image1} alt="image1" /></Box>
                        <Flex _hover={{ border: "1px solid black", cursor: "pointer" }} justifyContent={'center'} alignItems='center' w={'35px'} h='35px' border={'1px solid grey'} borderRadius='30px' ml={4}><IoIosHeartEmpty p='10px' color='#AD0027' size={"25px"} /></Flex>
                    </Flex>
                    <Box width={'50%'}>
                        <Text fontSize={'18px'}>{product.name}</Text>
                        <Text fontSize={'13px'}>From Ali Retail Shop</Text>
                        <Text fontSize={'28px'} color='#FBA937'>₹{product.price}</Text>
                        <Text fontSize={'14px'} color='#AD0027'>inclusive of all taxes</Text>
                        <Flex width={'80%'} mt={2} justifyContent='space-between'>
                            <Box>
                                <Text as='b' color={'grey'}>Details</Text>
                                <Text fontSize={'14px'}>Returned window</Text>
                                <Text color={'grey'}>3 days 0 minutes</Text>
                                <Text mt={2} fontSize={'14px'}>Returnable</Text>
                                <Text color={'grey'}>Yes</Text>
                            </Box>
                            <Box>
                                <Flex alignItems={'center'} color='#AD0027'>{<FaAngleDoubleDown />}More</Flex>
                                <Text fontSize={'14px'}>Time To Ship</Text>
                                <Text color={'grey'}>1 days 0 minutes</Text>
                                <Text mt={2} fontSize={'14px'}>Cancellable</Text>
                                <Text color={'grey'}>Yes</Text>
                            </Box>
                        </Flex>
                        <Flex mt={'50px'} justifyContent={'center'} gap={3} width={'80%'}>
                            <Button onClick={()=>addtoCart(product)} _hover={{ bg: 'black' }} bg={'#AD0027'} pr={'15%'} pl={'15%'} color='white'>Add To Cart</Button>
                            <Button _hover={{ bg: 'black' }} bg={'#AD0027'} pr={'20%'} pl={'20%'} color='white'>Buy Now</Button>
                        </Flex>
                    </Box>
                </Flex>
                <Box mt='30px'>
                    <Text textDecoration={'underline'} as='b' color={'#AD0027'} fontSize="20px">Product Specification</Text>
                </Box>
                <Box mt='20px'>
                    <Text as='b'>Details</Text>
                    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                        <Box>
                            <Text fontSize={'12px'}>Product Description</Text>
                            <Text color={'grey'} fontSize='13px'>Designer midi dresses for evening and casual wear. Fabric is beautifully printed in different floral prints, perfect for beautiful chic look!</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'12px'}>Month Year Of Manufacture Packing Import</Text>
                            <Text color={'grey'} fontSize='14px'>Jan 2022</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'12px'}>Imported Product Country Of Origin</Text>
                            <Text color={'grey'} fontSize='14px'>INDIA</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'12px'}>Ondc Category Id</Text>
                            <Text color={'grey'} fontSize='14px'>Fashion</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'12px'}>Long Desc</Text>
                            <Text color={'grey'} fontSize='14px'>Designer midi dresses for evening and casual wear. Fabric is beautifully printed in different floral prints, perfect for beautiful chic look!</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'12px'}>Measure Of Commodity In Pkg</Text>
                            <Text color={'grey'} fontSize='14px'>200gm</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'12px'}>Manufacturer Name</Text>
                            <Text color={'grey'} fontSize='14px'>Designer Poly Crepe PinkRose Print Unstitched Fabric for Women and Girls for Dresses, Gowns, Kurtis, Night Suits and Kaftaans (5 Yards ~ Metres)</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'12px'}>Common Or Generic Name Of Commodity</Text>
                            <Text color={'grey'} fontSize='14px'>Fabrics</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'12px'}>Short Desc</Text>
                            <Text color={'grey'} fontSize='14px'>Designer midi dresses for evening and casual wear. Fabric is beautifully printed in different floral prints, perfect for beautiful chic look!</Text>
                        </Box>
                        <Box>
                            <Text fontSize={'12px'}>Manufacturer Address</Text>
                            <Text color={'grey'} fontSize='14px'>Rafakha Fabrics, Surat, Gujarat</Text>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default SingleProduct
