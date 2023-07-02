import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const options = [
  {
    text: "Not interested in this Tweet",
    iconName: "trash-bin-outline",
    iconColor: "gray",
  },
  {
    text: "Unfollow",
    iconName: "person-remove-outline",
    iconColor: "gray",
  },
  {
    text: "Mute",
    iconName: "volume-mute-outline",
    iconColor: "gray",
  },
  {
    text: "Block",
    iconName: "lock-closed-outline",
    iconColor: "gray",
  },
  {
    text: "Report Tweet",
    iconName: "flag-outline",
    iconColor: "gray",
  },
];

const TweetDropDwonAction = () => {
  const handlePress = (item) => {};
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <FlatList
        data={options}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePress(item)}>
            <View style={styles.content}>
              <Ionicons name={item.iconName} size={24} color={item.iconColor} />
              <Text style={{ marginLeft: 8, fontSize: 18, color: item.iconColor }}>{item.text}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.text}
        ItemSeparatorComponent={() => <View style={styles.tweetSeparator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: { flexDirection: "row", alignItems: "center", marginRight: 16, padding: 15 },
  tweetSeparator: {
    borderBottomColor: "#CED0CE",
    borderBottomWidth: 1,
  },
});

export default TweetDropDwonAction;
