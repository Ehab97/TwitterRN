import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../helpers/colors";
const TweetIcon = ({ onPress, iconName, iconSize, iconColor, text, isLiked }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.content}>
        <Ionicons
          name={isLiked ? iconName.replace("-outline", "") : iconName}
          size={iconSize}
          color={isLiked ? COLORS.secondary : iconColor}
        />
        <Text style={{ marginLeft: 4, fontSize: 18, color: iconColor }}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: { flexDirection: "row", alignItems: "center", marginRight: 16 },
  pressed: {
    color: "red",
  },
  liked: {
    color: COLORS.secondary,
  },
});

export default TweetIcon;
