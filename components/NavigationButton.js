import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

export default function NavigationButton({ icon, text }) {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.navigationButton}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  navigationButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    color: "#3b3b3b",
  },
});
