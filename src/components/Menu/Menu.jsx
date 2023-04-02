import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { Flex, Box, Button, Text, Checkbox, Grid, GridItem, useToast } from '@chakra-ui/react'
import { FaAngleDown, FaAngleUp, FaShoppingBag } from "react-icons/fa";
import { getData } from '../../api/api';
import Loader from '../common/Loader';
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartProvider';
const initData = {
    loading: false,
    data: [],
    total: 0,
    error: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING": {
            return {
                ...state, loading: true,
            }
        }
        case "SUCCESS": {
            return {
                ...state, loading: false, data: action.payload, total: action.total,
            }
        }
        case "ERROR": {
            return {
                ...state, loading: false, error: true
            }
        }
        default: {
            throw new Error("Invalid Action Type")
        }
    }

}
const initRange = {
    gte: 0,
    lte: 10000
}
const Menu = () => {
    const toast=useToast()
    const navigate=useNavigate()
    const cartdata=React.useRef([])
    const [angle, setAngle] = React.useState(true)
    const [showcat, setShowcat] = React.useState(true)
    const [state, dispatch] = React.useReducer(reducer, initData)
    const [page, setPage] = React.useState(1)
    const [price, setPrice] = React.useState('asc')
    const [gte, setGte] = React.useState(0)
    const [lte, setLte] = React.useState(10000)
    const value=useContext(CartContext)
    const {addtoCart,auth,q}=value
    const fetchData = (page, price, gte, lte,q)=>{
        dispatch({ type: "LOADING" })
        getData({
            page: page,
            limit: 12,
            sort: 'price',
            order: price,
            gte:gte,
            lte:lte,
        },q).then((data) => {

            dispatch({ type: "SUCCESS", payload: data?.data, total: data.headers['x-total-count'] })
        }).catch((error) => {
            dispatch({ type: "ERROR" })
        })
    }
    React.useEffect(() => {
        console.log(state)
        fetchData(page, price,gte,lte,q)
    }, [page, price, gte, lte,q])

    const handleAddtoCart=(item)=>{
         if(auth===false){
            toast({
                title: 'Please Login First',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position:'top'
              })
            navigate('/login')
         }else{
            addtoCart(item)
         }
    }
    const handleFilter=(checked,value)=>{
         if(checked){
            if(value=='500-1000'){
                setGte(500)
                setLte(1000)
            }
         }else{
            setGte(0)
         }
    }

    const { loading, data, total, error } = state
    if (loading) {
        return <Loader/>
    }
    return (
        <>
            <Flex fontFamily={'Georgia'} pt={'20px'} gap={5} width={'92%'} margin='auto' mb={"10px"}>
                <Box w={'15%'} pr={'10px'}>
                    <Text fontSize={'25px'}>Filter by</Text>
                    <Flex alignItems={'center'} justifyContent={'space-between'}>
                        <Text fontSize={'20px'}>Price</Text>
                        <Text _hover={{ cursor: "pointer" }} onClick={() => setAngle(!angle)}>{angle ? <FaAngleDown /> : <FaAngleUp />}</Text>
                    </Flex>
                    <Box display={angle ? 'none' : 'block'}>
                        <Flex gap={5}>
                            <Checkbox value='500-1000' onChange={(e)=>handleFilter(e.target.checked,e.target.value)}></Checkbox>
                            <Text>500-1000</Text>
                        </Flex>
                        <Flex gap={5}>
                            <Checkbox value='200-500' onChange={(e)=>handleFilter(e.target.checked,e.target.value)}></Checkbox>
                            <Text>200-500</Text>
                        </Flex>
                        <Flex gap={5}>
                            <Checkbox value='morethan500'  onChange={(e)=>handleFilter(e.target.checked,e.target.value)}></Checkbox>
                            <Text>Above 500</Text>
                        </Flex>
                        <Flex gap={5}>
                            <Checkbox value='lessthan500'  onChange={(e)=>handleFilter(e.target.checked,e.target.value)}></Checkbox>
                            <Text>Below 500</Text>
                        </Flex>
                    </Box>
                    <Flex mt={'10px'} alignItems={'center'} justifyContent={'space-between'}>
                        <Text fontSize={'20px'}>Category</Text>
                        <Text _hover={{ cursor: "pointer" }} onClick={() => setShowcat(!showcat)}>{showcat ? <FaAngleDown /> : <FaAngleUp />}</Text>
                    </Flex>
                    <Box display={showcat ? 'none' : 'block'}>
                        <Flex gap={5}>
                            <Checkbox></Checkbox>
                            <Text>Bag</Text>
                        </Flex>
                        <Flex gap={5}>
                            <Checkbox></Checkbox>
                            <Text>Tshirt</Text>
                        </Flex>
                        <Flex gap={5}>
                            <Checkbox></Checkbox>
                            <Text>Jeans</Text>
                        </Flex>
                        <Flex gap={5}>
                            <Checkbox></Checkbox>
                            <Text>Paints</Text>
                        </Flex>
                    </Box>
                </Box>
                <Box w={'85%'}>
                    <Flex fontSize={"18px"} gap={4}>
                        <Text>Sort By:</Text>
                        <Text>Popular</Text>
                        <Text>|</Text>
                        <Text onClick={() => setPrice('asc')} _hover={{ cursor: "pointer" }}>Price : Low to High</Text>
                        <Text>|</Text>
                        <Text onClick={() => setPrice('desc')} _hover={{ cursor: "pointer" }}>Price : High to Low</Text>
                        <Text>|</Text>
                        <Text _hover={{ cursor: "pointer" }}>Discount</Text>
                        <Text>|</Text>
                        <Text _hover={{ cursor: "pointer" }}>New Arrival</Text>
                    </Flex>
                    <Box mt={'10px'} w={'100%'}>
                        <Grid templateColumns='repeat(4, 1fr)' gap={1}>
                            {data?.map((item, ind) => {
                                return <GridItem key={item.id} p={3} _hover={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                                    <Link to={`/product/${item.id}`}><Box pb={2}><img width={'100%'} src={item.image1} alt="image1" /></Box>
                                        <Text noOfLines={1}>{item.name}</Text>
                                        <Flex alignItems={'center'} margin={'auto'} width={'65%'} justifyContent={'space-between'}><Text color={'#FF9B00'} fontSize={'20px'}>₹ {item.price}</Text>
                                            <Text textDecoration={'line-through'} color={'gray'}>₹ 299</Text>
                                            <Text fontSize={'12px'} color={'#AD0027'}>{ind + 45}% off</Text>
                                        </Flex></Link>
                                    <Button onClick={()=>handleAddtoCart(item)} color={'white'} bg={'#902735'} w={'100%'} textAlign={'center'} gap={2} _hover={{ backgroundColor: 'black' }}>{<FaShoppingBag />}  Add to Cart</Button>
                                </GridItem>
                            })}
                        </Grid>
                    </Box>
                    <Flex justifyContent={'space-between'} width={'200px'} margin={'auto'}>
                        <Button isDisabled={page === 1} onClick={() => setPage(page - 1)} colorScheme='#AD0027' variant='outline'>PRE</Button>
                        <Button color={'white'} _hover={'backgroundColor:#AD0027'} disabled bg='#AD0027' >{page}</Button>
                        <Button isDisabled={page === Math.floor(total / 12)} onClick={() => setPage(page + 1)} colorScheme='#AD0027' variant='outline'>NEXT</Button>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}

export default Menu
