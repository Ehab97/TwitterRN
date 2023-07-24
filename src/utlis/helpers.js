import { getAllTweets } from "./http";
import { getAllUserInfo } from "./user-auth";

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
