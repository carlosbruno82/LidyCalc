import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'

import logo from '../assets/logo.png'

export default function Home({ navigation }) {
  function handleSubmit() {
    navigation.navigate('Calc')
  }
  
  return (
    <View style={styles.container}>
      <Image source={logo} />

      <Text style={styles.welcome}>Seja bem-vinda(o) ao LidyCalc</Text>

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Clique aqui para começar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcome: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#444',
    marginTop: 15,
  },

  button: {
    marginTop: 25,
    height: 42,
    width: 200,
    backgroundColor: '#ff5599',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})