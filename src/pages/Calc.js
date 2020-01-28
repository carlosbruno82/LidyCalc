import React, { useState } from 'react'
import { View, AsyncStorage, KeyboardAvoidingView, Platform, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import logo from '../assets/logo.png'

export default function Calc({ navigation }) {
  const [amostra, setAmostra] =  useState('')
  const [medida, setMedida] = useState('')
  const [pontos, setPontos] = useState('')


  function handleSubmit() {
    const a = parseInt(amostra)
    const m = parseInt(medida)
    const p = parseInt(pontos)

    const regraTres = ((m * p) / a).toString()

    AsyncStorage.setItem('resultado', regraTres )

    navigation.navigate('Result')
  }
  
  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios' || Platform.OS === 'android'} behavior="padding" style={styles.container}>
      <Image source={logo} />
      
      <View style={styles.form}>
        <Text style={styles.label}>AMOSTRA DE PONTOS *</Text>
        <TextInput
          style={styles.input}
          placeholder="Tamanho da amostra"
          placeholderTextColor="#999"
          keyboardType="decimal-pad"
          value={amostra}
          onChangeText={setAmostra}
        />

        <Text style={styles.label}>MEDIDA DA RECEITA *</Text>
        <TextInput
          style={styles.input}
          placeholder="Qual o tamanho final"
          placeholderTextColor="#999"
          keyboardType="decimal-pad"
          value={medida}
          onChangeText={setMedida}
        />

        <Text style={styles.label}>QUANTIDADES DE PONTOS *</Text>
        <TextInput
          style={styles.input}
          placeholder="Quantos pontos na amostra"
          placeholderTextColor="#999"
          keyboardType="decimal-pad"
          value={pontos}
          onChangeText={setPontos}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Resultado</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

 form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
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
