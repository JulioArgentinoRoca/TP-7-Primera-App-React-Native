import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
const localImg = require('./assets/edgarAllanPou.jpeg')
const successImg = require('./assets/successPic.gif')
import { Audio } from 'expo-av';

const correctEmail = "Rick@email.com"
const correctPassword = "1234"


export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = async () => {
    if (email === correctEmail && password === correctPassword) {
      if (!showPopup) {
        const { sound } = await Audio.Sound.createAsync(
          require('./assets/success.mp3')
        );
        setShowPopup(true)
        await sound.playAsync();
      }


    } else {
      Alert.alert('Usuario o contraseña incorrectos, vuelva a intentar')
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Edgar Allan Pou's login app</Text>
      </View>

      <View style={styles.container}>



        <Image
          source={localImg}
        />
        <TextInput value={email} placeholder='Email' onChangeText={setEmail} style={styles.textInputs} />
        <TextInput value={password} placeholder='********' onChangeText={setPassword} style={styles.textInputs} secureTextEntry />

        <TouchableOpacity title='presioname!' onPress={() => handleSubmit()} style={styles.button}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>

        <View style={styles.extraOptions}>
          <TouchableOpacity title='presioname!' onPress={() => Alert.alert('mal por vos, cuchala jjasjk')}>
            <Text>Olvidaste la clave?</Text>
          </TouchableOpacity>

          <TouchableOpacity title='presioname!' onPress={() => Alert.alert('no sé que poner acá :/')}>
            <Text>Crear cuenta</Text>
          </TouchableOpacity>
        </View>

        {showPopup &&
          <View style={styles.popup}>
            <TouchableOpacity title='presioname!' onPress={() => setShowPopup(false)} style={styles.closeBtn}>
              <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 30, }}>x</Text>
            </TouchableOpacity>

            <Image style={styles.successImg}
              source={successImg}
            />
            <Text>Never gonna give you up</Text>
            <Text>Never gonna let you down</Text>
            <Text>Never gonna run around and desert you</Text>
            <Text>Never gonna make you cry</Text>
            <Text>Never gonna say goodbye</Text>
            <Text>Never gonna tell a lie and hurt you</Text>

          </View>
        }

      </View>

      <StatusBar style='light' />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  successImg: {
    width: 200,
    height: 150,
    marginBottom: '3%'
  },

  closeBtn: {
    position: 'absolute',
    top: '0%',
    left: '3%',
  },

  popup: {
    position: 'absolute',
    zIndex: 99,
    width: '90%',
    height: 'auto',
    padding: '5%',
    marginTop: '20%',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'crimson',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 0px 10px 0px rgb(0, 0, 0)',

  },

  header: {
    backgroundColor: 'red',
    padding: '10%',
    paddingBottom: '1%',
    alignItems: 'center',

  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Roboto',

  },

  textInputs: {
    width: '90%',
    height: 'auto',
    borderWidth: 1.3,
    borderColor: 'red',
    borderRadius: 5,
    backgroundColor: '#f0f6ff',
    marginTop: '2%'

  },

  button: {
    width: '90%',
    height: 'auto',
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: '4%',
    alignItems: 'center',
    padding: '3%'
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },

  extraOptions: {
    alignItems: 'center',
    marginTop: '4%',
    gap: '10%',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: '10%'
  },
});
