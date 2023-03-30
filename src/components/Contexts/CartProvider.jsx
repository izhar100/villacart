import {createContext, useState } from "react"
export const CartContext=createContext()
const CartProvider = ({children}) => {
  const [data,setData]=useState([])
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
     }
     else{
      item['qty']++
     }
    localStorage.setItem("cart",JSON.stringify(data))
  }
  const removefromcart=(id)=>{
      let newdata=data.filter((item)=>{
        return item.id!==id
      })
      setData(newdata)
      localStorage.setItem("cart",JSON.stringify(data))
  }
  return <CartContext.Provider value={{data:data,addtoCart:addtoCart}}>
        {children}
     </CartContext.Provider>
}

export default CartProvider
