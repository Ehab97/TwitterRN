import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getMyTweets } from "../../utlis/http";
import LoadingOverlay from "../ui/LoadingOverlay";
import TweetLists from "../tweets/TweetLists";
import ProfileHeader from "./ProfileHeader";
import ProfileTweets from "./ProfileTweets";
import { followUserAction, unFollowUserAction } from "../../utlis/user-auth";

const MainProfile = ({ userId, currentUserId, user }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("user======>", user);
  const fetchTweets = async () => {
    console.log("fetch tweets");
    setLoading(true);
    try {
      const response = await getMyTweets(userId);
      //   console.log({ response });
      setTweets(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (userId) fetchTweets();
  }, [userId]);

  const followUser = async () => {
    setLoading(true);
    try {
      const res = await followUserAction(currentUserId, userId);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const unfollowUser = async () => {
    setLoading(true);
    try {
      const res = await unFollowUserAction(currentUserId, userId);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {user && (
        <ProfileHeader
          user={user}
          isLoading={loading}
          userId={userId}
          currentUserID={currentUserId}
          unfollowUser={unfollowUser}
          followUser={followUser}
        />
      )}
      {loading ? (
        <LoadingOverlay visible={loading} />
      ) : (
        <ProfileTweets
          tweets={tweets}
          user={user}
          isLoading={loading}
          userId={userId}
          currentUserID={currentUserId}
          unfollowUser={unfollowUser}
          followUser={followUser}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
export default MainProfile;
