import axios from "axios";
import { BASE_URL } from "./constants/api";

export const getAllTweets = async (page = 1, limit = 5) => {
  try {
    console.log(`${BASE_URL}/tweets?page=${page}&limit=${limit}`);
    const response = await axios.get(`${BASE_URL}/tweets?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.log(`Get all tweets failed: ${error}`);
    throw new Error(`${error}`);
  }
};

export const createTweet = async (tweet) => {
  console.log("createTweet", tweet);
  try {
    const response = await axios.post(`${BASE_URL}/tweets`, tweet);
    return response.data;
  } catch (error) {
    console.log(`Create tweet failed: ${error}`);
    throw new Error(`${error}`);
  }
};

export const getTweetById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/tweets/${id}`);
    console.log({ response: response.data.tweet });
    return response.data.tweet;
  } catch (error) {
    console.log(`Delete tweet failed: ${error}`);
    throw new Error(`${error}`);
  }
};
export const deleteTweet = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/tweets/${id}`);
    return response.data;
  } catch (error) {
    console.log(`Delete tweet failed: ${error}`);
    throw new Error(`${error}`);
  }
};

export const updateTweet = async (id, tweet) => {
  try {
    const response = await axios.put(`${BASE_URL}/tweets/${id}`, tweet);
    return response.data;
  } catch (error) {
    console.log(`Update tweet failed: ${error}`);
    throw new Error(`${error}`);
  }
};

export const likeTweet = async (id) => {
  try {
    const response = await axios.put(`${BASE_URL}/tweets/${id}/like`);
    return response.data;
  } catch (error) {
    console.log(`Like tweet failed: ${error}`);
    throw new Error(`${error}`);
  }
};

export const shareTweet = async (id) => {
  try {
    const response = await axios.put(`${BASE_URL}/tweets/${id}/share`);
    return response.data;
  } catch (error) {
    console.log(`Share tweet failed: ${error}`);
    throw new Error(`${error}`);
  }
};

export const getMyTweets = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/tweets/user/${userId}`);
    return response.data.tweets;
  } catch (error) {
    console.log(`Get tweet failed: ${error}`);
    throw new Error(`${error}`);
  }
};
