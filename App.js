import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>OMerhabas deneme 2 çalış d!</Text>
      <TextInput style={{height:40, borderColor:'gray', borderWidth:1,width:100}}/>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2da21',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
