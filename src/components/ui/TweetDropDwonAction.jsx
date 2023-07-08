import { View, Text,StyleSheet } from "react-native";
import React from "react";
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
          <View>
            <Text>{item.label}</Text>
            {item.icon}
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TweetDropDwonAction;
