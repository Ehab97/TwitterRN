import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import TweetIcon from "../ui/TweetIcon";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


const Tweet = React.memo(({ item }) => {
  // console.log('profile tweet', item);
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.push("Profile", { userId: item.user.id });
  };

  const handleCreatedTime = (time) => {
    const date = new Date(time);
    const now = new Date();

    const secondsAgo = Math.floor((now - date) / 1000);

    if (secondsAgo < 60) {
      return `${secondsAgo}s ago`;
    } else if (secondsAgo < 3600) {
      const minutesAgo = Math.floor(secondsAgo / 60);
      return `${minutesAgo}m ago`;
    } else if (secondsAgo < 86400) {
      const hoursAgo = Math.floor(secondsAgo / 3600);
      return `${hoursAgo}h ago`;
    } else if (secondsAgo < 604800) {
      const daysAgo = Math.floor(secondsAgo / 86400);
      return `${daysAgo}d ago`;
    } else {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    }
  };

  const goToTweet = () => {
    navigation.push("Tweet", { tweetId: item._id });
  };
  const handleLikeClick = () => {};
  const handleRetweetClick = () => {};
  const handleCommentClick = () => {};
  const handleShareClick = () => {};

  return (
    <View style={[styles.container, styles.flexRow]}>
      <TouchableOpacity onPress={goToProfile}>
        <Image
          style={styles.image}
          source={{
            uri: item?.user?.image,
          }}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <TouchableOpacity onPress={goToProfile}>
          <View style={[styles.header, styles.flexRow]}>
            <Text numberOfLines={1} style={styles.title}>
              {item?.user?.name}
            </Text>
            <Text numberOfLines={1} style={styles.userName}>
              @{item?.user?.userName}
            </Text>
            <Text style={styles.middot}>&middot;</Text>
            <Text numberOfLines={1} style={styles.createdAt}>
              {handleCreatedTime(item.date)}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToTweet}>
          <View style={styles.bodyContainer}>
            <Text style={styles.body}>{item.content}</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.footer, styles.flexRow]}>
          <View style={[styles.footerActions, styles.flexRow]}>
            <TweetIcon
              onPress={handleCommentClick}
              text={item.comments}
              iconName="chatbubble-outline"
              iconSize={22}
              iconColor="grey"
              style={styles.icon}
            />
            <TweetIcon
              onPress={handleRetweetClick}
              text={item.retweets}
              iconName="repeat-outline"
              iconSize={22}
              iconColor="grey"
              style={styles.icon}
            />
            <TweetIcon
              onPress={handleLikeClick}
              text={item.likes}
              iconName="heart-outline"
              iconSize={22}
              iconColor="grey"
              isLiked
              style={styles.icon}
            />
            <TweetIcon
              onPress={handleShareClick}
              iconName="share-outline"
              iconSize={22}
              iconColor="grey"
              style={styles.icon}
            />
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    width: "100%",
    padding: 12,
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },
  content: {
    flexDirection: "column",
  },
  header: {
    // justifyContent: "space-between",
    alignItems: "center",
    // width: "100%",
  },
  userInfo: {},
  flexRow: {
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 4,
  },
  userName: {
    fontSize: 13,
    color: "grey",
  },
  middot: {
    marginHorizontal: 8,
    fontSize: 18,
  },
  createdAt: {
    fontSize: 13,
  },
  bodyContainer: {
    marginTop: 4,
  },
  body: {
    fontSize: 15,
    marginBottom: 12,
    lineHeight: 22,
  },
  footer: {
    // justifyContent: "space-between",
    width: "100%",
  },
  footerActions: {
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 24,
  },
});

export default Tweet;
