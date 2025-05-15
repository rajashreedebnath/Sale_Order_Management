import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const login = (username, password) => {
    if (username === "admin" && password === "password") {
      setIsAuthenticate(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticate(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticate, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

}

export const useAuth = () => useContext(AuthContext);