import { getAllTweets, getFollowingsTweets, getMyTweets, getTweetById } from "./http";
import { getAllUserInfo, getUserInfo } from "./user-auth";

export const meregTweetAndUsers = async (userId, page, limit) => {
  console.log("getTweetsWithUser", userId, page);
  try {
    let tweets = [];
    if (userId) {
      tweets = await getFollowingsTweets(userId, page, limit);
      if (tweets.tweets.length === 0) {
        tweets = await getAllTweets(page, limit);
      }
    } else {
      tweets = await getAllTweets(page, limit);
    }
    // const tweets = await getAllTweets(page, limit);
    // const tweets = await getFollowingsTweets(userId,page, limit);
    const users = await getAllUserInfo();
    console.log("tweets===>", tweets.tweets.length,tweets.tweets);
    const items = tweets.tweets.map((tweet) => {
      const userId = tweet.user.id;
      const user = users.find((user) => userId === user._id);
      const newItem = { ...tweet, user: { ...tweet.user, ...user } };
      return newItem;
    });
    console.log("items", items.length);
    return items;
  } catch (error) {}
};

export const getTweetByIdWithUser = async (id) => {
  console.log("getTweetByIdWithUser", id);
  try {
    const tweet = await getTweetById(id);
    console.log("tweet==>", tweet);
    const userId = tweet.user.id;
    const user = await getUserInfo(userId);
    console.log("user==>", user);
    const newItem = { ...tweet, user: { ...tweet.user, ...user } };
    return newItem;
  } catch (error) {
    console.log("getTweetByIdWithUser error", error);
  }
};

export const getMyTweetsForUser = async (userId, page = 1, limit = 10) => {
  console.log("getMyTweetsWithUser", userId);
  try {
    const tweets = await getMyTweets(userId, page, limit);
    console.log("tweets==>", tweets.length);
    const user = await getUserInfo(userId);
    console.log("user==>", user);
    const items = tweets.map((tweet) => {
      const newItem = { ...tweet, user: { ...tweet.user, ...user } };
      return newItem;
    });
    console.log("items", items.length);
    return items;
  } catch (error) {}
};
