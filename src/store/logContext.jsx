import { createContext, useState } from "react";

export const logContext = createContext();

export function LogProvider({ children }) {
  const [log, setLog] = useState(false);
  const [user, setUser] = useState({});

  function Log() {
    setLog(true);
  }

  function logOut() {
    setLog(false);
  }

  function printUser(email) {
    setUser(email);
  }

  return (
    <logContext.Provider value={{ log, user, Log, printUser, logOut }}>
      {children}
    </logContext.Provider>
  );
}
