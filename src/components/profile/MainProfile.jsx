import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getMyTweets } from "../../utlis/http";
import LoadingOverlay from "../ui/LoadingOverlay";
import TweetLists from "../tweets/TweetLists";
import ProfileHeader from "./ProfileHeader";
import ProfileTweets from "./ProfileTweets";
import { followUserAction, unFollowUserAction } from "../../utlis/user-auth";
import { getMyTweetsForUser } from "../../utlis/helpers";

const MainProfile = ({ userId, currentUserId, user }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [isEndReached, setIsEndReached] = useState(false);
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

  const fetchTweets = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await getMyTweetsForUser(userId, page);
      // console.log({ response });
      if (page === 1) setTweets(response);
      else {
        setTweets((prevTweets) => {
          const mergedTweets = [...prevTweets, ...response];
          return mergedTweets;
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

  const handleEndReached = React.useCallback(async () => {
    console.log("end reached");
    setIsEndReached(true);
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
      {isEndReached ? (
        <LoadingOverlay visible={isEndReached} />
      ) : (
        <ProfileTweets
          tweets={tweets}
          user={user}
          isLoading={loading}
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
