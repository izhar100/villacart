import {createContext, useEffect, useRef, useState } from "react"
const cartdata=JSON.parse(localStorage.getItem('cart'))||[]
const carttotal=localStorage.getItem('total')||0
export const CartContext=createContext()
const CartProvider = ({children}) => {
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
  }
  // const removefromcart=(id)=>{
  //     let newdata=data.filter((item)=>{
  //       return item.id!==id
  //     })
  //     setData(newdata)
  // }

  useEffect(()=>{
     localStorage.setItem('cart',JSON.stringify(data))
     localStorage.setItem('total',total)
  },[data,total])

  return <CartContext.Provider value={{data:data,addtoCart:addtoCart,total:total}}>
        {children}
     </CartContext.Provider>
}
export default CartProvider
