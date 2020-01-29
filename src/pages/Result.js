import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Result({ navigation }) {
  function handleSubmit() {
    navigation.navigate('Calc')
  }

  return ( 
    <View style={styles.container}>
       {navigation.getParam('resultado') === 'NaN' ? 
          <Text style={ styles.erro }>
            {'Preencha corretamente \npara obter o resultado'}
          </Text> 
            : 
          <Text style={ styles.resultado }>
            {navigation.getParam('resultado')}
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
    // flex: 1,
    marginTop: 300,
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
    borderColor: '#dddddd',
    borderWidth: 2,
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
    borderColor: '#dddddd',
    borderWidth: 2,
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