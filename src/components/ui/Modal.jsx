import React from "react";
import { Modal, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Header = ({ onClose, styles, route, navigate }) => {
  const hanldeClose = () => {
    onClose();
    navigate.goBack();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={hanldeClose}>
        <Text style={styles.closeButton}>Close</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{route.name}</Text>
      <View style={{ width: 60 }}></View>
    </View>
  );
};

const CustomModal = ({ visible, onClose, children }) => {
  const route = useRoute();
  const navigate = useNavigation();
  const hanldeClose = () => {
    console.log("close");
    onClose();
  };
  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Stack.Navigator>
            {/* <Stack.Screen
              name="Header"
              component={() => (
                <View style={styles.header}>
                  <TouchableOpacity onPress={onClose}>
                    <Text style={styles.closeButton}>Close</Text>
                  </TouchableOpacity>
                  <Text style={styles.headerTitle}>{route.name}</Text>
                  <View style={{ width: 60 }}></View>
                </View>
              )}
              options={{
                headerShown: false,
              }}
            /> */}
            <Stack.Screen
              name="Header"
              options={{
                headerShown: false,
              }}
            //   component={() => <Header onClose={onClose} styles={styles} route={route} navigate={navigate} />}
            >
              {() => <Header onClose={onClose} styles={styles} route={route} navigate={navigate} />}
            </Stack.Screen>
            {/* <Stack.Screen name="Content" component={() => <View style={styles.content}>{children}</View>} /> */}
            <Stack.Screen name="Content">{() => <View style={styles.content}>{children}</View>}</Stack.Screen>
          </Stack.Navigator>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: "50%",
    width: "100%",
    overflow: "hidden",
  },
  header: {
    height: 50,
    backgroundColor: "#f2f2f2",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  closeButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF",
  },
  headerTitle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  content: {
    flex: 1,
    padding: 10,
  },
});

export default CustomModal;
