import { View, Text, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React, { useState } from "react";

export default function TodoItem({ text }) {
  const [isSelected, setIsSelected] = useState(false);

  console.log(isSelected);

  return (
    <View style={styles.todo}>
      <BouncyCheckbox
        fillColor="#FF74B1"
        onPress={(isSelected) => setIsSelected(isSelected)}
      />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    backgroundColor: "white",
    borderLeftColor: "#FF5D5D",
    borderLeftWidth: 2,
    borderLeftStyle: "solid",
    margin: 5,
    padding: 10,
  },
});
