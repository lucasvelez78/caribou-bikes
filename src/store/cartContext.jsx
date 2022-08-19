import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, count) {
    console.log("ok");
    // console.log(item, count);

    let copyCart = [...cart];
    copyCart.push({ ...item, quantity: count });
    setCart(copyCart);
    console.log(cart);
  }

  return (
    <cartContext.Provider value={{ cart, addToCart }}>
      {children}
    </cartContext.Provider>
  );
}
