import React, { useContext, useState } from "react";
import { Alert } from "react-native";

import { AuthContext } from "../store/context/auth-context";
import { createUser } from "../utlis/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import AuthContent from "../components/auth/AuthContent";
import { register } from "../utlis/user-auth";

function SignupScreen() {
  const authCTX = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const signupHandler = async ({ email, password }) => {
    setLoading(true);
    try {
      const res = await register(email, password);
      authCTX.authenticate(res.token, res.user._id);
      console.log(res);
    } catch (error) {
      console.log("signupScreen.js error: ", error);
      Alert.alert("Signup Failed", "Please check your entered credentials.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingOverlay message={`Creating user...`} />;

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
