import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import TweetIcon from "../ui/TweetIcon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import DropdownToggle from "../ui/DropDownToggle";

const TweetView = () => {
  const navigation = useNavigation();
  const handleLikeClick = () => {};
  const handleRetweetClick = () => {};
  const handleCommentClick = () => {};
  const handleShareClick = () => {};
  const goToProfile = () => {
    navigation.push(
      "Profile"
      // , { id: item.user.id }
    );
  };
  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.flexRow, styles.justifyContentSpaceBetween, styles.padding15]}>
        <TouchableOpacity onPress={goToProfile}>
          <View style={[styles.userInfo, styles.flexRow, styles.alignItemsFlexStart]}>
            <Image
              style={styles.userImage}
              source={{
                uri: "https://picsum.photos/300/300",
              }}
            />
            <View>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.username}>@johndoe</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TweetAction");
          }}
        >
          <MaterialIcons name="more-vert" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.tweetContainer}>
        <Text style={styles.tweet}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis qui reprehenderit incidunt harum
          veritatis mollitia laborum. Soluta reprehenderit et provident odio corporis! Ratione, optio. Illum et veniam
          sapiente fuga.
        </Text>
      </View>
      <View style={[styles.footerIno, styles.flexRow, styles.padding15]}>
        <View style={[styles.flexRow, styles.mr10]}>
          <Text style={styles.number}>625</Text>
          <Text style={styles.text}>Retweets</Text>
        </View>
        <View style={[styles.flexRow, styles.mr10]}>
          <Text style={styles.number}>38</Text>
          <Text style={styles.text}>Quote Tweets</Text>
        </View>
        <View style={[styles.flexRow]}>
          <Text style={styles.number}>2,634</Text>
          <Text style={styles.text}>Likes</Text>
        </View>
      </View>
      <View style={[styles.footerActions, styles.flexRow, styles.padding15, styles.justifyContentSpaceAround]}>
        <TweetIcon
          onPress={handleCommentClick}
          text={""}
          iconName="chatbubble-outline"
          iconSize={22}
          iconColor="grey"
        />
        <TweetIcon onPress={handleRetweetClick} text={""} iconName="repeat-outline" iconSize={22} iconColor="grey" />
        <TweetIcon
          onPress={handleLikeClick}
          text={""}
          iconName="heart-outline"
          iconSize={22}
          iconColor="grey"
          isLiked
        />
        <TweetIcon onPress={handleShareClick} iconName="share-outline" iconSize={22} iconColor="grey" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
  },
  header: {},
  userInfo: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: "grey",
  },
  tweetContainer: {
    padding: 10,
    borderBottomColor: "#ededed",
    borderBottomWidth: 1,
  },
  tweet: {
    fontSize: 18,
    lineHeight: 22,
    marginBottom: 15,
  },
  footerIno: {
    alignItems: "center",
    borderBottomColor: "#ededed",
    borderBottomWidth: 1,
  },
  number: {
    marginRight: 10,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
  },
  footerActions: {
    alignItems: "center",
    borderBottomColor: "#ededed",
    borderBottomWidth: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  justifyContentSpaceBetween: {
    justifyContent: "space-between",
  },
  justifyContentSpaceAround: {
    justifyContent: "space-around",
  },
  alignItemsFlexStart: {
    alignItems: "flex-start",
  },
  padding15: {
    padding: 15,
  },
  mr10: {
    marginRight: 10,
  },
});

export default TweetView;
