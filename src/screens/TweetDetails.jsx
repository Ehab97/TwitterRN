import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import TweetView from "../components/tweets/TweetView";
import { getTweetById } from "../utlis/http";
import { getUserInfo } from "../utlis/user-auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

const TweetDetails = ({ route }) => {
  const [tweet, setTweet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  console.log(route);
  const fetchTweet = async () => {
    setLoading(true);
    try {
      const tweet = await getTweetById(route.params.tweetId);
      setTweet(tweet);
      const user = await getUserInfo(tweet.user.id);
      setUser(user);
      console.log({ user });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (route.params.tweetId) {
      fetchTweet();
    }
  }, [route.params.tweetId]);
  return (
    <View style={styles.container}>
      {loading ? <LoadingOverlay visble={loading} /> : <TweetView tweet={tweet} user={user} />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default TweetDetails;
