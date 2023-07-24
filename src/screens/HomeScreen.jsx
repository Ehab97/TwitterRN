import { View, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import TweetLists from "../components/tweets/TweetLists";
import { AuthContext } from "../store/context/auth-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { meregTweetAndUsers } from "../utlis/helpers";

const TWEETS = [
  {
    id: "t1",
    user: {
      id: "u1",
      username: "saurabh",
      name: "Saurabh",
      image: "https://picsum.photos/300/300",
    },
    title: "Tweet 1",
    createdAt: "2021-03-01T12:00:00.000Z",
    content: "This is my first tweet",
    image: "https://picsum.photos/300/300",
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: "t2",
    user: {
      id: "u1",
      username: "saurabh",
      name: "Saurabh",
      image: "https://picsum.photos/300/300",
    },
    title: "Tweet 2",
    createdAt: "2021-03-01T12:00:00.000Z",
    content: "This is my first tweet",
    image: "https://picsum.photos/300/300",
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: "t3",
    user: {
      id: "u2",
      username: "EHAB",
      name: "Ehab",
      image: "https://picsum.photos/300/300",
    },
    title: "Tweet 3",
    createdAt: "2021-03-01T12:00:00.000Z",
    content: "This is my first tweet",
    image: "https://picsum.photos/300/300",
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: "t4",
    user: {
      id: "u3",
      username: "MUSTAFA",
      name: "Mustafa",
      image: "https://picsum.photos/300/300",
    },
    title: "Tweet 4",
    createdAt: "2021-03-01T12:00:00.000Z",
    content: "This is my first tweet",
    image: "https://picsum.photos/300/300",
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: "t5",
    user: {
      id: "u4",
      username: "ABDULLAH",
      name: "Abdullah",
      image: "https://picsum.photos/300/300",
    },
    title: "Tweet 5",
    createdAt: "2021-03-01T12:00:00.000Z",
    content: "This is my first tweet",
    image: "https://picsum.photos/300/300",
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: "t6",
    user: {
      id: "u5",
      username: "ALI",
      name: "Ali",
      image: "https://picsum.photos/300/300",
    },
    title: "Tweet 6",
    createdAt: "2021-03-01T12:00:00.000Z",
    content: "This is my first tweet",
    image: "https://picsum.photos/300/300",
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: "t7",
    user: {
      id: "u6",
      username: "AHMED",
      name: "Ahmed",
      image: "https://picsum.photos/300/300",
    },
    title: "Tweet 7",
    createdAt: "2023-07-02T12:00:00.000Z",
    content: "This is my first tweet",
    image: "https://picsum.photos/300/300",
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: "t8",
    user: {
      id: "u7",
      username: "MOHAMED",
      name: "Mohamed",
      image: "https://picsum.photos/300/300",
    },
    title: "Tweet 8",
    createdAt: "2023-07-01T12:00:00.000Z",
    content: "This is my first tweet",
    image: "https://picsum.photos/300/300",
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
];

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

  const fetchTweets = async () => {
    setLoading(true);
    try {
      const data = await meregTweetAndUsers(page);
      if (page === 1) setTweets(data);
      else {
        setTweets((prevTweets) => {
          const mergedTweets = [...prevTweets, ...data];
          // const uniqueTweets2 = Array.from(new Set(mergedTweets.map((tweet) => tweet._id))).map((id) =>
          //   mergedTweets.find((tweet) => tweet._id === id)
          // );
          // console.log(mergedTweets.length, uniqueTweets2.length);
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
  };
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
    console.log("end reached");
    setPage((prev) => prev + 1);
  }, []);
  console.log(page, tweets.length);
  useEffect(() => {
    fetchTweets();
  }, [page]);
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
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "white",
    // width: "100%",
  },
});

export default HomeScreen;
