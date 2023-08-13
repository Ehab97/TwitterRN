import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import LoadingOverlay from "../ui/LoadingOverlay";
import ProfileTweets from "./ProfileTweets";
import { followUserAction, unFollowUserAction } from "../../utlis/user-auth";
import { getMyTweetsForUser } from "../../utlis/helpers";
import { useNavigation } from "@react-navigation/native";

const MainProfile = ({ userId, currentUserId, user }) => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [isEndReached, setIsEndReached] = useState(false);
  const navigation = useNavigation();

  const fetchTweets = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await getMyTweetsForUser(userId, page);
      if (page === 1) setTweets(response);
      else {
        setTweets((prevTweets) => {
          const mergedTweets = [...prevTweets, ...response];
          const uniqueTweets = Array.from(new Set(mergedTweets.map((tweet) => tweet._id))).map((id) =>
            mergedTweets.find((tweet) => tweet._id === id)
          );
          return uniqueTweets;
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [userId, page]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setPage(1);
    setIsEndReached(false);
    try {
      await fetchTweets();
    } catch (error) {
      console.log(error);
    } finally {
      setRefreshing(false);
    }
  }, [refreshing]);
  const handleEndReached = React.useCallback(async () => {
    setPage((prev) => prev + 1);
  }, []);
  useEffect(() => {
    if (userId) fetchTweets();
  }, [page, userId]);
  console.log(page, tweets.length);
  const followUser = async () => {
    setLoading(true);
    try {
      const res = await followUserAction(currentUserId, userId);

      navigation.push("Profile", { userId: userId });
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
      navigation.push("Profile", { userId: userId });
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {isEndReached ? (
        <LoadingOverlay visible={isEndReached} />
      ) : (
        <ProfileTweets
          tweets={tweets}
          user={user}
          isLoading={isEndReached}
          userId={userId}
          currentUserID={currentUserId}
          unfollowUser={unfollowUser}
          followUser={followUser}
          refreshing={refreshing}
          onRefresh={onRefresh}
          handleEndReached={handleEndReached}
          isEndReached={isEndReached}
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
