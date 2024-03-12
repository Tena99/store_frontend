import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  const login = (user, password) => {
    setUser(user);
    setPassword(password);
  };

  const logout = () => {
    setUser(null);
    setPassword(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
