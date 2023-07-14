import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  // entered goal
  const [ enteredGoalText, setEnteredGoalText ] = useState('');
  // array of goals
  const [ courseGoals, setCourseGoals ] = useState([]);

  // function to handle text input
  function goalInput(enteredText) {
    setEnteredGoalText(enteredText);
  };

  //function to handle button press
  function addGoal() {
    // if your new state depends on the previous state use a function (better practice)
    setCourseGoals((currentCourseGoals) => [...courseGoals, enteredGoalText]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInput}/>
        <Button title='Add Goal' onPress={addGoal}></Button>
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map((goal)=> (
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
        </ScrollView>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
});
