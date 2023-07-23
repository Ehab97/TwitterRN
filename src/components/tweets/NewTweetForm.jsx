import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../helpers/colors";
import { createTweet } from "../../utlis/http";
import { AuthContext } from "../../store/context/auth-context";

const options = ["Public", "Followers", "Only me"];

const NewTweetForm = () => {
  const authCTX = useContext(AuthContext);
  const [tweet, setTweet] = useState("");
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [charCount, setCharCount] = useState(280);
  const [showInput, setShowInput] = useState(true);
  const navigation = useNavigation();

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleChangeText = (text) => {
    setTweet(text);
    setCharCount(280 - text.length);
  };

  const handleTweetClick = async () => {
    console.log("tweet", tweet);
    if (tweet.length <= 280) {
      try {
  
        let tweetData = {
          content: tweet,
          user:{
            id: authCTX.userId,
          },
        };
        console.log("tweetData", tweetData);
        const res = await createTweet(tweetData);
        console.log("res", res);
        navigation.navigate("Tab");
      } catch (error) {
        console.log("error", error);
      }
    } else {
      Alert.alert("Tweet is too long and must be less than 280 characters");
    }
  };
  return (
    <View>
      <View style={styles.formHeader}>
        <Text style={charCount < 0 ? styles.charCountExceeded : styles.charCount}>
          {charCount < 0 ? `Exceeded by ${charCount * -1}` : `Characters left: ${charCount}`}
        </Text>
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
        </View>
        {showInput && (
          <TextInput
            style={styles.formInput}
            placeholder="What's happening?"
            placeholderTextColor={COLORS.gray}
            multiline
            onChangeText={handleChangeText}
            value={tweet}
            maxLength={280}
          />
        )}
      </View>
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
    color: "gray",
  },
  charCountExceeded: {
    color: "gray",
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
  formInput: {
    fontSize: 20,
    color: "black",
    marginLeft: 10,
  },
});

export default NewTweetForm;
