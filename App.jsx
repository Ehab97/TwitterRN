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
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="NewTweet"
        component={NewTweet}
        options={{
          title: "",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Tweet"
        component={TweetDetails}
        options={{
          title: "",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="search" color={color} size={size} />,
          tabBarLabel: "Search",
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="notifications" color={color} size={size} />,
          tabBarLabel: "Notifications",
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
            drawerLabel: "Home",
          }}
        />
        {/* <Drawer.Screen name="Profile" component={Profile} /> */}
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} />,
            drawerLabel: "Settings",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
