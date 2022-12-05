import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import Screen from "../components/Screen";
import TodoItem from "../components/TodoItem";
import BigButton from "../components/BigButton";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  return (
    <Screen>
      <Text>Tasks</Text>
      <BigButton text="add a new task"/>
    </Screen>
  );
}
