import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

const options = [
  {
    id: 1,
    label: "Delete",
    icon: <Ionicons name="trash-outline" size={24} color="black" />,
  },
  {
    id: 2,
    label: "Edit",
    icon: <Ionicons name="create-outline" size={24} color="black" />,
  },
  {
    id: 3,
    label: "block user",
    icon: <Ionicons name="person-remove-outline" size={24} color="black" />,
  },
  {
    id: 4,
    label: "mute user",
    icon: <Ionicons name="volume-mute-outline" size={24} color="black" />,
  },
  {
    id: 5,
    label: "report tweet",
    icon: <Ionicons name="alert-circle-outline" size={24} color="black" />,
  },
];

const TweetDropDwonAction = () => {
  const [clickedOption, setClickedOption] = useState(null);
  return (
    <View>
      <FlatList
        data={options}
        renderItem={({ item }) => (
          <View
            style={styles.listItem}
          >
            <Text
              style={styles.listItemLabel}
            >{item.label}</Text>
            {item.icon}
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  listItemLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "#e6ecf0",
    marginVertical: 8,
  },
  
});

export default TweetDropDwonAction;
