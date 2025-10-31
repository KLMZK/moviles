import React from 'react';
import { ScrollView, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function Ejercicio8() {
  const [nStr, setNStr] = React.useState('');
  const [table, setTable] = React.useState('');

  const run = () => {
    const n = Number(nStr);
    if (!Number.isFinite(n)) {
      setTable('Entrada no válida');
      return;
    }
    const lines = [];
    for (let i = 1; i <= 10; i++) {
      lines.push(`${n} x ${i} = ${n * i}`);
    }
    setTable(lines.join('\n'));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 8</Text>
      <Text>Introduce un número para ver su tabla de multiplicar:</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={nStr} onChangeText={setNStr} />
      <Button title="Mostrar tabla" onPress={run} />
      <Text style={styles.output}>{table}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8 },
  output: { marginTop: 12, whiteSpace: 'pre-wrap' },
});