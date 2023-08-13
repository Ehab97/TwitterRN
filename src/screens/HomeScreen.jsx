import { View, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import TweetLists from "../components/tweets/TweetLists";
import { AuthContext } from "../store/context/auth-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { meregTweetAndUsers } from "../utlis/helpers";
import Toast from "react-native-root-toast";

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

  // const fetchTweets = React.useCallback(async () => {
  //   setLoading(true);
  //   try {
  //     const data = await meregTweetAndUsers(authCTX.userId, page);
  //     if (page === 1) setTweets(data.length === 0 ? [] : data);
  //     else {
  // setTweets((prevTweets) => {
  //   const mergedTweets = [...prevTweets, ...data];
  //   const uniqueTweets = getUniqueListBy(mergedTweets, "_id");
  //   // console.log(uniqueTweets.length);
  //   return uniqueTweets;
  // });
  //     }
  //     if (data.length === 0) setIsEndReached(true);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [authCTX.userId, page]);

  const fetchTweets = async () => {
    setLoading(true);
    try {
      const data = await meregTweetAndUsers(authCTX.userId, page);
      console.log("data===>", data);
      data&&data.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      if (page === 1) {
        setTweets(data.length === 0 ? [] : data);
      } else {
        setTweets((prevTweets) => {
          const mergedTweets = [...prevTweets, ...data];
          const uniqueTweets = getUniqueListBy(mergedTweets, "_id");
          return uniqueTweets;
        });
      }
      setIsEndReached(data.length === 0);
      if (data.length === 0) {
        Toast.show("No more new data available", {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          onShow: () => {
            // calls on toast\`s appear animation start
          },
          onShown: () => {
            // calls on toast\`s appear animation end.
          },
          onHide: () => {
            // calls on toast\`s hide animation start.
          },
          onHidden: () => {
            // calls on toast\`s hide animation end.
          },
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = React.useCallback(async () => {
    // setRefreshing(true);
    // setPage(1);
    // setIsEndReached(false);
    // try {
    //   await fetchTweets();
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setRefreshing(false);
    // }
    if (tweets.length < 600) {
      setPage(1);
      setIsEndReached(false);
      try {
        await fetchTweets();
      } catch (error) {
        console.log(error);
      } finally {
        setRefreshing(false);
      }
    } else {
      Toast.show("No more new data available", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        onShow: () => {
          // calls on toast\`s appear animation start
        },
        onShown: () => {
          // calls on toast\`s appear animation end.
        },
        onHide: () => {
          // calls on toast\`s hide animation start.
        },
        onHidden: () => {
          // calls on toast\`s hide animation end.
        },
      });
      setRefreshing(false);
    }
  }, [refreshing]);

  const handleEndReached = React.useCallback(async () => {
    setPage((prev) => prev + 1);
    setIsEndReached(false);
  }, []);

  const handleRefresh = () => {
    setPage(1);
    setIsEndReached(false);
  };

  const handleLoadMore = () => {
    if (!loading && !isEndReached) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchTweets();
    // onRefresh();
  }, [page]);
  // if (isEndReached) return <LoadingOverlay visible={isEndReached} />;
  if (loading) return <LoadingOverlay visible={loading} />;
  console.log("home loading", loading, page);
  return (
    <View style={styles.container}>
      <TweetLists
        tweets={tweets}
        onRefresh={onRefresh}
        // onRefresh={handleRefresh}
        isRefreshing={refreshing}
        handleEndReached={handleEndReached}
        // onLoadMore={handleLoadMore}
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
