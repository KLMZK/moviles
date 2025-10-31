import React from 'react';
import { ScrollView, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Ejercicio3() {
  const [a, setA] = React.useState('');
  const [b, setB] = React.useState('');
  const [result, setResult] = React.useState(null);

  const run = () => {
    const na = parseInt(a, 10);
    const nb = parseInt(b, 10);
    if (!Number.isFinite(na) || !Number.isFinite(nb)) {
      setResult('Ingrese dos enteros válidos.');
      return;
    }
    setResult(`Mayor: ${Math.max(na, nb)}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 3 - Mayor de dos enteros</Text>
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Número A" value={a} onChangeText={setA} />
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Número B" value={b} onChangeText={setB} />
      <Button title="Determinar mayor" onPress={run} />
      {result && <Text style={styles.result}>{result}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 6 },
  result: { marginTop: 12, fontWeight: '600' },
});