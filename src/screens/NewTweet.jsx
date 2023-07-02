import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const NewTweet = () => {
  return (
      <View style={styles.container}>
      <Text>NewTweet</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default NewTweet