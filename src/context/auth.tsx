import { createContext, useContext, useMemo, useState } from "react";
import { useCookies } from "react-cookie";
import {  useNavigate } from "react-router-dom";

export type AuthContextType = {
  cookies: { token?: string };
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies();
  const [isAuthenticated, setIsAuthenticated] = useState(!!cookies.token);

  const login = (token: string) => {
    setCookies("token", token);
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  const logout = () => {
    ["token"].forEach((obj) => removeCookie(obj));
    setIsAuthenticated(false);
    navigate("/auth/sigin");
  };

  const value = useMemo(
    () => ({
      cookies,
      login,
      logout,
      isAuthenticated,
    }),
    [cookies, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = (): AuthContextType | null => {
  const context=useContext(AuthContext) 
  if (!context) {
    return null;
  }
 
  return context ;
};
