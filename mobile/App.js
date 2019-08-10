import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Hello World </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex', //Todos os componentes por default ja são flex
    flexDirection: 'column', //O flexDirection por default ja é column
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
  }
})