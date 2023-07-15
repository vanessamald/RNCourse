import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  // Modal state
  const [ modalIsVisible, setModalIsVisible ] = useState(false);
   // array of goals
   const [ courseGoals, setCourseGoals ] = useState([]);

  // function to handle Modal visibility
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  //function to handle button press
  function addGoal(enteredGoalText) {
    // if your new state depends on the previous state use a function (better practice)
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  // handle deleting a goal
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      // filter goals by id, return true if there is no match
      return currentCourseGoals.filter((goal) => goal.id !== id );
    });
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Image style={styles.image} source={require('./assets/images/time2.png')}></Image>
      <View style={styles.button}>
        <Button 
          title='Add New Goal' 
          color='#5e0acc'
          onPress={startAddGoalHandler}
        />
      </View>
      <GoalInput 
        visible={modalIsVisible} 
        onAddGoal={addGoal} 
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          // FlatList optimizes scrolling by only rendering what is required (Lazy Loading)
          data={courseGoals} 
          renderItem={(itemData) => {
          return <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteItem={deleteGoalHandler}/>
        }} 
        // get unique key for each goal
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

// styles do not cascade, no style inheritance like in CSS
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 200,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 4
  },
  image: {
    width: 350,
    height: 100,

  },
  button: {
    width: '100%',

}
});
