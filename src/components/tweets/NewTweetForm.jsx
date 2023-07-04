import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from "react-native";

import { COLORS } from "../../helpers/colors";

import { Ionicons } from "@expo/vector-icons";
import CustomModal from "../ui/Modal";

const options = ["Public", "Followers", "Only me"];

const NewTweetForm = () => {
  const [tweet, setTweet] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const [charCount, setCharCount] = React.useState(280);
  const [showInput, setShowInput] = React.useState(true);
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleChangeText = (text) => {
    setTweet(text);
    setCharCount(280 - text.length);
  };

  const handleTweetClick = () => {
    if (charCount >= 0) {
    } else {
      Alert.alert("Tweet is too long and must be less than 280 characters");
    }
  };
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <View style={styles.formHeader}>
        <Text style={styles.charCount}>character left : {charCount}</Text>
        <TouchableOpacity style={styles.formButton} onPress={handleTweetClick}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formImageContainer}>
          <Image
            style={styles.fromImage}
            source={{
              uri: "https://picsum.photos/300/300",
            }}
          />

          {/* <TouchableOpacity onPress={handleOpenModal}>
            <View style={styles.selectionButton}>
              <Text style={styles.text}>{selectedOption}</Text>
              <Ionicons name="chevron-down-outline" size={22} color={COLORS.primary} />
            </View>
          </TouchableOpacity> */}
        </View>
        {showInput && (
          <TextInput
            style={styles.formInput}
            placeholder="What's happening?"
            placeholderTextColor={COLORS.gray}
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => handleChangeText(text)}
            value={tweet}
          />
        )}
      </View>
      <CustomModal visible={modalVisible} onClose={handleCloseModal}>
        <Text>This is the modal content.</Text>
      </CustomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  formHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  charCount: {
    color: "grey",
  },
  buttonText: {
    color: "white",
  },
  formButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  formContainer: {
    // flexDirection: "row",
    padding: 15,
    position: "relative",
  },
  formImageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  fromImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
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
  formInput: {
    height: 100,
    fontSize: 20,
    color: "black",
    marginLeft: 10,
  },
});

export default NewTweetForm;
