import React, { createContext, useContext, useState } from 'react';


const CartContext = createContext();


export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const itemInCart = cart.find(prod => prod.id === item.id);
    if (itemInCart) {
      const updatedCart = cart.map(prod =>
        prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
