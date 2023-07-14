import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  // array of goals
  const [ courseGoals, setCourseGoals ] = useState([]);



  //function to handle button press
  function addGoal(enteredGoalText) {
    // if your new state depends on the previous state use a function (better practice)
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {id: Math.random().toString(), text: enteredGoalText}]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoal}/>
      <View style={styles.goalsContainer}>
        <FlatList
          // FlatList optimizes scrolling by only rendering what is required (Lazy Loading)
          data={courseGoals} 
          renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text}/>
        }} 
        // get unique key for each goal
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

// styles do not cascade, no style inheritance like in CSS
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 4
  }
});
