import { createContext, useState } from "react";

export const orderContext = createContext();

export function OrderProvider({ children }) {
  const [orderId, setOrderId] = useState("");

  function loadOrderId(id) {
    setOrderId(id);
  }

  return (
    <orderContext.Provider value={{ orderId, loadOrderId }}>
      {children}
    </orderContext.Provider>
  );
}
