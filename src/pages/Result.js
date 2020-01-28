import React, { useState, useEffect } from 'react'
import { View, Text, AsyncStorage, StyleSheet } from 'react-native'

export default function Result() {
  const [result, setResult] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('resultado').then(total => {
      const Resultado = total

      setResult(Resultado)
    })

    AsyncStorage.clear()

    console.log(result)
  }, [])

  return ( 
    <View style={styles.container}>
      <Text>{result}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})