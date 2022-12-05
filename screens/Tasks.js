import { Text, StyleSheet, FlatList, Image } from "react-native";
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
      {tasks.length ? (
        <FlatList
          style={styles.tasksContainer}
          persistentScrollbar={true}
          data={tasks}
          renderItem={({ item }) => <TodoItem text={item} />}
        />
      ) : (
        <Image
          source={require("../assets/noDataImage.png")}
          style={styles.image}
        />
      )}
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
    width: "90%",
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: "30%",
  },
});
