import React from 'react';
import { ScrollView, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Ejercicio8() {
  const [qtyStr, setQtyStr] = React.useState('');
  const [result, setResult] = React.useState(null);

  const run = () => {
    const q = parseInt(qtyStr, 10);
    if (!Number.isFinite(q) || q < 0) {
      setResult('Cantidad inválida.');
      return;
    }
    let total;
    if (q <= 10) {
      total = q * 250;
    } else {
      total = 10 * 250 + (q - 10) * 230;
    }
    setResult(`Bates: ${q}\nCosto total: $${total.toFixed(2)}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 8 - Bates con precio escalonado</Text>
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Cantidad de bates" value={qtyStr} onChangeText={setQtyStr} />
      <Button title="Calcular" onPress={run} />
      {result && <Text style={styles.result}>{result}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 6 },
  result: { marginTop: 12 },
});