import { View, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import TweetLists from "../components/tweets/TweetLists";
import { AuthContext } from "../store/context/auth-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { meregTweetAndUsers } from "../utlis/helpers";

const HomeScreen = ({ navigation }) => {
  const authCTX = useContext(AuthContext);
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [page, setPage] = useState(1);
  const [isEndReached, setIsEndReached] = useState(false);

  const getUniqueListBy = (arr, key) => {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  };

  const fetchTweets = React.useCallback(async () => {
    setLoading(true);
    try {
      const data = await meregTweetAndUsers(authCTX.userId, page);
      if (page === 1) setTweets(data.length === 0 ? [] : data);
      else {
        setTweets((prevTweets) => {
          const mergedTweets = [...prevTweets, ...data];
          const uniqueTweets = getUniqueListBy(mergedTweets, "_id");
          // console.log(uniqueTweets.length);
          return uniqueTweets;
        });
      }
      if (data.length === 0) setIsEndReached(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [authCTX.userId, page]);
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
    fetchTweets();
    // onRefresh();
  }, [authCTX.userId, page]);
  // if (isEndReached) return <LoadingOverlay visible={isEndReached} />;
  if (loading) return <LoadingOverlay visible={loading} />;
  return (
    <View style={styles.container}>
      <TweetLists
        tweets={tweets}
        isRefreshing={refreshing}
        onRefresh={onRefresh}
        handleEndReached={handleEndReached}
        isEndReached={isEndReached}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
