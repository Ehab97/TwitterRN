import React from "react";
import { View, StyleSheet } from "react-native";
import NewTweetForm from "../components/tweets/NewTweetForm";

const NewTweet = () => {
  return (
    <View style={styles.container}>
      <NewTweetForm />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default NewTweet;
