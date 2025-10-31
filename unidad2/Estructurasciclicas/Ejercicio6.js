import React from 'react';
import { ScrollView, Text, Button, StyleSheet } from 'react-native';

export default function Ejercicio6() {
  const [output, setOutput] = React.useState('');

  const run = () => {
    const evens = [];
    for (let i = 2; i <= 15; i += 1) {
      if (i % 2 === 0) evens.push(i);
    }
    setOutput(evens.join(', '));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 6</Text>
      <Text>Números pares entre 2 y 15:</Text>
      <Button title="Mostrar" onPress={run} />
      <Text style={styles.result}>{output}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  result: { marginTop: 12 },
});