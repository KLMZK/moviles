import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';

export default function Ejercicio2() {
  const [output, setOutput] = React.useState('');

  const run = () => {
    const lines = [];
    let line = [];
    for (let i = 1; i <= 30; i++) {
      line.push(i);
      if (i % 7 === 0) {
        lines.push(line.join(' '));
        line = [];
      }
    }
    if (line.length) lines.push(line.join(' '));
    setOutput(lines.join('\n'));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 2</Text>
      <Text>Imprime 1..30 con salto de línea cada 7 números</Text>
      <Button title="Generar" onPress={run} />
      <Text style={styles.output}>{output}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  output: { marginTop: 12, whiteSpace: 'pre-wrap' },
});