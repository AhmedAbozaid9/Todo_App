import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./components/Navigation";

import Tasks from "./screens/Tasks";

export default function App() {
  return (
    <View style={styles.container}>
      <Tasks />
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6F6",
    alignItems: "center",
  },
});
