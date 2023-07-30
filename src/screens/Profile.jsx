import { View, StyleSheet } from "react-native";
import React, { useContext, useState, useEffect, useCallback, useMemo } from "react";
import { AuthContext } from "../store/context/auth-context";
import MainProfile from "../components/profile/MainProfile";
import { getUserInfo } from "../utlis/user-auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

const Profile = ({ route }) => {
  const authCTX = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getUserInfo(route.params.userId);
      setUser(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [route.params.userId]);

  useEffect(() => {
    if (route.params.userId) fetchUser();
  }, [route.params.userId, fetchUser]);

  const profileComponent = useMemo(() => {
    return (
      <MainProfile
        currentUserId={authCTX.userId}
        userId={route.params.userId}
        user={user}
      />
    );
  }, [authCTX.userId, route.params.userId, user]);

  return (
    <View style={styles.container}>
      {loading ? <LoadingOverlay visible={loading} /> : profileComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Profile;