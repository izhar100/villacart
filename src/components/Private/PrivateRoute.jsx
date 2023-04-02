import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { CartContext } from '../Contexts/CartProvider'
const PrivateRoute = ({children}) => {
    const value=useContext(CartContext)
    const {auth}=value;
    if(auth===false){
        return <Navigate to="/login"/>
    }else{
        return children;
    }
}

export default PrivateRoute
