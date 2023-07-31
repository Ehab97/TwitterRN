import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const options = [
  {
    id: 1,
    label: "Delete",
    icon: <Ionicons name="trash-outline" size={24} color="white" />,
    backgroundColor: "red",
  },
  {
    id: 2,
    label: "Edit",
    icon: <Ionicons name="create-outline" size={24} color="white" />,
    backgroundColor: "blue",
  },
  {
    id: 3,
    label: "Block user",
    icon: <Ionicons name="person-remove-outline" size={24} color="white" />,
    backgroundColor: "#FFA500",
  },
  {
    id: 4,
    label: "Mute user",
    icon: <Ionicons name="volume-mute-outline" size={24} color="white" />,
    backgroundColor: "gray",
  },
  {
    id: 5,
    label: "Report tweet",
    icon: <Ionicons name="alert-circle-outline" size={24} color="white" />,
    backgroundColor: "purple",
  },
];

const DropDownModal = ({ deleteTweet }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [clickedOption, setClickedOption] = useState(null);

  const handleOptionPress = (option) => {
    setClickedOption(option);
    setIsModalVisible(false);

    if (option.label === "Delete") {
      Alert.alert("Delete", "Are you sure you want to delete this item?", [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            deleteTweet();
          },
        },
      ]);
    } else {
      // Perform other actions
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.button}>
        <Ionicons name="ellipsis-horizontal" size={24} color="black" />
      </TouchableOpacity>
      <Modal visible={isModalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => handleOptionPress(option)}
                style={[styles.listItem, { backgroundColor: option.backgroundColor }]}
              >
                {option.icon}
                <Text style={styles.listItemLabel}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  button: {
    padding: 8,
  },
  modalBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    width: "80%",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  listItemLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
    color: "white",
  },
});

export default DropDownModal;
