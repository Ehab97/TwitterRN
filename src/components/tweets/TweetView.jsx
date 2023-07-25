import { View, Text, StyleSheet, Image, Pressable, Platform } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import TweetIcon from "../ui/TweetIcon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import { COLORS } from "../../helpers/colors";

const TweetView = ({ tweet }) => {
  const navigation = useNavigation();
  const handleLikeClick = () => {};
  const handleRetweetClick = () => {};
  const handleCommentClick = () => {};
  const handleShareClick = () => {};
  console.log({ tweet });
  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.flexRow, styles.justifyContentSpaceBetween, styles.padding15]}>
        <View style={[styles.userInfo, styles.flexRow, styles.alignItemsFlexStart]}>
          <Image
            style={styles.userImage}
            source={{
              uri: tweet?.user?.image,
            }}
          />
          <View>
            <Text style={styles.name}>{tweet?.user?.name}</Text>
            <Text style={styles.username}>@{tweet?.user?.userName}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TweetAction");
          }}
        >
          <MaterialIcons name="more-vert" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.tweetContainer}>
        <Text style={styles.tweet}>{tweet?.content}</Text>
        <View style={styles.tweetTimestampContainer}>
          <Text style={styles.tweetTimestampText}>
            {format(tweet?.date ? new Date(tweet.date) : new Date(), "h:mm a")}
          </Text>
          <Text style={styles.tweetTimestampText}>&middot;</Text>
          <Text style={styles.tweetTimestampText}>
            {format(tweet?.date ? new Date(tweet.date) : new Date(), "d MMM.yy")}
          </Text>
          <Text style={styles.tweetTimestampText}>&middot;</Text>
          <Text style={[styles.tweetTimestampText, styles.linkColor]}>
            {Platform.OS === "ios" ? "Twitter for iPhone" : "Twitter for Android"}
          </Text>
        </View>
      </View>
      <View style={[styles.footerIno, styles.flexRow, styles.padding15]}>
        <View style={[styles.flexRow, styles.mr10]}>
          <Text style={styles.number}>{tweet?.retweets}</Text>
          <Text style={styles.text}>Retweets</Text>
        </View>
        <View style={[styles.flexRow, styles.mr10]}>
          <Text style={styles.number}>{tweet?.comments}</Text>
          <Text style={styles.text}>Comments</Text>
        </View>
        <View style={[styles.flexRow]}>
          <Text style={styles.number}>{tweet?.likes}</Text>
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
          isCliked
        />
        <TweetIcon
          onPress={handleShareClick}
          iconName={Platform.OS === "ios" ? "ios-share-outline" : "share-social-outline"}
          iconSize={22}
          iconColor="grey"
        />
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
  tweetTimestampContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  tweetTimestampText: {
    color: "gray",
    marginRight: 6,
  },
  linkColor: {
    color: COLORS.primary,
  },
  spaceAround: {
    justifyContent: "space-around",
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
