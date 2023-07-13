import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{margin: 16, borderWidth: 2, borderColor: 'black', padding: 20}}>HELLO WORLD!</Text>
      <Text style={styles.text}>HELLO WORLD!</Text>
      <Button title='tap me!'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 16, 
    borderWidth: 2, 
    borderColor: 'black', 
    padding: 20
  }
});
