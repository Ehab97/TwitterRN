import axiosConfig from "./constants/config";

export const login = async (email, password) => {
  console.log(`/users/login`,email, password);
  try {
    const response = await axiosConfig.post(`/users/login`, {
      email,
      password,
    });
    return response.data.data;
  } catch (error) {
    console.log(`Login failed:${error}`);
    throw new Error(`${error}`);
  }
};

export const register = async (formData) => {
  try {
    const response = await axiosConfig.post(`/users`, formData);
    return response.data.data;
  } catch (error) {
    console.log(`Register failed:${error}`);
    throw new Error(`${error}`);
  }
};

export const updateUserInfo = async (id, userInfo) => {
  try {
    const response = await axiosConfig.put(`/users/${id}`, userInfo);
    return response.data.data;
  } catch (error) {
    console.log(`Update user info failed:${error}`);
    throw new Error(`${error}`);
  }
};

export const getAllUserInfo = async () => {
  try {
    const response = await axiosConfig.get(`/users`);
    return response.data.users;
  } catch (error) {
    console.log(`Get user info failed:${error}`);
    throw new Error(`${error}`);
  }
};
export const getUserInfo = async (id) => {
  try {
    const response = await axiosConfig.get(`/users/${id}`);
    return response.data.user;
  } catch (error) {
    console.log(`Get user info failed:${error}`);
    throw new Error(`${error}`);
  }
};

export const followUserAction = async (userId, userToFollowId) => {
  try {
    const response = await axiosConfig.post(`/users/${userId}/follow`, {
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
    const response = await axiosConfig.post(`/users/${userId}/unfollow`, {
      userId: userToUnFollowId,
    });
    return response.data;
  } catch (error) {
    console.log(`Register failed:${error}`);
    throw new Error(`${error}`);
  }
};
