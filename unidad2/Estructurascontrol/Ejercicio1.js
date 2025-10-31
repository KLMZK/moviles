import React from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Ejercicio1() {
  const [inputs, setInputs] = React.useState(['', '', '', '', '']);
  const [result, setResult] = React.useState(null);

  const setVal = (idx, v) => {
    const copy = inputs.slice();
    copy[idx] = v;
    setInputs(copy);
  };

  const run = () => {
    const nums = inputs.map((s) => Number(s));
    if (nums.some((n) => !Number.isFinite(n))) {
      setResult('Ingrese cinco números válidos.');
      return;
    }
    const max = Math.max(...nums);
    setResult(`Máximo: ${max}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 1 - Máximo de cinco números</Text>
      {inputs.map((v, i) => (
        <TextInput
          key={i}
          style={styles.input}
          keyboardType="numeric"
          placeholder={`Número ${i + 1}`}
          value={v}
          onChangeText={(t) => setVal(i, t)}
        />
      ))}
      <Button title="Calcular máximo" onPress={run} />
      {result !== null && <Text style={styles.result}>{result}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 6 },
  result: { marginTop: 12, fontWeight: '600' },
});