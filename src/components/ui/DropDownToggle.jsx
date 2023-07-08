import React, { useState } from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function DropdownToggle({ options, selectedOption, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionPress = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.toggle}>
          <MaterialIcons name="more-vert" size={24} />
        </View>
      </TouchableWithoutFeedback>
      {isOpen && (
        <View style={styles.options}>
          {options.map((option) => (
            <TouchableWithoutFeedback key={option} onPress={() => handleOptionPress(option)}>
              <View style={styles.option}>
                <Text>{option}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  toggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  toggleText: {
    fontSize: 16,
  },
  options: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    zIndex: 1,
    width: "100%",
  },
  option: {
    padding: 10,
    width: "100%",
  },
});

export default DropdownToggle;
