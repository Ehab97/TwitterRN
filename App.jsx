import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import NewTweet from "./src/screens/NewTweet";
import TweetDetails from "./src/screens/TweetDetails";
import Profile from "./src/screens/Profile";
import Settings from "./src/screens/Settings";
import Search from "./src/screens/Search";
import Notifications from "./src/screens/Notifications";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="NewTweet" component={NewTweet} />
      <Stack.Screen name="Tweet" component={TweetDetails} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home2" component={HomeScreen} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        {/* <Drawer.Screen name="Profile" component={Profile} /> */}
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
