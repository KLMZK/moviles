import React from 'react';
import { ScrollView, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Ejercicio4() {
  const [qty, setQty] = React.useState('');
  const [result, setResult] = React.useState(null);

  const run = () => {
    const n = parseInt(qty, 10);
    if (!Number.isFinite(n) || n < 0) {
      setResult('Cantidad inválida.');
      return;
    }
    const unit = n >= 10 ? 100 : 108;
    setResult(`Cantidad: ${n}\nPrecio unitario: $${unit}\nTotal: $${(n * unit).toFixed(2)}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 4 - Precio de bates</Text>
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Cantidad de bates" value={qty} onChangeText={setQty} />
      <Button title="Calcular" onPress={run} />
      {result && <Text style={styles.result}>{result}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 6 },
  result: { marginTop: 12, whiteSpace: 'pre-wrap' },
});