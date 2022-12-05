import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

export default function BigButton({ text, positionStyle, handleClick }) {
  return (
    <TouchableOpacity
      style={[styles.addTask, positionStyle]}
      activeOpacity={0.8}
      onPress={handleClick}
    >
      <Text style={styles.addText}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  addTask: {
    backgroundColor: "#FF74B1",
    padding: 15,
    borderRadius: 100,
    margin: 15,
    width: "95%",
  },
  addText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
});
