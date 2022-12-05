import { View, StyleSheet } from "react-native";

import Tasks from "react-native-vector-icons/MaterialIcons";
import Analytics from "react-native-vector-icons/Ionicons";
import Settings from "react-native-vector-icons/AntDesign";

import React from "react";
import NavigationButton from "./NavigationButton";

export default function Navigation() {
  return (
    <View style={styles.navigationContainer}>
      <NavigationButton
        icon={<Tasks name="add-task" size={30} color="#3b3b3b" />}
        text="Tasks"
      />
      <NavigationButton
        icon={<Analytics name="analytics" size={30} color="#3b3b3b" />}
        text="Analytics"
      />
      <NavigationButton
        icon={<Settings name="setting" size={30} color="#3b3b3b" />}
        text="Settings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    backgroundColor: "white",
    width: "100%",
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    borderTopColor: "#e0e0e0",
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
