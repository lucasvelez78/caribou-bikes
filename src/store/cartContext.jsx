import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    let copyCart = [...cart];
    copyCart.push({ ...item, quantity: count });
    setCart(copyCart);
  }

  function removeFromCart(item) {
    console.log("removed");
    let copiaCart = [...cart];
    const newCart = copiaCart.filter((element) => element.id !== item.id);
    setCart(newCart);
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
}
