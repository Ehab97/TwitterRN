import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
      <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default Settings