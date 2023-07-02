import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TweetView from "../components/tweets/TweetView";

const TweetDetails = () => {
  return (
    <View style={styles.container}>
      <TweetView />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default TweetDetails;
