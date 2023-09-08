import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(text) {
    setCourseGoals(prev => text.length ? [...prev, { text, id: Math.random().toString() }] : prev);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(prev => prev.filter(goal => goal.id !== id))
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer} >
        <Button title="Add new goal" color="#a065ec" onPress={startAddGoalHandler} />
        <GoalInput onCancel={endAddGoalHandler} visible={modalIsVisible} onAddGoal={addGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical
            data={courseGoals}
            renderItem={itemData => <GoalItem item={itemData.item} onDeleteItem={deleteGoalHandler} />}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // Added flex 1 to the outer container, so that it takes the whole screen available space
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
