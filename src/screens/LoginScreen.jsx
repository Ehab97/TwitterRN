import React, { useState, useContext } from "react";
import { Alert } from "react-native";

import { AuthContext } from "../store/context/auth-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import AuthContent from "../components/auth/AuthContent";
import { loginUser } from "../utlis/auth";
import { login } from "../utlis/user-auth";

function LoginScreen() {
  const authCTX = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const loginHandler = async ({ email, password }) => {
    setLoading(true);
    try {
      const res = await login(email, password);
      console.log("res", res, res.user._id);
      authCTX.authenticate(res.token, res.user._id);
      console.log(res);
    } catch (error) {
      console.log("loginScreen.js error: ", error);
      Alert.alert("Login Failed", "Please check your entered credentials.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingOverlay message={`user logiing in...`} />;
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
