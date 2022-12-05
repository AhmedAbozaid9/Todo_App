import { ScrollView, Text, StyleSheet, FlatList } from "react-native";
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
      <Text>Tasks</Text>
      <ScrollView style={styles.tasksContainer} persistentScrollbar={true}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <TodoItem text={item} />}
        />
      </ScrollView>
      <BigButton handleClick={addTask} text="add a new task" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  tasksContainer: {
    backgroundColor: "gray",
    height: "82%",
  },
});
