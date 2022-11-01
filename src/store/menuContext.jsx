import { createContext, useState } from "react";

export const menuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState(false);
  const [burger, setBurger] = useState(false);

  function ToggleMenu() {
    setMenu(!menu);
  }

  function HideMenu() {
    setMenu(!menu);
    setBurger(false);
  }

  function ShowMenu() {
    setBurger(!burger);
  }

  return (
    <menuContext.Provider
      value={{ menu, burger, ToggleMenu, HideMenu, ShowMenu }}
    >
      {children}
    </menuContext.Provider>
  );
}
