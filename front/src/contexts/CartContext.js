import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const contextValue = {
    cart,
    setCart,
  }

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

export const useCartContext = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider')
  }

  return context
}
