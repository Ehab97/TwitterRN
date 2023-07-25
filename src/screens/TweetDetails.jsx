import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import TweetView from "../components/tweets/TweetView";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { getTweetByIdWithUser } from "../utlis/helpers";

const TweetDetails = ({ route }) => {
  const [tweet, setTweet] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTweet = async () => {
    setLoading(true);
    try {
      const data = await getTweetByIdWithUser(route.params.tweetId);
      setTweet(data);
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
    <View style={styles.container}>{loading ? <LoadingOverlay visble={loading} /> : <TweetView tweet={tweet} />}</View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default TweetDetails;
