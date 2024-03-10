import { useState } from "react";
import { createContext } from "react";
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [passWord, setPassWord] = useState(null);
  const login = (user) => {
    setUser(user);
    setPassWord(passWord);
  };

  const logout = () => {
    setUser(null);
    setPassWord(null);
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
