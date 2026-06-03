import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
const localImg = require('./assets/edgarAllanPou.jpeg')

export default function App() {
  const [userInput, setUserInput] = useState()

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login app: EdgarAllanPou</Text>

      </View>

      <View style={styles.container}>
        <TextInput value={userInput} placeholder='escribe aqui' onChangeText={setUserInput} />
        <Image
          source={localImg}
        />
        <Text>Edgar Allan Pou loves u! {userInput}</Text>

        <TouchableOpacity title='presioname!' onPress={() => Alert.alert('~hola bb')}>
          <Text>presioname!</Text>
        </TouchableOpacity>
        
      </View>

      <StatusBar style='dark' />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    padding: '10%', 
    paddingBottom: '8%',
    alignItems: 'center',
    
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Roboto',

  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: '10%'
  },
});
