import { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

function GoalInput(props) {
    // entered goal
    const [ enteredGoalText, setEnteredGoalText ] = useState('');

    // function to handle text input
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        // clear input
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText}/>
            <Button title='Add Goal' onPress={addGoalHandler}></Button>
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
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
});
