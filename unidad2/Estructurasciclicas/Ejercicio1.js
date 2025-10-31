import React from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function Ejercicio1() {
  const [nStr, setNStr] = React.useState('');
  const [result, setResult] = React.useState(null);

  const run = () => {
    const n = Number(nStr);
    if (!Number.isFinite(n)) {
      setResult('Entrada no válida');
      return;
    }
    if (n > 0) {
      setResult(Array.from({ length: n }, (_, i) => i).join(', '));
    } else if (n < 0) {
      const arr = [];
      for (let i = 0; i > n; i--) arr.push(i);
      setResult(arr.join(', '));
    } else {
      setResult('No hay elementos antes de 0.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 1</Text>
      <Text>Introduce un número:</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={nStr} onChangeText={setNStr} />
      <Button title="Mostrar elementos antes" onPress={run} />
      <Text style={styles.result}>{result}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8 },
  result: { marginTop: 12 },
});