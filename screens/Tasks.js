import { Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";

import Screen from "../components/Screen";
import TodoItem from "../components/TodoItem";
import BigButton from "../components/BigButton";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    setTasks((oldTasks) => [...oldTasks, "hahaha I've been added"]);
    console.log(tasks);
  };
  return (
    <Screen>
      <Text style={styles.header}>Tasks</Text>
      <FlatList
        style={styles.tasksContainer}
        persistentScrollbar={true}
        data={tasks}
        renderItem={({ item }) => <TodoItem text={item} />}
      />
      <BigButton handleClick={addTask} text="add a new task" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
    margin: 20,
    color: "#222222",
  },
  tasksContainer: {
    height: "82%",
    width: "90%",
  },
});
