import axios from "axios";
import { BASE_URL } from "./constants/api";

export const login = async (email, password) => {
  console.log(`${BASE_URL}/users/login`);
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, {
      email,
      password,
    });
    return response.data.data;
  } catch (error) {
    console.log(`Login failed:${error}`);
    throw new Error(`${error}`);
  }
};

export const register = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, {
      email,
      password,
    });
    return response.data.data;
  } catch (error) {
    console.log(`Register failed:${error}`);
    throw new Error(`${error}`);
  }
};

export const updateUserInfo = async (id, userInfo) => {
  try {
    const response = await axios.put(`${BASE_URL}/users/${id}`, userInfo);
    return response.data.data;
  } catch (error) {
    console.log(`Update user info failed:${error}`);
    throw new Error(`${error}`);
  }
};

export const getUserInfo = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data.user;
  } catch (error) {
    console.log(`Get user info failed:${error}`);
    throw new Error(`${error}`);
  }
};

export const followUserAction = async (userId, userToFollowId) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/${userId}/follow`, {
      userId: userToFollowId,
    });
    return response.data;
  } catch (error) {
    console.log(`Register failed:${error}`);
    throw new Error(`${error}`);
  }
};
export const unFollowUserAction = async (userId, userToUnFollowId) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/${userId}/unfollow`, {
      userId: userToUnFollowId,
    });
    return response.data;
  } catch (error) {
    console.log(`Register failed:${error}`);
    throw new Error(`${error}`);
  }
};
