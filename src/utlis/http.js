import axiosConfig from "./constants/config";

export const getAllTweets = async (page = 1, limit = 5) => {
  try {
    console.log(`/tweets?page=${page}&limit=${limit}`);
    const response = await axiosConfig.get(`/tweets?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.log(`Get all tweets failed: ${error}`);
    throw new Error(`${error}`);
  }
};
export const getFollowingsTweets = async (userId,page = 1, limit = 5) => {
  try {
    console.log(`/tweets?page=${page}&limit=${limit}`);
    const response = await axiosConfig.get(`/tweets/followings/${userId}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.log(`Get all tweets failed: ${error}`);
    throw new Error(`${error}`);
  }
};

export const createTweet = async (tweet) => {
  console.log("createTweet", tweet);
  try {
    const response = await axiosConfig.post(`/tweets`, tweet);
    return response.data;
  } catch (error) {
    console.log(`Create tweet failed: ${error}`);
    throw new Error(`${error}`);
  }
};

export const getTweetById = async (id) => {
  try {
    const response = await axiosConfig.get(`/tweets/${id}`);
    console.log({ response: response.data.tweet });
    return response.data.tweet;
  } catch (error) {
    console.log(`Delete tweet failed: ${error}`);
    throw new Error(`${error}`);
  }
};
export const deleteTweet = async (id) => {
  try {
    const response = await axiosConfig.delete(`/tweets/${id}`);
    return response.data;
  } catch (error) {
    console.log(`Delete tweet failed: ${error}`);
    throw new Error(`${error}`);
  }
};

export const updateTweet = async (id, tweet) => {
  try {
    const response = await axiosConfig.put(`/tweets/${id}`, tweet);
    return response.data;
  } catch (error) {
    console.log(`Update tweet failed: ${error}`);
    throw new Error(`${error}`);
  }
};

export const likeTweet = async (id) => {
  try {
    const response = await axiosConfig.put(`/tweets/${id}/like`);
    return response.data;
  } catch (error) {
    console.log(`Like tweet failed: ${error}`);
    throw new Error(`${error}`);
  }
};

export const shareTweet = async (id) => {
  try {
    const response = await axiosConfig.put(`/tweets/${id}/share`);
    return response.data;
  } catch (error) {
    console.log(`Share tweet failed: ${error}`);
    throw new Error(`${error}`);
  }
};

export const getMyTweets = async (userId, page = 1, limit = 10) => {
  try {
    const response = await axiosConfig.get(`/tweets/user/${userId}?page=${page}&limit=${limit}`);
    console.log("getMyTweets", { response: response.data.tweets });
    return response.data.tweets;
  } catch (error) {
    console.log(`Get tweet failed: ${error}`);
    throw new Error(`${error}`);
  }
};
