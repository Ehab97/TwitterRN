import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Dropdown = ({ options, selectedOption, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleDropdown}>
        <View>
          <Text>{selectedOption}</Text>
          <Ionicons name="chevron-down-outline" size={24} color="black" />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View>
          {options.map((option) => (
            <TouchableOpacity key={option} onPress={() => handleSelect(option)}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Dropdown;
