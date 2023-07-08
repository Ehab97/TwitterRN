import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../helpers/colors";

const DropdownList = ({ options, selectedOption, handleSelect, setShowInput }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setShowInput(isOpen);
  };

  const handleClick = (option) => {
    handleSelect(option);
    toggleDropdown();
  };
  return (
    <View>
      <TouchableOpacity onPress={toggleDropdown}>
        <View style={styles.selectionButton}>
          <Text style={styles.text}>{selectedOption}</Text>
          <Ionicons name="chevron-down-outline" size={22} color={COLORS.primary} />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.selctionList}>
          {options.map((option) => (
            <TouchableOpacity key={option} onPress={() => handleClick(option)} style={styles.listItem}>
              <Text style={styles.text}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  selectionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 13,
    backgroundColor: "white",
    marginLeft: 10,
    width: 100,
  },
  text: {
    color: COLORS.primary,
  },
  selctionList: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: COLORS.primary,
    position: "absolute",
    top: 30,
    zIndex: 4,
    width: 100,
  },
  listItem: {
    marginBottom: 5,
    paddingBottom: 5,
    // borderBottomColor: COLORS.gray,
    // borderBottomWidth: 1,
  },
});

export default DropdownList;
