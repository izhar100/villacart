import {createContext, useEffect, useRef, useState } from "react"
import {useToast} from '@chakra-ui/react'
const cartdata=JSON.parse(localStorage.getItem('cart'))||[]
const carttotal=localStorage.getItem('total')||0
export const CartContext=createContext()
const CartProvider = ({children}) => {
  const [q,setQ]=useState('')
  const [auth,setAuth]=useState(false)
  const toast = useToast()
  const [data,setData]=useState(cartdata)
  const [total,setTotal]=useState(Number(carttotal))
  const addtoCart=(item)=>{
     let id=false;
     for(let i=0; i<data.length; i++){
      if(item.id===data[i].id){
        id=true;
        break;
      }
     }
     if(id===false){
      item['qty']=1;
      setData([...data,item])
      setTotal(total+item.price)

     }
     else{
      item['qty']++;
      setData([...data])
      setTotal(total+item.price)
     }
     toast({
      title: 'Product Added to cart.',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position:'top-right'
    })
  }
  const decreaseQty=(id)=>{
     let newdata=data.map((item)=>{
      if(item.id==id && item.qty>1){
        item.qty--;
        setTotal(total-item.price)
      }
      return item;
     })
     setData(newdata)
  }

  const handleAuth=()=>{
   setAuth(true)
  }
  const removefromcart=(id)=>{
      let newdata=data.filter((item)=>{
        return item.id!==id
      })
      let newtotal=0;
      for(let i=0; i<newdata.length; i++){
        newtotal+=newdata[i].price*newdata[i].qty;
      }
      setData(newdata)
      setTotal(newtotal)
  }
  const handleQuery=(query)=>{
      setQ(query)
  }
  useEffect(()=>{
    //  localStorage.setItem('cart',JSON.stringify(data))
    //  localStorage.setItem('total',total)
  },[data,total,auth,q])

  return <CartContext.Provider value={{data:data,addtoCart:addtoCart,total:total,handleAuth:handleAuth,auth:auth,removefromcart:removefromcart,decreaseQty:decreaseQty,handleQuery:handleQuery,q:q}}>
        {children}
     </CartContext.Provider>
}
export default CartProvider
