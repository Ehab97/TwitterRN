import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  userId:"",
  isAuthnticated: false,
  authenticate: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const authenticate = (token,userId) => {
    setAuthToken(token);
    setUserId(userId);
    AsyncStorage.setItem("token", token);
    AsyncStorage.setItem("userId",userId)
  };

  const logout = () => {
    setAuthToken(null);
    setUserId(null);
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("userId")
  };

  let value = {
    token: authToken,
    userId:userId,
    isAuthnticated: !!authToken,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
