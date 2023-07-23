import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AuthContext } from "../store/context/auth-context";
import MainProfile from "../components/profile/MainProfile";
import { getUserInfo } from "../utlis/user-auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

const Profile = ({ route }) => {
  const authCTX = React.useContext(AuthContext);
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await getUserInfo(route.params.userId);
      setUser(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (route.params.userId) fetchUser();
  }, [route.params.userId]);
  console.log({ user });
  return (
    <View style={styles.container}>
      {loading ? (
        <LoadingOverlay visible={loading} />
      ) : (
        <MainProfile currentUserId={authCTX.userId} userId={route.params.userId} user={user} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#fff",
  },
});
export default Profile;
