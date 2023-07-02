import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen /Feed</Text>
      <Button title="Go to Tweet Details" onPress={() => navigation.navigate("Tweet")} />
      <Button title="Go to New Tweet" onPress={() => navigation.navigate("NewTweet")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
