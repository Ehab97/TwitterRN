import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React, { useContext, useState, useEffect } from "react";
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
import TweetDropDwonAction from "./src/components/ui/TweetDropDwonAction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext, AuthContextProvider } from "./src/store/context/auth-context";
import LoadingOverlay from "./src/components/ui/LoadingOverlay";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignUpScreen";
import { COLORS } from "./src/helpers/colors";

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
      <Stack.Screen
        name="TweetAction"
        component={TweetDropDwonAction}
        options={{
          title: "",
          headerShown: true,
          presentation: "modal",
          cardStyle: { height: "50%" },
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

const AuthedStack = () => {
  return (
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

      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} />,
          drawerLabel: "Settings",
        }}
      />
    </Drawer.Navigator>
  );
};

function UnAuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: COLORS.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

const Navigation = () => {
  const authCTX = useContext(AuthContext);
  return <NavigationContainer>{authCTX?.isAuthnticated ? <AuthedStack /> : <UnAuthStack />}</NavigationContainer>;
};
const Root = () => {
  const authCTX = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const fetchToken = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        console.log({ token });
        authCTX.authenticate(token);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  if (loading) return <LoadingOverlay message={`Checking user authentication...`} />;

  return <Navigation />;
};

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
};

export default App;
