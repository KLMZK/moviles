import React from 'react';
import { ScrollView, Text, Button, StyleSheet } from 'react-native';

export default function Ejercicio7() {
  const [output, setOutput] = React.useState('');

  const run = () => {
    const arr = [];
    for (let i = 10; i <= 100; i += 10) arr.push(i);
    setOutput(arr.join(', '));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 7</Text>
      <Text>Imprime 10,20,...,100</Text>
      <Button title="Generar" onPress={run} />
      <Text style={styles.result}>{output}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  result: { marginTop: 12 },
});