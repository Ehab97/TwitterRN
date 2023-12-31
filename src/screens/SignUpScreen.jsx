import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../store/context/auth-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import AuthContent from "../components/auth/AuthContent";
import { register } from "../utlis/user-auth";

function SignupScreen() {
  const authCTX = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const signupHandler = async ({ email, password }) => {
    setLoading(true);
    try {
      let formData={
        email,
        password,
        image:`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      }
      const res = await register(formData);
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
