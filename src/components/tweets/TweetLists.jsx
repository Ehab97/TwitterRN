import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Tweet from "./Tweet";
import { COLORS } from "../../helpers/colors";
import { useNavigation } from "@react-navigation/native";

const TweetLists = ({ tweets }) => {
  //   const [tweets, setTweets] = useState([]);
  const navigation = useNavigation();
  const goToNewTweet = () => {
    navigation.navigate("NewTweet");
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.tweetSeparator} />}
      />
      <Pressable onPress={goToNewTweet} style={({ pressed }) => [styles.floatingButton, pressed && styles.pressed]}>
        <Ionicons name="add" size={32} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tweetSeparator: {
    borderBottomColor: "#CED0CE",
    borderBottomWidth: 1,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 12,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});

export default TweetLists;
