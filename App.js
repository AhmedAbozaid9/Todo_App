import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Tasks from "./screens/Tasks";

export default function App() {
  return (
    <View style={styles.container}>
      <Tasks />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
