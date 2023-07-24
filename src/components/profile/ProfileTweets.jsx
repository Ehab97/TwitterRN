import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Tweet from "../tweets/Tweet";
import ProfileHeader from "./ProfileHeader";

function ProfileTweets({
  tweets,
  user,
  currentUserID,
  userId,
  isLoading,
  unfollowUser,
  followUser,
  refreshing,
  onRefresh,
}) {
  console.log("Prfile tweets", user, currentUserID, userId, isLoading, unfollowUser, followUser);

  return (
    <View>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet item={item} />}
        //   renderItem={props => <RenderItem {...props} />}
        keyExtractor={(item) => item._id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        ListHeaderComponent={() => (
          <ProfileHeader
            user={user}
            currentUserID={currentUserID}
            userId={userId}
            isLoading={isLoading}
            followUser={followUser}
            unfollowUser={unfollowUser}
          />
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
        // onEndReached={handleEnd}
        // onEndReachedThreshold={0}
        // ListFooterComponent={() => !isAtEndOfScrolling && <ActivityIndicator size="large" color="gray" />}
        // scrollIndicatorInsets={{ right: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
});
export default ProfileTweets;
