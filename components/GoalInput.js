import { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal, Image } from 'react-native';

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
        console.log(enteredGoalText);
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/time.png')}></Image>
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='red'/>
                    </View>
                </View>
            </View>
        </Modal>
        
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white'
    },
    image: {
        width: 400,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 2,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: 'black',
        borderRadius: 6,
        width: '100%',
        padding: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});
