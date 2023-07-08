import { createSlice } from "@reduxjs/toolkit";

export const twitterSlice = createSlice({
    name: "twitter",
    initialState: {
        tweets: [],
        loading: false,
        error: null,
    },
    reducers: {
        addTweet: (state, action) => {
            state.tweets.push(action.payload);
        },
        removeTweet: (state, action) => {
            state.tweets = state.tweets.filter(
                (tweet) => tweet.id !== action.payload
            );
        },
        fetchTweets: (state, action) => {
            state.tweets = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
});

export const { addTweet, removeTweet, fetchTweets, setLoading, setError } =
    twitterSlice.actions;
const twitterReducer = twitterSlice.reducer;
export default twitterReducer; 