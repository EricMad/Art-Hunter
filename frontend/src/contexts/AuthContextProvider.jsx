import { createContext, useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as jose from "jose";

export const authContext = createContext();

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("accessToken") &&
      jose.decodeJwt(localStorage.getItem("accessToken"))
  );

  const navigate = useNavigate();

  const logout = () => {
    setCurrentUser();
    localStorage.removeItem("accessToken");
  };

  const login = (token) => {
    localStorage.setItem("accessToken", token);
    setCurrentUser(jose.decodeJwt(token));
  };

  const userToken = (token) => {
    return localStorage.getItem("accessToken", token);
  };

  const contextValue = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
      logout,
      login,
      userToken,
    }),
    [currentUser, setCurrentUser, logout, login, userToken]
  );

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setCurrentUser(jose.decodeJwt(localStorage.getItem("accessToken")));
    } else {
      setCurrentUser();
      navigate("/");
    }
  }, []);

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
}
