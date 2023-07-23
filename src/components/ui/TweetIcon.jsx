import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../helpers/colors";

const TweetIcon = ({ onPress, text, iconName, iconSize, iconColor, isCliked, style }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <Ionicons name={iconName} size={iconSize} color={isCliked ? COLORS.secondary : iconColor} />
      <Text
        style={{
          color: isCliked ? COLORS.secondary : iconColor,
          fontSize: 16,
          marginLeft: 8,
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TweetIcon;
