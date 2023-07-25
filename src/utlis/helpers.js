import { getAllTweets, getTweetById } from "./http";
import { getAllUserInfo, getUserInfo } from "./user-auth";

export const meregTweetAndUsers = async (page, limit) => {
  try {
    const tweets = await getAllTweets(page, limit);
    const users = await getAllUserInfo();
    console.log("tweet", tweets.tweets.length);
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
    console.log('getTweetByIdWithUser error', error);
  }
};
