import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../helpers/colors";
import { Ionicons } from "@expo/vector-icons";
import { TWEETS } from "./HomeScreen";
import TweetLists from "../components/tweets/TweetLists";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={{
          uri: "https://picsum.photos/500/500",
        }}
      />
      <View style={styles.profileImageContainer}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://picsum.photos/300/300",
          }}
        />
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.username}>@johndoe</Text>
      </View>
      {/* description */}
      <View style={[styles.descriptionContainer, styles.paddingHorizontal15, styles.mbottom10]}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis qui reprehenderit incidunt harum
        </Text>
      </View>
      {/* location */}
      <View style={[styles.locationContainer, styles.alignItemsCenter, styles.paddingHorizontal15, styles.mbottom10]}>
        <Ionicons name="location-outline" size={18} color="grey" />
        <Text style={styles.location}>Lagos, Nigeria</Text>
      </View>
      <View style={[styles.flexRow, styles.alignItemsCenter, styles.paddingHorizontal15, styles.mbottom10]}>
        <View style={[styles.flexRow, styles.mr10, styles.alignItemsCenter]}>
          <Ionicons name="globe-outline" size={18} color="grey" />
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://johndoe.com");
            }}
          >
            <Text style={[styles.location, styles.link]}>https://johndoe.com</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexRow}>
          <Ionicons name="calendar-outline" size={18} color="grey" />
          <Text style={styles.location}>Joined 2021</Text>
        </View>
      </View>
      <View style={[styles.flexRow, styles.paddingHorizontal15, styles.mbottom10]}>
        <View style={[styles.flexRow, styles.mr10, styles.alignItemsCenter]}>
          <Text style={styles.followerNumber}>100</Text>
          <Text style={styles.followerText}>Following</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.followerNumber}>100</Text>
          <Text style={styles.followerText}>Followers</Text>
        </View>
      </View>
      <View style={styles.seprator}></View>
      {/* Tweets */}
      <TweetLists tweets={TWEETS} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flexRow: {
    flexDirection: "row",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  padding15: {
    padding: 15,
  },
  paddingVertical15: {
    paddingVertical: 15,
  },
  paddingHorizontal15: {
    paddingHorizontal: 15,
  },
  mr10: {
    marginRight: 10,
  },
  ml10: {
    marginLeft: 10,
  },
  mbottom10: {
    marginBottom: 10,
  },
  backgroundImage: {
    width: 800,
    height: 120,
  },
  bold: {
    fontWeight: "bold",
  },
  grey: {
    color: "grey",
  },
  profileImageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 12,
    marginTop: -34,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
  },
  followButton: {
    backgroundColor: COLORS.dark,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  followButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  nameContainer: {
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 22,
  },
  username: {
    color: "grey",
    marginTop: 2,
  },
  descriptionContainer: {
    // paddingHorizontal: 10,
    marginTop: 8,
  },
  description: {
    lineHeight: 22,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  location: {
    color: "grey",
    marginLeft: 5,
    fontSize: 16,
  },
  followerNumber: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 5,
  },
  followerText: {
    color: "grey",
    fontSize: 16,
    fontWeight: "400",
  },
  seprator: {
    borderBottomColor: "#e5e7eb",
    borderBottomWidth: 1,
  },
});
export default Profile;
