import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

export default function BigButton({ text }) {
  return (
    <TouchableOpacity style={styles.addTask} activeOpacity={0.8}>
      <Text style={styles.addText}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  addTask: {
    backgroundColor: "#FF74B1",
    color: "white",
    padding: 15,
    borderRadius: 100,
    position: "absolute",
    bottom: 20,
    margin: 40,
    width: "95%",
  },
  addText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
});
