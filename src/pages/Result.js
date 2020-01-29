import React, { useState, useEffect } from 'react'
import { View, Text, AsyncStorage, StyleSheet, TouchableOpacity } from 'react-native'

export default function Result({ navigation }) {
  const [result, setResult] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('resultado').then(total => {
      const Resultado = total

      setResult(Resultado)
    })

    // AsyncStorage.clear()
  
  }, [])

  function handleSubmit() {
    navigation.navigate('Calc')
  }

  return ( 
    <View style={styles.container}>
        {result === 'NaN' ? 
          <Text style={ styles.erro }>
            {'Preencha corretamente \npara obter o resultado'}
          </Text> 
            : 
          <Text style={ styles.resultado }>
            {result}
          </Text>
        }
      
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Clique aqui para voltar</Text>
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
  
  erro: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#444',
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: '#ff5599',
    borderWidth: 4,
    borderStyle: 'dotted',
    borderRadius: 0.001,
    textAlign: 'center',
    
  },

  resultado: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#444',
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: '#ff5599',
    borderWidth: 4,
    borderStyle: 'dotted',
    borderRadius: 0.001,
    textAlign: 'center',
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